# Content — Editable Source of Truth

This folder is the **human-editable source of truth** for the portfolio site at [gaureshkapoor.com](https://gaureshkapoor.com).

Edit any file here freely — write prose, bullet lists, whatever reads naturally. **The format is loose**; there's no enforced schema. These files are NEVER imported by the app. They exist for Gauresh (and LLMs) to edit comfortably.

## How to update the site

1. Edit the relevant markdown file in this folder.
2. Tell Claude: **"I updated `content/<file>`"**.
3. Claude reads the markdown and syncs it into the matching React component under `src/components/content/`.

That's the whole loop. You never touch the React code — Claude translates your markdown edits into the component.

## File → Component mapping

| Markdown file        | Component / target                                  |
| -------------------- | --------------------------------------------------- |
| `about.md`           | `src/components/content/AboutContent.tsx`           |
| `experience.md`      | `src/components/content/ExperienceContent.tsx`      |
| `projects.md`        | `src/components/content/ProjectsContent.tsx`         |
| `skills.md`          | `src/components/content/SkillsContent.tsx`           |
| `education.md`       | `src/components/content/EducationContent.tsx`        |
| `achievements.md`    | `src/components/content/AchievementsContent.tsx`     |
| `fun-facts.md`       | `src/components/content/FunFactsContent.tsx`         |
| `feed.md`            | `src/components/content/FeedContent.tsx`             |
| `contact.md`         | `src/components/content/ContactContent.tsx`          |
| `links.md`           | `src/config/site.ts` (the `links` object)           |

## "Last updated" date

The site's "Last updated" date lives in `src/config/site.ts` as `lastUpdated` (format: `"Month YYYY"`, e.g. `"June 2026"`). After any substantial content update, ask Claude to bump it.
