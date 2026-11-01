import { Actor, log } from 'apify';
const ECOS=['npm','PyPI','Go','crates.io','Maven','NuGet','RubyGems','Packagist','Pub','Hex','Hackage','CRAN','GitHub Actions'];
await Actor.init();
const { packages = [], ecosystem = 'npm' } = (await Actor.getInput()) || {};
if (!ECOS.includes(ecosystem)) throw new Error('Invalid ecosystem');
for (const raw of packages.slice(0, 1000)) {
  const str = String(raw).trim(), at = str.lastIndexOf('@');
  const [name, version] = at > 0 ? [str.slice(0, at), str.slice(at + 1)] : [str, ''];
  const body = { package: { name, ecosystem } }; if (version) body.version = version;
  const r = await fetch('https://api.osv.dev/v1/query', { method: 'POST', body: JSON.stringify(body), signal: AbortSignal.timeout(10000) });
  if (!r.ok) { log.warning(`OSV ${r.status} for ${raw}`); continue; }
  const vulns = (await r.json()).vulns || [];
  await Actor.pushData({ package: name, version: version || null, ecosystem, advisoryCount: vulns.length,
    advisoryIds: vulns.map(v => v.id), summaries: vulns.map(v => v.summary || null), osvUrls: vulns.map(v => 'https://osv.dev/vulnerability/' + v.id), checkedAt: new Date().toISOString() });
  const res = await Actor.charge({ eventName: 'package-checked' });
  if (res?.eventChargeLimitReached) { log.info('Max charge reached, stopping'); break; }
}
await Actor.exit();
