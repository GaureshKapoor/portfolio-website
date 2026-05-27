# gaureshkapoor.com

Personal portfolio site — [gaureshkapoor.com](https://gaureshkapoor.com)

## Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Deployment:** Vercel

## Local development

```sh
git clone git@github.com:GaureshKapoor/Portfolio-Website.git
cd Portfolio-Website
npm install
npm run dev
```

Runs at `http://localhost:8080` by default (or pass `-- --port 3000` to override).

## Structure

```
src/
  components/
    content/      # Page content (About, Experience, Projects, etc.)
    Landing.tsx   # Home page
    SectionLayout.tsx
  pages/          # Route-level page components
  App.tsx
```

All copy lives in `src/components/content/` — edit there to update page content.

## Build & deploy

```sh
npm run build   # outputs to dist/
```

Vercel auto-deploys on push to `main`.

## Continuous integration

Two Claude Code GitHub Actions are configured (`.github/workflows/`):

- **`@claude` mentions** — comment `@claude <request>` on any issue or PR to get a response.
- **Automated PR review** — add the `claude-review` label to a pull request to trigger a full review. It is opt-in (label-gated) to keep CI usage low; it does **not** run automatically on every push. Remove and re-add the label to re-review after changes.
