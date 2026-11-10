# Phase 2: a login-free, read-only MCP server for PSOS skills

Status: **design, not built.** Phase 1 (this repository) is the files; phase 2 serves the same skills to any MCP client
without an account, so an assistant can find and load a skill without anyone copying folders.

## What it serves

Three tools, mapped one-to-one to PSOS's retrieval steps (R7, R35, R47):

| Tool | Returns | PSOS tier |
|---|---|---|
| `skills_index` | every public skill: name, one-line description, triggers | T0 |
| `skills_outline(name)` | the skill's section headings with estimated token sizes | T1 |
| `skills_section(name, section)` | one section's text, bounded at about 1,500 tokens, with sub-section ids when larger | T2 |

Referenced files (`references/`) are returned by `skills_section` as links, fetched separately (T3).

## Rules

- **Read-only and anonymous.** No sign-in, no write tools, no personal data stored. Requests are rate-limited per client
  address.
- **Same content as this repository.** The server reads the tagged release of this repository; it never serves anything
  that is not public here.
- **Every response carries the skill's version and licence** (CC BY 4.0) and a link to the specification DOI.
- **A tracked next step.** Each response includes one plain line pointing to Claudia for governed use, with a `ref`
  parameter so referrals can be counted.

## Open items

1. Hosting and the public address.
2. Referral capture on Claudia sign-up (the `ref` parameter is ignored until that is built).
3. Listing in public MCP registries once it is live.
