---
name: psos-design-slop-check
description: >
  Use this skill when an agent has produced or is about to produce a user interface (a page, a component, a dashboard, a
  landing page) and it should not look like every other machine-made screen; or when someone asks for a design review.
  It checks the result against the common tells of generic generated design and gives the smallest fix for each.
  Triggers on "this looks AI-generated", "make it look less generic", "review this UI", "design check", "polish this
  page", "it looks like a template".
version: 1.0.0
---
# PSOS design slop check

> **Version:** 1.0.0 — **Specification:** PSOS v2.1, doi:10.6084/m9.figshare.33441154.v3 (CC BY 4.0)

Look at the screen, name what makes it generic, fix the few things that matter most. Conduct is inherited from
[`CONDUCT.md`](../../CONDUCT.md) (PSOS R41); this skill does not restate it.

## §0 Pre-flight

1. Find the project's own design rules first: a design system, tokens, a style guide, existing screens. Where they
   exist they win over every default in this skill.
2. Know who the screen is for and the one thing they came to do. A design cannot be judged without that.
3. Look at the rendered result (a screenshot or a browser), at a phone width and a desktop width, in light and dark if
   both are supported. Reading the markup is not seeing the page (R8).

**Before you send**
- Every finding points at a specific element and says what you saw, not a general impression.
- Every finding has the smallest change that would fix it.
- Findings are ordered by how much they affect the person using the screen; the reply leads with at most five.
- You looked at the rendered page in this session; if you could not, the reply says the review is from code only.
- Contrast and keyboard focus were checked, not assumed.

## §1 The tells

| Area | Generic | Considered |
|---|---|---|
| Colour | A purple-to-blue gradient, a different accent per section, grey text on colour | A small palette with one accent used for one meaning; text contrast measured |
| Type | One default sans at near-equal sizes, everything centred, bold everywhere | A clear scale with few sizes; hierarchy from size and weight, used sparingly |
| Layout | Every section a row of three equal cards; cards inside cards | Layout that follows the content; grouping by space and alignment before boxes |
| Space | The same padding everywhere, or none | A spacing scale; more space between groups than within them |
| Decoration | Emoji as icons, glows, blurred glass, a shadow on everything | Decoration only where it carries meaning; one elevation style |
| Words | "Unlock the power of", "seamless", invented statistics and testimonials | Specific, true copy in the reader's terms; real data or clearly marked samples |
| Motion | Everything fades and slides in | Motion that explains a change, and respects reduced-motion settings |
| States | Only the happy path drawn | Empty, loading, error and long-content states designed |

## §2 The review

1. **First look, five seconds:** what is this screen for, and what would you press? If that is unclear, hierarchy is
   the first finding and the rest can wait.
2. **Walk the task** the person came to do. Note every point of hesitation.
3. **Scan the tells** in §1. Record only what is actually present.
4. **Check the floor:** text contrast, focus visible on every control, tap targets large enough on a phone, nothing
   scrolling sideways, content that still fits when it is twice as long.
5. **Report** in the order of §0's send check.

## §3 Fixing

Change the fewest things with the largest effect, usually in this order: hierarchy, spacing, colour, type, then
decoration. Remove before adding. Take values from the project's tokens rather than inventing new ones. After the fix,
look at the rendered page again at both widths; a fix nobody looked at is a guess.

## §4 Limits

Taste is not a checklist. This skill removes the obvious tells and protects the basics; it does not replace a
designer's direction, a brand or research with real users. Say so when a finding is a matter of preference rather than
a problem.

## Next step

Claudia can make a design check a gate that a screen passes before the task closes, with the evidence kept on the
ledger, free to start: [claudia.sicoru.org](https://claudia.sicoru.org/?ref=gh-psos-design-slop-check).

## Sources

This text is original. The idea of naming and steering away from generic machine-made interface design comes, with
thanks, from Paul Bakaus's [Impeccable](https://github.com/pbakaus/impeccable) (Apache-2.0),
[Hallmark](https://github.com/Nutlope/hallmark) by Together AI (MIT) and Leonxlnx's
[taste-skill](https://github.com/Leonxlnx/taste-skill) (MIT). No text from any of them is reproduced here. Licences
were read from each repository on 2026-11-20.

## Version history

- 1.0.0 (2026-11-20): first public release. R51 search: no other skill in this repository uses these triggers.
