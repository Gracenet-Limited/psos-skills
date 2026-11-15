---
name: psos-repo-check
description: >
  Use this skill when someone wants a folder, repository or library of agent skills reviewed against the Progressive Skill
  Ontology Standard (PSOS): which skills an agent will actually find, which load too much, which give unattributed or
  stale answers, and the smallest fix for each. Triggers on "review my skills", "audit our skills repo", "why does the
  agent not use this skill", "check these SKILL.md files", "is this PSOS compliant".
version: 1.0.0
---
# PSOS repo check

> **Version:** 1.0.0 — **Specification:** PSOS v2.1, doi:10.6084/m9.figshare.33441154.v3 (CC BY 4.0)

Review a set of skills and report, per skill, what passes, what fails and the smallest fix. It reviews; it does not
rewrite (use `psos-skill-author` for that). Conduct is inherited from [`CONDUCT.md`](../../CONDUCT.md).

## §0 Pre-flight

1. List every `SKILL.md` under the folder you were given. Report the count you found, not a remembered one.
2. Run the file checks if Node.js is available: `node scripts/psos-check.mjs <folder>` (from this repository). Use its
   output as evidence; do not repeat checks it already made.
3. Read each skill's front matter and outline first; open a section only to confirm a finding (index before fetch, R7).

**Before you send**
- Every finding names the skill, the section, the PSOS requirement and the evidence (a quote or a line number).
- Every finding has the smallest fix that would make it pass.
- Counts in the report were taken in this run.
- Nothing is called broken without the evidence beside it.

## §1 File checks (what a file shows on its own)

| Check | Requirement | Passes when |
|---|---|---|
| Front matter | host routing | `name`, `description`, `version` present |
| Trigger | R4, R5 | description says *when* to use it ("Use this skill when …") |
| Version line | consistency | body `**Version:**` equals front matter `version` |
| Pre-flight | load order | a `§0 Pre-flight` (or "Pre-flight") section exists |
| Send check | answer quality | a "Before you send" list with three or more items |
| Bounded sections | R47 | no section over about 1,500 tokens without sub-sections |
| Conduct by reference | R41, R42 | conduct is linked, not copied in full |

## §2 Review questions (need judgement or a running system)

1. **Overlap (R16, R33, R51):** do two skills claim the same trigger phrase? List each pair.
2. **Stale facts (R3, R18):** does a skill state a number or list that can change ("we have 12 tools") as if fixed?
3. **Sources (R10–R12, R34):** for each knowledge source, is its route declared (inline, shipped file or live tool), and
   does the skill tell the agent to attribute each source separately?
4. **Recollection (R8):** does the skill say that recalling a title is not reading the item?
5. **Coverage (R17, R50):** does the skill say what it covers, what it leaves to another source on purpose, and how a
   person or agent finds it?

## §3 Report

One table per skill: check, result (pass / fail / not checkable here), evidence, fix. Then a short summary: the three
fixes that would help agents most, in order. Keep it to what the reader must decide or do.

## Version history

- 1.0.0 (2026-11-10): first public release. R51 search: no other skill in this repository uses these triggers.
