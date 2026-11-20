---
name: psos-debug-signal-first
description: >
  Use this skill when something fails and the cause is not yet known: a failing test, an error in a log, a wrong result,
  a build or pipeline that went red, or behaviour that changed without an obvious reason. It makes the agent get a
  reliable signal and find the cause before changing code. Triggers on "it's broken", "why does this fail", "debug
  this", "fix the failing test", "it worked yesterday", "flaky", or a second fix attempt after the first did not work.
version: 1.0.0
---
# PSOS debug: signal first

> **Version:** 1.0.0 — **Specification:** PSOS v2.1, doi:10.6084/m9.figshare.33441154.v3 (CC BY 4.0)

No fix before a cause; no cause before a signal you can repeat. Conduct is inherited from
[`CONDUCT.md`](../../CONDUCT.md) (PSOS R41); this skill does not restate it.

## §0 Pre-flight

1. Read the actual failure: the whole error, the stack, the log lines around it, the exit code. A summary of an error
   is not the error (R8).
2. Reproduce it with one command or one sequence of steps, and write that down. If it does not reproduce, that is the
   first problem to solve (§2).
3. Check what changed: recent commits, dependency versions, configuration, data, environment. "It worked before" names
   a boundary you can search.
4. Search for a record of the same failure (issues, incident notes, memory) before deriving the cause again.

**Before you send**
- The reply names the root cause and the evidence that shows it, not only the symptom that stopped.
- A check failed before the fix and passes after it, and both runs are shown.
- Each hypothesis you tested is listed with its result, including the ones that were wrong.
- You changed one thing at a time; nothing speculative is left in the diff.
- If the cause is still unknown, the reply says so and gives the next measurement, not a guess presented as a fix.

## §1 The loop

1. **Signal.** One repeatable command whose output distinguishes broken from working.
2. **Narrow.** Halve the search space: which commit, which input, which layer, which component passes the bad value on.
   Follow the wrong value backwards to the first place it is wrong.
3. **Hypothesis.** One sentence: "X causes this because Y." Say what you expect to see if it is true and if it is false.
4. **Test.** The smallest experiment that separates the two. Change one variable.
5. **Fix at the cause**, then run the signal again, then the wider suite.

If the experiment disagrees with the hypothesis, the hypothesis is wrong. Go back to step 2 with what you learned; do
not stack a second change on the first.

## §2 When there is no reliable signal

- **Intermittent:** run it many times and count; record seed, timing, order and environment for failing runs. Look for
  shared state, time, ordering and network before blaming the code under test.
- **Only in one environment:** list the differences (versions, configuration, data, permissions) and remove them one at
  a time.
- **No output:** add observation at the boundaries between components (what went in, what came out) rather than
  reading code and imagining. Remove the extra logging when you are done.
- **Cannot reproduce at all:** say so, state what you tried, and ask for the one missing fact (exact input, time, user,
  version). Do not ship a fix for a failure you never saw.

## §3 Stop rules

- **Three failed fixes** means the model of the system is wrong, not that a fourth guess is due. Stop, re-read the
  evidence, and question the design or the assumption every attempt shared.
- **A fix you cannot explain** is not a fix. If it passes and you do not know why, keep investigating or report it as
  unexplained.
- **A workaround** (retry, sleep, catch-and-ignore, skipping the test) is reported as a workaround, with the cause
  still open.

## §4 Leave it better

Keep the failing check as a regression test where the project has tests. Record the cause, the evidence and the fix
where the next person will search for it, in a sentence each.

## Next step

Causes found once should not be found twice. Claudia gives agents long-term memory and a ledger that later sessions
recall before they start debugging, free to start:
[claudia.sicoru.org](https://claudia.sicoru.org/?ref=gh-psos-debug-signal-first).

## Sources

This text is original. The ideas it builds on, with thanks: finding root cause before fixing and stopping after
repeated failed fixes, from Jesse Vincent's [Superpowers](https://github.com/obra/superpowers) (MIT); building a tight
feedback loop before diagnosing, from [Matt Pocock's skills](https://github.com/mattpocock/skills) (MIT). No text from
either is reproduced here. Licences were read from each repository on 2026-11-20.

## Version history

- 1.0.0 (2026-11-20): first public release. R51 search: no other skill in this repository uses these triggers.
