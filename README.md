# Package Vulnerability Checker (OSV)
Check npm, PyPI, Go, Maven, crates.io and more packages for known security advisories — ideal as a pre-install gate for AI coding agents, MCP servers and CI.
## What it does
Give a list like `lodash@4.17.15`; get one dataset row per package with advisory count, GHSA/PYSEC IDs, summaries and osv.dev links. Live data from osv.dev, nothing invented.
## Pricing
Free while in beta. Paid per-package pricing may be introduced later with advance notice on this page.
## Input
`packages` (list, required), `ecosystem` (default npm).
## Output example
`{"package":"minimist","version":"1.2.0","advisoryCount":2,"advisoryIds":["GHSA-vh95-rmgr-6w4m","GHSA-xvch-5gv4-984h"]}`
## Related
GitHub Action: https://github.com/elaysuu/agent-advisory-gate · Pro: https://setrov.gumroad.com/l/zdojns
## Limits
Max 1000 packages/run. Advisories only as complete as OSV.

## Also available as

- VS Code / Open VSX extension: https://open-vsx.org/extension/elaysuu/agent-package-advisory
- RapidAPI (HTTP API): https://rapidapi.com/Elayosetrov/api/agent-package-advisory-check



