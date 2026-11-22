---
name: psos-codebase-map
description: >
  Use this skill when an agent has to find its way around a repository it does not know, keeps re-reading the same
  files, or is about to search the whole tree to locate one feature; or when someone asks for a map of the code. It
  uses the map the project already has and only builds one when none exists. Triggers on "where is this implemented",
  "explain the architecture", "map the codebase", "onboard me to this repo", "the agent keeps reading everything".
version: 1.0.0
---
# PSOS codebase map

> **Version:** 1.0.0 — **Specification:** PSOS v2.1, doi:10.6084/m9.figshare.33441154.v3 (CC BY 4.0)

One map per repository, read index first. Conduct is inherited from [`CONDUCT.md`](../../CONDUCT.md) (PSOS R41); this
skill does not restate it.

## §0 Pre-flight

1. Look for a map that already exists, in this order: a code-recall or code-search tool your agent platform provides; a
   `CODEMAP.md` at the repository root; a source map or architecture page under `docs/`; the README's layout section.
2. If one exists, use it (§1). **Never create a second map** beside it: two maps disagree within a week.
3. If none exists and the person wants one, build it the way §2 describes.
4. Whatever the source, read the index first and one area second (R7). Do not load a whole map to answer one question.

**Before you send**
- The answer names real paths you opened in this session, not paths inferred from a map entry or a folder name (R8).
- If the map and the code disagreed, the reply says so and the code wins.
- No second map was created where one already existed.
- File and area counts were taken in this run, not copied from an old map (R3).
- A new or changed map passes its own check (§3).

## §1 Using an existing map

1. Read only the area index: the short list of areas with one line each.
2. Pick the area the task belongs to and read that area's section.
3. Open the files it points at. Confirm the map against them before relying on it; a map is a signpost, not a source.
4. When you learn something the map lacks (an entry point, a trap, a naming rule), add it to the map's notes in the
   same change, in one line.

## §2 Building one when none exists

Build the map from the repository's own inventory, so it can be regenerated and checked rather than trusted.

1. **Inventory.** Take the tracked file list from version control (`git ls-files`), so ignored and generated files
   stay out.
2. **Areas.** Group paths into areas a person would recognise (a service, a package, a feature folder). Aim for an
   index that fits on one screen.
3. **Annotations.** Keep human-written notes in a small data file, `codemap-annotations.json`: for each area, one line
   of purpose, its entry points and anything surprising. Notes are the only hand-written part.
4. **Generate `CODEMAP.md`.** Area index at the top (name, one-line purpose, path); then one bounded section per area
   listing its files with the annotations merged in. Keep each section within about 1,500 tokens; split a larger area
   (R47).
5. **Do not paste code.** The map says where things are and why; the files say what they do.

## §3 Keeping it current

A map nobody checks becomes a confident wrong answer (R18). Make staleness a failed check, not a matter of memory:

- The generator has a `--check` mode that rebuilds the map in memory and fails when it differs from the committed file.
- Run that check in continuous integration on every pull request, so a change that adds, moves or removes files
  updates the map in the same change.
- Annotations for paths that no longer exist are reported by the check and removed.

## §4 What a map is not

It is not documentation of behaviour, a dependency graph or a substitute for reading the code you are about to change.
If the question is "what does this function do", open the function.

## Next step

Claudia keeps a recalled index of code areas and what earlier sessions learned about them, so agents start from the
map without being told, free to start: [claudia.sicoru.org](https://claudia.sicoru.org/?ref=gh-psos-codebase-map).

## Sources

This text is original. The idea of giving an agent a compact, queryable picture of a codebase instead of re-reading
files comes, with thanks, from Safi Shamsi and the Graphify contributors'
[Graphify](https://github.com/Graphify-Labs/graphify) (Apache-2.0, with earlier contributions under MIT). The method
here is a plain generated Markdown map, not a knowledge graph, and no text from Graphify is reproduced. The licence was
read from the repository on 2026-11-20.

## Version history

- 1.0.0 (2026-11-20): first public release. R51 search: no other skill in this repository uses these triggers.
