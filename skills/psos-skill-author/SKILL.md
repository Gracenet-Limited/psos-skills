---
name: psos-skill-author
description: >
  Use this skill when someone wants to write a new agent skill (SKILL.md), restructure or shorten an existing one, or make
  a skill conform to the Progressive Skill Ontology Standard (PSOS): triggers that say when a skill applies, an index
  before any fetch, bounded sections, attributed sources, a pre-flight and a "before you send" check. Triggers on "write a
  skill", "turn this into a skill", "my skill is too long", "agents ignore my skill", "make this PSOS compliant".
version: 1.0.0
---
# PSOS skill author

> **Version:** 1.0.0 — **Specification:** PSOS v2.1, doi:10.6084/m9.figshare.33441154.v3 (CC BY 4.0)

Write skills an agent can find, load in pieces and follow. Conduct is inherited from [`CONDUCT.md`](../../CONDUCT.md)
(PSOS R41); this skill does not restate it.

## §0 Pre-flight

1. Read the material the skill will carry (documents, an existing skill, the person's notes). Do not write from the title.
2. Ask, once, only what the material cannot tell you: who uses the skill, and what they ask when they need it.
3. Search every skill already in the same folder or library for the trigger phrases you plan to use (PSOS R51). Record
   what you found, or "no match", in the skill's version note.
4. Decide the knowledge sources: knowledge written into the skill body; files shipped beside it (`references/`); live
   tools an agent calls. Each source is kept separate (R10).

**Before you send**
- Every trigger says *when* the skill applies, not what it is about (R5).
- No section is longer than about 1,500 tokens without sub-sections (R47).
- Every count or list that can change ("12 topics", "the 5 tools") is either removed or marked "check live" (R3, R18).
- Conduct is referenced, not copied (R42).
- `node scripts/psos-check.mjs <folder>` passes.

## §1 Front matter and the first screen

The front matter is what a host reads to decide whether to load the skill at all. Write:

- `name`: lowercase, hyphenated, unique in the library.
- `description`: begins "Use this skill when …", then names the situations and the phrases people actually use. A
  description that only says what the skill *is about* matches badly (R4, R5).
- `version`: semantic version; the body's `**Version:**` line must match it.

The first screen of the body says in two sentences what the skill does and what it does not do, so an agent can route
away early.

## §2 Organise the knowledge (ontology and resources)

- Split the domain into a small, named set of topics with stable identifiers (R1). Where a topic comes from a published
  body of knowledge, cite it with edition and locator (R2).
- Every retrievable item carries an identifier, its topic, a title, a one-line excerpt and a **trigger**: the situation in
  which it applies (R4). Good: *"agent must decide which category a newly found item belongs in"*. Weak: *"overview of
  categories"*.
- Name connections that matter: if a change in one topic changes another, say which and why (R6).

## §3 Retrieval discipline

- **Index before fetch** (R7): the skill tells the agent to look at the index (titles and triggers) and choose before it
  opens any full item.
- **Recollection is not retrieval** (R8): say so in the skill. An answer from a remembered title is invented.
- **Tiers** (R44, R47): index line → outline → one section → referenced file. Keep each section bounded so an agent can
  load just the one it needs.
- **Several sources** (R10–R12): find candidates across all sources first, and attribute each source separately in the
  answer: "per the guide: …; per the policy: …".
- **Sources beat general knowledge** (R13): an answer that could have used a matched source but did not is worse, not
  faster.

## §4 Declare how each source is reached

For every source, state its transport (R34–R37, R49):

| Transport | Declare |
|---|---|
| Written into the body (`inline_index`) | which section holds the index, and how a matched item is fetched |
| Shipped files (`bundled_file`) | the manifest path and the rule from identifier to file path |
| Live tools (`live_query`) | the exact tool names for list topics, search and fetch |

A source with no declared route is a defect, not a minimal case.

## §5 Coverage and discoverability

State, as a checkable fact, which topics have content and which are left to another source on purpose (R17), and
re-check it whenever the skill changes (R18). Say where a person or agent finds the skill: its trigger phrases, which
assistant or tool reaches it, and any page that documents it (R50).

## §6 Version note

End with a short version history: what changed, why, and the R51 trigger search you did.

## Version history

- 1.0.0 (2026-11-10): first public release. R51 search: no other skill in this repository uses these triggers.
