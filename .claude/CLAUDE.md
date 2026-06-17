# Portfolio Website — Claude Instructions

## Project Overview

Gauresh Kapoor's personal portfolio site at **gaureshkapoor.com**, deployed via Vercel (auto-deploys on push to `main`). Built from the `gaureshkapoor-lovable` codebase, all Lovable branding has been removed.

**Stack:** Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion + React Router v6

**Package manager:** **npm only** — pinned via `packageManager` + `engines` in `package.json`. Do NOT run `bun install`/`yarn`/`pnpm` here; other lockfiles are gitignored. Mixing package managers churns `node_modules` and corrupts Vite's cache (the historical cause of dev-server/build hangs).
**Dev server:** `npm run dev -- --port 3000` (Vite default port is 8080 if `--port` omitted)
**Build check:** `npm run build` — always verify this passes before pushing
**Deploy:** push to `main` → Vercel auto-deploys to gaureshkapoor.com (one lockfile = deterministic install)

### If the dev server or build hangs (sits at low CPU, never finishes)
The cause is almost always an orphaned `vite`/`esbuild` process from a prior session, or a stale Vite cache — NOT the app code (clean cold start is <1s, build ~2–16s). Recover with:
1. Kill strays: `pkill -f vite ; pkill -f esbuild` (scoped to this machine's node tooling)
2. Clear caches: `npm run clean` (removes `node_modules/.vite` + `dist`)
3. Nuclear option (after package changes or weird state): `npm run reinstall`
Always stop the dev server with Ctrl+C (clean shutdown) rather than closing the terminal, so esbuild children don't orphan.

### Install / build failures — the ONE clean-install workflow (do this, don't improvise)
Symptoms we've actually hit and must not repeat:
- `Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from .../vite/dist/node/cli.js` — esbuild missing entirely.
- `You installed esbuild for another platform... @esbuild/<platform> package is present but this platform needs @esbuild/<platform>` — esbuild's optional platform binary is missing/mismatched.

**Root cause:** `node_modules` left in a half-written state. The two ways we caused it: (a) interrupting an `npm install` partway, and (b) **running more than one install at once** (e.g. firing a background `npm install` and then another) — concurrent installs race on `node_modules` and drop esbuild's optional platform package (`@esbuild/darwin-arm64`).

**Hard rules:**
- **Never run two installs concurrently.** One install at a time, start to finish. Before starting one, confirm none is running: `ps aux | grep -Ec "[n]pm (install|ci)"` should be `0` (or `1`, the grep itself).
- **Prefer `npm ci` over `npm install`** for recovery — it wipes `node_modules` and installs exactly from `package-lock.json` (deterministic, ~7s here). Use plain `npm install` only when intentionally changing deps.
- Do not `bun install`/`yarn`/`pnpm` (see package-manager note above) — only `package-lock.json` should exist.

**Canonical clean-install recovery (copy/paste, single sequence):**
```bash
pkill -f "npm install"; pkill -f "npm ci"; pkill -f vite; pkill -f esbuild; sleep 2
rm -rf node_modules node_modules/.vite dist
npm ci
ls node_modules/@esbuild/darwin-arm64/package.json node_modules/esbuild/package.json   # both must exist
npm run build                                                                            # must pass before any push
```
This is the smooth path: kill strays → wipe → one deterministic `npm ci` → verify esbuild + build. If `npm ci` complains the lockfile is out of sync with `package.json`, that's a real dep change — fix `package.json`/lockfile, don't paper over it with `npm install --force`.

## Repo Structure

```
content/          # FREEFORM MARKDOWN — Gauresh's editable source of truth (see below)
src/
  pages/          # Route-level pages (one per section)
  config/
    site.ts       # links, sections nav order, lastUpdated — single source for these
  components/
    content/      # Rendered section content (the .tsx Claude syncs from content/*.md)
    ui/           # shadcn/ui primitives — do not touch unless adding a new component
  hooks/
  lib/
public/           # Static assets (favicon, images)
```

**Content files** (rendered React components — Claude edits these to match `content/*.md`):
- `src/components/content/AboutContent.tsx` (bio + principles)
- `src/components/content/ExperienceContent.tsx`
- `src/components/content/ProjectsContent.tsx`
- `src/components/content/SkillsContent.tsx` (skills + tech stack)
- `src/components/content/AchievementsContent.tsx`
- `src/components/content/EducationContent.tsx` (education + courses)
- `src/components/content/FunFactsContent.tsx` (facts + books/movies/music)
- `src/components/content/FeedContent.tsx` (LinkedIn / Instagram gallery / X feed)
- `src/components/content/ContactContent.tsx` (contacts + form + Gauresh AI)
- `src/components/Landing.tsx` (landing page tagline/hero)

## Content Source of Truth & Sync Workflow

`content/` (repo root) holds **freeform markdown** that is Gauresh's canonical, human-editable record of his
profile/resume. The format is intentionally loose — it is for humans/LLMs and is **never imported by the app**.

**The sync rule:** when Gauresh says "I updated `content/<x>.md`" (or edits the docs), read that markdown and
edit the matching rendered component to match. Mapping:

| `content/…`        | → rendered component |
|--------------------|----------------------|
| `about.md`         | `AboutContent.tsx` |
| `experience.md`    | `ExperienceContent.tsx` |
| `projects.md`      | `ProjectsContent.tsx` (keep slugs — they key `/projects/:slug`) |
| `skills.md`        | `SkillsContent.tsx` |
| `education.md`     | `EducationContent.tsx` |
| `achievements.md`  | `AchievementsContent.tsx` |
| `fun-facts.md`     | `FunFactsContent.tsx` |
| `feed.md`          | `FeedContent.tsx` |
| `contact.md`       | `ContactContent.tsx` |
| `links.md`         | `src/config/site.ts` → `links` |

**Section nav order** lives in `src/config/site.ts` → `sections` (About, Experience, Projects, Skills,
Achievements, Education, Fun Facts, Feed, Contact). It drives the landing grid, the top nav, and the
prev/next arrows (`SectionNav`). Edit it in one place.

**"Last updated" footer:** `src/config/site.ts` → `lastUpdated` (format `"Month YYYY"`), shown in `Footer.tsx`.
**Bump it after any substantial profile/experience/content update, and proactively recommend bumping it**
when a sync is non-trivial.

**Links & footer:** site-facing links live in `links` (`site.ts`), mirrored from `content/links.md`. The
footer + contact use them. WhatsApp/Instagram/X use inline brand SVGs in `src/components/BrandIcons.tsx`
(lucide lacks them); lucide covers Mail/Phone/Github/Linkedin.

**Deferred backends (currently stubbed UI):**
- **Gauresh AI** chat (`src/components/GaureshAI.tsx`, Contact page only) is **mocked**. Live version =
  Vercel `/api/chat` → Claude, system prompt/knowledge built from `content/*.md` in his voice (+ rate limiting).
- **Contact form** (`src/components/ContactForm.tsx`) posts to Web3Forms via `VITE_WEB3FORMS_KEY`; with no key
  it shows an info toast instead of sending. Add the key (Vercel env) to enable real delivery.
- **Feed** is curated templates from `feed.md` (no live APIs). Real embeds can be dropped in later.

## About Gauresh

**Background:** ~1 year out of UCLA (B.S. Data Science + Business Economics). Early-career, targeting technical customer-facing roles at Series A+ startups and select big-tech companies.

**Target roles:** Solutions Architect, Forward Deployed Engineer, Product Manager, AI Product

**Elevator pitch:**
- Product @ PwC Deals (AI, data, analytics & engineering)
- Strong tech / AI / data foundation
- Previously built AI products at Zeta, Wist/UpHealth, Clear
- Zero-to-one product building on nights and weekends
- Comfortable across strategy, ops, and execution

**Projects being built:**
1. **Vault** — full-stack AI platform for agentic task planning
2. **Ionava** — fintech wellness app (angel-backed)
3. **Wist Health** — mental-health AI app published on the App Store (through an accelerator)

**Achievements:** William F. Sharpe Fellow, $10K GenAI & Health Innovation Grant, FBRC.ai × Luma AI Hackathon

**Education:** UCLA — Data Science + Business Economics. Sharpe Fellow honors program.

**Fun facts:** Man City fan, big foodie (on Beli), into the outdoors, concerts/premieres/movies/TV shows, 20+ countries, obsessed with AI and startups

## Working Rules

- **Content edits** → the canonical source is `content/*.md`; sync changes into the matching `src/components/content/` component (see Content Source of Truth above). Don't touch layout/`ui/` unless the task requires it
- **No new dependencies** without a clear reason — the stack is already heavy
- **No comments** in code unless a non-obvious constraint or workaround
- **Run `npm run build`** before any push to confirm the build is clean
- **Push to `main`** to deploy — Vercel picks it up automatically, zero-downtime on normal pushes
- **No Lovable references** anywhere — no imports, no branding, no metadata mentions
- shadcn/ui components live in `src/components/ui/` — add new ones with `npx shadcn@latest add <component>`, don't hand-roll them
- Framer Motion is available for animations — use it for transitions and entrance effects

## Pull Requests & Claude CI

Two GitHub Actions are installed in `.github/workflows/` (both bill against the Claude subscription via `CLAUDE_CODE_OAUTH_TOKEN`, not a separate API account):

- `claude.yml` — responds to `@claude <request>` mentions in issues/PRs. On-demand only; costs nothing unless invoked.
- `claude-code-review.yml` — full automated PR review, **gated behind the `claude-review` label**. It runs only when that label is added to a PR. This is deliberate: it does NOT auto-run on every push (that wasted usage on a solo repo).

**Review workflow rule:** Don't assume every PR needs an automated review — this is a solo repo and most changes are small. When a PR genuinely warrants a full review (larger/riskier changes), either add the label with `gh pr edit <num> --add-label claude-review`, or ask Gauresh whether he wants it. To re-review after pushing changes, remove and re-add the label.

## Design Aesthetic

Minimalist, dark-mode-friendly, modern. Clean typography. Subtle animations via Framer Motion. Avoid over-engineering — the site should feel fast and focused, not flashy.
