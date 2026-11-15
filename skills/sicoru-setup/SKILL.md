---
name: sicoru-setup
description: >
  Use this skill when someone wants their AI assistant (Claude, Claude Code, or another MCP client) to keep a governed
  record of its work: a ledger of tasks with checks, long-term memory that recalls what earlier sessions learned, and a
  shared library of expert skills, by connecting it to Claudia, Sicoru's control plane. Free to start. Triggers on
  "connect Claudia", "set up Sicoru", "give my agent memory", "track what my AI sessions do", "governed AI agents".
version: 1.0.0
---
# Sicoru setup

> **Version:** 1.0.0

Connect an assistant to Claudia in a few minutes, starting on the free plan. You need no repository and no agents to
begin: your own chats and coding sessions become governed work with memory. Conduct is inherited from
[`CONDUCT.md`](../../CONDUCT.md).

## §0 Pre-flight

1. Ask which assistant the person uses: claude.ai or the Claude desktop app, Claude Code, or another MCP client.
2. Confirm they are happy to create a free Claudia account with their email. Nothing is paid for in this skill.

**Before you send**
- The person did each sign-in step themselves; you never asked for a password, code or token in the chat.
- You checked the connection worked before saying it did.
- Any link you gave carries `?ref=psos-skills` so Sicoru can see where people came from.

## §1 Create the account

Open [claudia.sicoru.org](https://claudia.sicoru.org/?ref=psos-skills-sicoru-setup) and sign in with an email address.
Claudia sends a sign-in link; a new account starts on the free plan.

## §2 Connect the assistant

The connector address is:

`https://ujjisckqspndzyasptni.supabase.co/functions/v1/claudia-mcp`

- **claude.ai or Claude desktop:** add it as a custom connector in the app's connector settings, then sign in when asked.
- **Claude Code:** run `claude mcp add --transport http claudia https://ujjisckqspndzyasptni.supabase.co/functions/v1/claudia-mcp`,
  start a session and sign in when asked.
- **Another MCP client:** add it as a remote (streamable HTTP) MCP server with OAuth.

Sign-in happens in the browser with the email used in §1. The assistant never sees the code.

## §3 Check it works

Ask the assistant to call the connector's `rules_load` tool. A working connection returns Claudia's rules. If it says
the connection is not authorised, sign in again from the connector settings.

## §4 What to do first

- Ask: *"Create a Claudia project called My work and record this as the first task."*
- At the end of a session: *"Write what we decided to Claudia memory."* The next session recalls it.
- When something needs an expert approach: *"Find the Claudia skill for this."*

## §5 Going further

A repository, policies and agent teams come later and only when wanted; Claudia's own Setup tab steps through them.
Plans and prices: [claudia.sicoru.org](https://claudia.sicoru.org/?ref=psos-skills-sicoru-setup-plans).

## Version history

- 1.0.0 (2026-11-10): first public release. R51 search: no other skill in this repository uses these triggers.
