#!/usr/bin/env node
// PSOS conformance checker for SKILL.md files (no dependencies).
// Usage: node scripts/psos-check.mjs [folder-or-file ...]   (default: skills)
// Checks what a file can show on its own, against PSOS v2.1 (doi:10.6084/m9.figshare.33441154.v3):
//   P1 front matter has name, description, version     P2 description says WHEN to use the skill (R4, R5)
//   P3 body **Version:** equals front matter version    P4 a Pre-flight section exists
//   P5 a "Before you send" list with 3+ items           P6 sections bounded (~1,500 tokens, R47)
//   P7 baseline conduct referenced, not restated (R41, R42)
// Exit code 1 when any file fails. Token counts are estimated as characters / 4.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SECTION_LIMIT = 1500;
const tok = (s) => Math.ceil(s.length / 4);

function findSkills(p) {
  if (!existsSync(p)) return [];
  if (statSync(p).isFile()) return p.endsWith('.md') ? [p] : [];
  return readdirSync(p).flatMap((n) => {
    const q = join(p, n);
    if (statSync(q).isDirectory()) return n.startsWith('.') || n === 'node_modules' ? [] : findSkills(q);
    return n === 'SKILL.md' ? [q] : [];
  });
}

function frontMatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { fm: null, body: text };
  const fm = {};
  let key = null;
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (kv) { key = kv[1]; fm[key] = kv[2].replace(/^>-?\s*$/, '').replace(/^["']|["']$/g, ''); }
    else if (key && /^\s+/.test(line)) fm[key] = `${fm[key]} ${line.trim()}`.trim();
  }
  return { fm, body: text.slice(m[0].length) };
}

function sections(body) {
  // Split on ## headings; a section's size includes its ### sub-sections, and is over the limit only if it has none.
  const out = [];
  let cur = null;
  for (const line of body.split('\n')) {
    const h2 = line.match(/^##\s+(.*)/);
    if (h2) { cur = { title: h2[1].trim(), text: '', subs: 0 }; out.push(cur); continue; }
    if (cur) { if (/^###\s+/.test(line)) cur.subs++; cur.text += `${line}\n`; }
  }
  return out;
}

export function check(text) {
  const r = [];
  const add = (id, ok, msg) => r.push({ id, ok, msg });
  const { fm, body } = frontMatter(text);
  add('P1', !!(fm && fm.name && fm.description && fm.version), 'front matter needs name, description and version');
  add('P2', !!(fm && /\buse this skill when\b/i.test(fm.description || '')),
    'description should start "Use this skill when ..." (say when it applies, R4/R5)');
  const bodyVersion = (body.match(/\*\*Version:\*\*\s*([0-9][\w.-]*)/) || [])[1];
  add('P3', !!(fm && bodyVersion && bodyVersion === fm.version),
    `body **Version:** (${bodyVersion ?? 'missing'}) must equal front matter version (${fm?.version ?? 'missing'})`);
  add('P4', /^#{2,3}\s+(§0\s+)?Pre-?flight\b/im.test(body), 'add a "§0 Pre-flight" section: what to load and check first');
  const send = body.match(/\*\*Before you send\*\*\s*\n((?:\s*[-*]\s+.*\n?)+)/i);
  const items = send ? send[1].split('\n').filter((l) => /^\s*[-*]\s+/.test(l)).length : 0;
  add('P5', items >= 3, `"Before you send" list needs 3+ items (found ${items})`);
  const big = sections(body).filter((s) => tok(s.text) > SECTION_LIMIT && s.subs === 0);
  add('P6', big.length === 0, big.length ? `split into sub-sections: ${big.map((s) => `"${s.title}" (~${tok(s.text)}t)`).join(', ')}` : 'sections bounded');
  const restated = /\n#{2,3}\s+(B\.1\s+)?Truth\b[\s\S]{0,2000}\n#{2,3}\s+.*(Resolve|escalat)/i.test(body);
  const referenced = /CONDUCT\.md|baseline conduct|R41/i.test(body);
  add('P7', referenced && !restated, 'reference the baseline conduct (e.g. CONDUCT.md) instead of restating it');
  return r;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const targets = process.argv.slice(2);
  const files = (targets.length ? targets : ['skills']).flatMap(findSkills);
  if (!files.length) { console.error('psos-check: no SKILL.md files found'); process.exit(1); }
  let failed = 0;
  for (const f of files) {
    const res = check(readFileSync(f, 'utf8'));
    const bad = res.filter((x) => !x.ok);
    console.log(`${bad.length ? 'FAIL' : 'ok  '} ${f}`);
    for (const x of res) console.log(`  ${x.ok ? 'ok  ' : 'FAIL'} ${x.id} ${x.ok ? '' : x.msg}`.trimEnd());
    if (bad.length) failed++;
  }
  console.log(`\npsos-check: ${files.length - failed} of ${files.length} skill(s) pass.`);
  process.exit(failed ? 1 : 0);
}
