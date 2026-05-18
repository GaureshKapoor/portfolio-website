

# Polish: Interactive Background, Theme Refinement, and Transition Fixes

## Problems Identified

1. **Background is generic** — neural network particles are common and impersonal. No mouse interactivity.
2. **Landing page nav wraps awkwardly** — "Contact" alone on a second line at your viewport width (the "two lines" issue).
3. **Page transitions feel disjointed** — `AnimatePresence` with `mode="wait"` on Routes doesn't work properly with React Router v6 (routes don't have unique `key` props tied to location). Exit animations likely don't fire.

## Changes

### 1. Interactive Background — Mouse-Reactive Gradient Mesh

Replace the particle canvas with a **gradient mesh that follows the cursor**. Two or three soft color blobs (blue/purple/teal tints) drift slowly on their own, and the primary blob tracks the mouse position with eased interpolation. This feels personal (responds to you), modern, and less "generic tech demo" than particles.

- Light mode: very subtle pastel blobs (near-white tints of blue/indigo)
- Dark mode: deeper blue/purple/teal blobs at low opacity
- On mobile (no hover): blobs drift autonomously in a slow figure-8 pattern
- Implemented via CSS `radial-gradient` layers on a div, with `mousemove` updating CSS custom properties — no canvas needed, GPU-composited

### 2. Landing Page Nav Layout Fix

- Change nav links from `flex-wrap` to a responsive grid: `grid-cols-4` on desktop, `grid-cols-2` on mobile
- This prevents the orphan "Contact" on its own line
- Slightly reduce gap and font size to fit cleanly in one visual block

### 3. Page Transition Fix

- Add `location.pathname` as `key` on the `Routes` component in `App.tsx` so `AnimatePresence` can detect route changes
- Refine `PageTransition` to use a cleaner fade+slide (no scale on exit, which looks glitchy)
- On the landing page, keep the "fade out all, navigate" pattern but reduce the delay from 400ms to 250ms for snappier feel

### 4. Theme Polish

- Warm up the light theme slightly: background from pure `0 0% 98%` to `40 20% 98%` (barely warm white)
- Primary color shift from pure blue (`220 70% 50%`) to a richer indigo (`235 60% 55%`) — more distinctive
- Dark mode: deeper background `230 25% 7%`, with a slight blue tint rather than neutral gray

## Files to Modify

| File | Change |
|------|--------|
| `src/components/BackgroundPattern.tsx` | Rewrite: CSS gradient mesh with mouse tracking |
| `src/components/Landing.tsx` | Fix nav layout to grid, reduce transition delay |
| `src/components/PageTransition.tsx` | Cleaner enter/exit animation |
| `src/App.tsx` | Add `location` key to Routes for AnimatePresence |
| `src/index.css` | Adjust theme colors (warmer light, richer dark) |

