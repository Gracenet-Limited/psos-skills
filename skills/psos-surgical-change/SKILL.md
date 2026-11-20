---
name: psos-surgical-change
description: >
  Use this skill when an agent is about to edit existing code for a specific request (a bug fix, a small feature, a
  review comment) and the risk is that it changes more than was asked: reformatting, renaming, refactoring nearby code or
  adding options nobody requested. Triggers on "just fix", "only change", "minimal change", "don't touch anything else",
  "why is this diff so big", "keep the diff small", or any edit to code the agent did not write.
version: 1.0.0
---
# PSOS surgical change

> **Version:** 1.0.0 — **Specification:** PSOS v2.1, doi:10.6084/m9.figshare.33441154.v3 (CC BY 4.0)

Make the change that was asked for, prove it, and leave everything else as it was. Conduct is inherited from
[`CONDUCT.md`](../../CONDUCT.md) (PSOS R41); this skill does not restate it.

## §0 Pre-flight

1. Say the goal as a check you can run: a test that should pass, an output that should change, an error that should
   stop. No check, no edit yet.
2. Read the code you will change and its callers before forming a view. A function's name is not its behaviour (R8).
3. Write down what you are assuming about the request. If two readings would produce different diffs, ask which; do not
   pick silently.
4. Note the state before you start: which tests pass now, and what the working tree looks like.

**Before you send**
- Every changed line traces to the request. If you cannot say which sentence of the request a line serves, remove it.
- The check from step 1 was run after the change, and its result is in the reply.
- Nothing was reformatted, renamed, reordered or "tidied" outside the lines the change needed.
- Things you noticed but did not change are listed for the person, not fixed quietly.
- New code is the least that passes the check: no unrequested options, layers or handling for cases that cannot occur.

## §1 Four rules

| Rule | In practice |
|---|---|
| Think first | State assumptions and the reading you chose. When unsure, stop and ask rather than guess and build. |
| Least code | Solve the stated problem only. If a senior reviewer would call it over-built, cut it. |
| Touch only what the task needs | Match the surrounding style even where you would write it differently. Leave unrelated code, comments and formatting alone. |
| Work to a check | Turn the request into something verifiable, then loop until it passes. |

## §2 What belongs in the diff

- **In:** the lines the request needs; a test that fails before and passes after; imports, types and callers that your
  change forces; removal of code that *your* change made unused.
- **Out:** dead code that was already there; a neighbouring bug; a better name; a formatter run over the file; a
  dependency upgrade; a rewrite of something that works.

When you find something in the "out" list worth doing, report it in one line with the file and the reason. That keeps
the finding without hiding it in a diff nobody asked to review.

## §3 When a small change is not enough

Sometimes the honest fix is larger: the bug comes from a design that cannot hold the new case. Do not smuggle the
larger change in, and do not force a patch that you know is wrong. Say what you found, give the small patch and the
proper fix as two options with their costs, recommend one, and let the person choose.

## §4 Review your own diff

Before reporting, read the diff from top to bottom as a reviewer would. For each hunk ask: was this asked for, is it the
least that works, and does it match its surroundings? Revert any hunk that fails. Then run the check again; a diff
trimmed after the last test run is an untested diff.

## Next step

Small diffs are easier to enforce than to promise. Claudia can hold agents to declared files and a passing check before
work is marked done, free to start: [claudia.sicoru.org](https://claudia.sicoru.org/?ref=gh-psos-surgical-change).

## Sources

This text is original. The four rules follow the widely shared coding-agent guidelines drawn from Andrej Karpathy's
observations on how language models go wrong when coding, as collected in
[andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) (MIT, as declared in that repository's
README on 2026-11-20). No text from it is reproduced here.

## Version history

- 1.0.0 (2026-11-20): first public release. R51 search: no other skill in this repository uses these triggers.
