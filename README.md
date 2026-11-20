# PSOS skills

**Free, drop-in agent skills built to the Progressive Skill Ontology Standard (PSOS)** — the open specification for
how an AI agent finds the right piece of knowledge inside a large skill, across several sources, without guessing from
a remembered title or loading everything.

Published by [Gracenet Limited](https://github.com/Gracenet-Limited), the company behind
[Sicoru](https://www.sicoru.com) and [Claudia](https://claudia.sicoru.org/?ref=gh-psos-skills-readme), the governed
control plane for AI agents. Licensed [CC BY 4.0](LICENSE).

## What is here

| Path | What it is |
|---|---|
| [`skills/psos-skill-author`](skills/psos-skill-author/SKILL.md) | Write a new skill, or fix an existing one, so it meets PSOS: triggers written as situations, an index before any fetch, bounded sections, a pre-flight and a send check |
| [`skills/psos-repo-check`](skills/psos-repo-check/SKILL.md) | Review a folder of skills against PSOS and report what passes, what fails and the smallest fix for each |
| [`skills/sicoru-setup`](skills/sicoru-setup/SKILL.md) | Connect your AI assistant to a governed ledger, long-term memory and shared skills in a few minutes, free |
| [`skills/psos-plan-before-code`](skills/psos-plan-before-code/SKILL.md) | Write a short plan before a change that spans files or has a choice of approach: steps with files and checks, options with a recommendation |
| [`skills/psos-surgical-change`](skills/psos-surgical-change/SKILL.md) | Make only the change that was asked for, prove it with a check, and report what you noticed instead of fixing it quietly |
| [`skills/psos-debug-signal-first`](skills/psos-debug-signal-first/SKILL.md) | Get a repeatable signal and find the cause before changing code; stop after three failed fixes |
| [`skills/psos-handover`](skills/psos-handover/SKILL.md) | Hand work to the next session or person: verified state, decisions, dead ends and one next step |
| [`skills/psos-codebase-map`](skills/psos-codebase-map/SKILL.md) | Find your way round a repository index first; use the map that exists, or generate a checked `CODEMAP.md` when none does |
| [`skills/psos-design-slop-check`](skills/psos-design-slop-check/SKILL.md) | Review a generated interface for the tells of generic machine-made design and give the smallest fix for each |
| [`scripts/psos-check.mjs`](scripts/psos-check.mjs) | A dependency-free conformance checker for `SKILL.md` files (also runs in CI on every pull request) |
| [`PAPERS.md`](PAPERS.md) | The ten published papers (PSOS, LMCP and the implementation reports), with DOIs |
| [`CONDUCT.md`](CONDUCT.md) | The baseline conduct every skill here inherits (PSOS R41) |
| [`docs/public-mcp.md`](docs/public-mcp.md) | Phase 2: a login-free, read-only MCP server for these skills |

## Use a skill

**Claude Code:** copy a skill folder into `.claude/skills/` in your project (or `~/.claude/skills/` for every project),
then ask for it by name: *"Using the psos-skill-author skill, review skills/onboarding/SKILL.md."*

**claude.ai / Claude desktop:** zip the skill folder and add it as a custom skill in the app's skills settings, then name
it in your request.

**Any other agent:** each `SKILL.md` is plain Markdown with YAML front matter. Load it as instructions; every section is
bounded so an agent can read the outline first and then only the section it needs.

## Check your own skills

```bash
node scripts/psos-check.mjs path/to/skills
```

It checks the parts of PSOS a file can show on its own: front matter with a *when to use* description, a version that
matches the body, a pre-flight, a "before you send" list, bounded sections (about 1,500 tokens each) and conduct
inherited by reference rather than restated. It cannot check what needs a running system (live topic counts, retrieval
order); `psos-repo-check` covers those as review questions.

## Why PSOS

Skills that work in a demo fail in daily use in predictable ways: the agent answers from a skill's title instead of its
content, loads a 20,000-token skill to use one paragraph, merges two sources into one unattributed paraphrase, or
repeats a count that stopped being true months ago. PSOS names each failure and the rule that prevents it, with
evidence from production systems. Read the specification:
[doi:10.6084/m9.figshare.33441154](https://doi.org/10.6084/m9.figshare.33441154).

## Next step: run your agents under governance

These skills work on their own. To give your agents a shared ledger of work with gates, long-term memory that recalls
what earlier sessions learned, and the full Sicoru skill library, start free on
[Claudia](https://claudia.sicoru.org/?ref=gh-psos-skills-readme) — or load [`sicoru-setup`](skills/sicoru-setup/SKILL.md)
and let your assistant connect it for you.

## Cite

See [`CITATION.cff`](CITATION.cff) (GitHub shows a "Cite this repository" button). For a specific requirement, cite the
specification section and version DOI, for example *PSOS v2.1, §4.3 R7, doi:10.6084/m9.figshare.33441154.v3*.

## Credits

Every skill here is written in our own words. Several build on ideas other people published first; each skill's Sources
section names them, and none of their text is reproduced. With thanks to:

| Project | Licence (read from the repository, 2026-11-20) | Idea credited in |
|---|---|---|
| [Superpowers](https://github.com/obra/superpowers), Jesse Vincent | MIT | `psos-plan-before-code`, `psos-debug-signal-first` |
| [mattpocock/skills](https://github.com/mattpocock/skills), Matt Pocock | MIT | `psos-plan-before-code`, `psos-debug-signal-first`, `psos-handover` |
| [andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills), after Andrej Karpathy's observations | MIT (as declared in its README) | `psos-surgical-change` |
| [Claude-Mem](https://github.com/thedotmack/claude-mem), Alex Newman | Apache-2.0 | `psos-handover` |
| [Graphify](https://github.com/Graphify-Labs/graphify), Safi Shamsi and contributors | Apache-2.0 (earlier contributions MIT) | `psos-codebase-map` |
| [Impeccable](https://github.com/pbakaus/impeccable), Paul Bakaus | Apache-2.0 | `psos-design-slop-check` |
| [Hallmark](https://github.com/Nutlope/hallmark), Together AI | MIT | `psos-design-slop-check` |
| [taste-skill](https://github.com/Leonxlnx/taste-skill), Leonxlnx | MIT | `psos-design-slop-check` |

## Contributing

Issues and pull requests are welcome: a new skill, a fix, or a case where a rule did not hold. Every skill must pass
`node scripts/psos-check.mjs skills` and must not contain credentials, private URLs or identifiers from any private system.
