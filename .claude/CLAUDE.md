# Portfolio Website — Claude Instructions

## Project Overview

Gauresh Kapoor's personal portfolio site at **gaureshkapoor.com**, deployed via Vercel (auto-deploys on push to `main`). Built from the `gaureshkapoor-lovable` codebase, all Lovable branding has been removed.

**Stack:** Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion + React Router v6

**Dev server:** `npm run dev -- --port 3000` (or `bun run dev`)
**Build check:** `npm run build` — always verify this passes before pushing
**Deploy:** push to `main` → Vercel auto-deploys to gaureshkapoor.com

## Repo Structure

```
src/
  pages/          # Route-level pages (one per section)
  components/
    content/      # All editable site content lives here — edit these first
    ui/           # shadcn/ui primitives — do not touch unless adding a new component
  hooks/
  lib/
public/           # Static assets (favicon, images)
```

**Content files** (where all actual portfolio text and data lives):
- `src/components/content/AboutContent.tsx`
- `src/components/content/ExperienceContent.tsx`
- `src/components/content/ProjectsContent.tsx`
- `src/components/content/AchievementsContent.tsx`
- `src/components/content/FunFactsContent.tsx`
- `src/components/content/ContactContent.tsx`
- `src/components/content/FeedContent.tsx`
- `src/components/Landing.tsx` (landing page tagline/hero)

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

- **Content edits** → touch `src/components/content/` files only, unless the task explicitly requires layout/component changes
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
