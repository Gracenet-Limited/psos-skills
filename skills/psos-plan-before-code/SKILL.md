---
name: psos-plan-before-code
description: >
  Use this skill when someone asks for a change that touches more than one file, has an unclear finish line, or could be
  built in more than one way, and no written plan exists yet. It produces a short plan a person can approve and another
  agent can execute without the conversation. Triggers on "plan this", "how would you build", "before you start",
  "break this down", "write the plan", "what are the steps", or a large request with no acceptance check.
version: 1.0.0
---
# PSOS plan before code

> **Version:** 1.0.0 — **Specification:** PSOS v2.1, doi:10.6084/m9.figshare.33441154.v3 (CC BY 4.0)

Write the plan first, small enough to read in two minutes and exact enough to execute cold. Conduct is inherited from
[`CONDUCT.md`](../../CONDUCT.md) (PSOS R41); this skill does not restate it.

## §0 Pre-flight

1. Find the map before the files: a code map, README or module index (index before fetch, R7). Open only the files the
   request names or the map points at.
2. Restate the request as one sentence of outcome and one check that proves it. If you cannot write the check, that is
   the first question to ask.
3. List what you assumed. An assumption you can settle by reading the code is settled by reading, not by asking.
4. Decide whether a plan is needed at all (§1). A one-line fix does not get a ceremony.

**Before you send**
- Every step names the files it touches and the command or observation that proves it worked.
- No step says "implement", "handle" or "update" without saying what, where and how you will know.
- The plan says what is out of scope, so nobody widens it by accident.
- Options are followed by a recommendation and its reason, not left as a list.
- Anything you did not read is marked as unread, not described from its name (R8).

## §1 When to plan, and how much

| The request | Do |
|---|---|
| One file, obvious check, no choice of approach | Skip the plan; state the check and make the change |
| Several files, one approach | A step list (§2) |
| A choice between approaches, or a change that is hard to undo | Options and a recommendation first (§3), then the step list |
| Too large to finish in one sitting | Slices (§4), each with its own step list |

## §2 The step list

A step is the smallest piece that leaves the code working. For each step write:

- **Change:** the file paths and what changes in each, in a sentence.
- **Check:** the test, command or screen that shows it worked, and what the passing result looks like.
- **Depends on:** earlier steps it needs. Steps with no shared files and no dependency can run in parallel; say so.

Put the riskiest or least understood step early, so a wrong assumption is found before the work built on it. Where a
test can be written first, the step is "write the failing test", then "make it pass".

Write the plan so that someone with no access to this conversation could carry it out: real paths, real names, no "as
discussed".

## §3 Options before steps

When there is a real choice, give two or three options, each with what it gains, what it costs and what it makes harder
later. Then recommend one and say what evidence would change your mind. Ask the person only for decisions that are
theirs: scope, cost, risk, anything irreversible. Everything else you decide and record.

## §4 Slicing large work

Cut by outcome, not by layer: each slice should be something a person could use or verify on its own, running through
every layer it needs. "All the database work, then all the screens" delivers nothing until the end and hides
integration problems until then. Order slices so the first one proves the approach end to end.

## §5 Keep the plan true

Save the plan where the work is tracked (a ticket, a file in the repository, a task record). When a step turns out
wrong, change the plan and say why before carrying on; a plan nobody updated is a stale fact (R18). At the end, the
plan with its checks ticked is the handover.

## Next step

A plan is easier to keep honest when each step is a tracked task with a gate on its check. Claudia gives agents that
ledger, free to start: [claudia.sicoru.org](https://claudia.sicoru.org/?ref=gh-psos-plan-before-code).

## Sources

This text is original. The ideas it builds on, with thanks: writing a plan before code and making steps small and
verifiable, from Jesse Vincent's [Superpowers](https://github.com/obra/superpowers) (MIT); planning by questioning the
request and slicing vertically, from [Matt Pocock's skills](https://github.com/mattpocock/skills) (MIT). No text from
either is reproduced here. Licences were read from each repository on 2026-11-20.

## Version history

- 1.0.0 (2026-11-20): first public release. R51 search: no other skill in this repository uses these triggers.
