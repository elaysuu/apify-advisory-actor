# Package Vulnerability Checker (OSV)
Check npm, PyPI, Go, Maven, crates.io and more packages for known security advisories — ideal as a pre-install gate for AI coding agents, MCP servers and CI.
## What it does
Give a list like `lodash@4.17.15`; get one dataset row per package with advisory count, GHSA/PYSEC IDs, summaries and osv.dev links. Live data from osv.dev, nothing invented.
## Pricing
Pay per event: **$0.005 per package checked** (event `package-checked`). 1,000 packages = $5.
## Input
`packages` (list, required), `ecosystem` (default npm).
## Output example
`{"package":"minimist","version":"1.2.0","advisoryCount":2,"advisoryIds":["GHSA-vh95-rmgr-6w4m","GHSA-xvch-5gv4-984h"]}`
## Related
GitHub Action: https://github.com/elaysuu/agent-advisory-gate · Pro: https://setrov.gumroad.com/l/zdojns
## Limits
Max 1000 packages/run. Advisories only as complete as OSV.
