---
name: psos-handover
description: >
  Use this skill when work is about to pass to someone who was not in the conversation: the session is ending or running
  out of context, the task is paused, another agent or person will continue it, or someone asks where things stand.
  It writes a handover the next reader can act on without the transcript. Triggers on "hand this over", "write a
  handover", "summarise where we are", "I'll continue tomorrow", "pick this up later", "context is nearly full".
version: 1.0.0
---
# PSOS handover

> **Version:** 1.0.0 — **Specification:** PSOS v2.1, doi:10.6084/m9.figshare.33441154.v3 (CC BY 4.0)

Write down what the next session needs, and nothing it can read for itself. Conduct is inherited from
[`CONDUCT.md`](../../CONDUCT.md) (PSOS R41); this skill does not restate it.

## §0 Pre-flight

1. Check the real state now, not the state you remember: branch and uncommitted changes, open pull requests, the last
   test or build result, anything still running. Memory of an earlier step is not evidence (R8).
2. Find where handovers live for this project (a task record, a ticket, a memory tool, a file the team agreed). Use
   that; do not start a second place.
3. Collect the decisions made in this session and who made them.

**Before you send**
- Someone with no access to this conversation could take the next step from the handover alone.
- "Done" is said only of things verified in this session, with the check named; everything else is "not verified".
- The next step is one concrete action, with the file, command or question it starts from.
- Decisions carry who decided and why, so they are not reopened by accident.
- No credential, token or private address appears anywhere in it.

## §1 What goes in

| Part | Content |
|---|---|
| Goal | One sentence: what this work is for, and the check that will show it is finished |
| State | What is done and verified; what is changed but unverified; what has not been started |
| Where | Branch, commit, pull request, files in play, anything left running or half-applied |
| Decisions | Each decision, who made it, the reason, and what it rules out |
| Dead ends | What was tried and failed, with the evidence, so nobody repeats it |
| Open questions | Each question, who can answer it, and what waits on it |
| Next step | The single next action and how to check it worked |

## §2 What stays out

- **The story of the session.** Order of events, tool calls and retries belong to the transcript.
- **Anything the repository already says.** Link the file or commit; do not paraphrase code into prose that will drift
  from it (R18).
- **Counts and lists that will change**, unless marked with when they were read (R3).
- **Guesses presented as findings.** A suspicion is useful; label it as one.

A handover is a pointer, not a copy. Aim for something read in a minute; if it is long, the first five lines must still
be enough to start.

## §3 Write as you go

A handover written only at the end is written at the moment there is least context left to write it. After each step
that lands (a commit, a decision, a failed attempt), add one line to the running record. The final handover is then an
edit of that record, not an act of recall.

## §4 Picking one up

Read the handover, then check its claims against the present: is the branch where it says, do the tests it calls
passing still pass, is the question still open? Trust the record for intent and decisions; verify it for state. Report
any difference before you build on it.

## Next step

Handovers work best when they are not a file someone has to remember to read. Claudia records them against the task and
recalls them at the start of the next session, free to start:
[claudia.sicoru.org](https://claudia.sicoru.org/?ref=gh-psos-handover).

## Sources

This text is original. The ideas it builds on, with thanks: capturing what a session learned so later sessions start
from it, from Alex Newman's [Claude-Mem](https://github.com/thedotmack/claude-mem) (Apache-2.0); a compact handoff
document for the next agent, from [Matt Pocock's skills](https://github.com/mattpocock/skills) (MIT). No text from
either is reproduced here. Licences were read from each repository on 2026-11-20.

## Version history

- 1.0.0 (2026-11-20): first public release. R51 search: no other skill in this repository uses these triggers.
