# Feed

The Feed is a native-looking stream with three sections: **LinkedIn** (live post carousel), **Instagram** (live post carousel), and **X / Twitter** (placeholder card). Curate everything from this file; the rendered component is `src/components/content/FeedContent.tsx`.

Layout: LinkedIn on the left (wider column), Instagram + X stacked on the right. LinkedIn and Instagram are carousels with prev/next arrows, a counter, and a fade transition between posts.

## LinkedIn (live embeds)

Profile: https://www.linkedin.com/in/gaureshkapoor/

These render as **real, live LinkedIn posts** (official embeds, native look, live reaction/comment counts).

**How to add a post:**
1. Open the post on LinkedIn.
2. Click the **⋯** menu (top-right of the post) → **Embed this post**.
3. Copy the link in the iframe `src`, which looks like:
   `https://www.linkedin.com/embed/feed/update/urn:li:share:7300000000000000000`
4. Paste it in the list below (newest first). Optionally note a height if the post is tall or short.

Then tell Claude to sync these into `FeedContent.tsx` → `linkedinEmbeds`.

Posts embedded (newest first, synced into `FeedContent.tsx` → `linkedinEmbeds`):
- urn:li:ugcPost:7473163905981116416 (h=1034) — 1-year-since-UCLA checkpoint / comeback post
- urn:li:ugcPost:7323576666180476928 (h=881)
- urn:li:ugcPost:7296135446890201088 (h=627)
- urn:li:share:7120559797900316672 (h=263)
- urn:li:share:7069346006517108738 (h=668)
- urn:li:share:7061509799145865216 (h=263)
- urn:li:share:6793834640412082176 (h=263)

> Note: LinkedIn embeds are light-themed (LinkedIn's own styling), so they appear as light cards even in the site's dark mode. This is expected and looks authentically like LinkedIn.

## Instagram (live embeds)

Profile: https://www.instagram.com/gauresh_kapoor/

These render as **real, live Instagram posts** (official `/embed/captioned` iframes) in a carousel. Only individual posts/reels embed; profile-level embeds do not work (Instagram deprecated them, they only ever show a skeleton).

**How to add a post:**
1. Open the specific post or reel on instagram.com.
2. Click the **⋯** menu → **Embed**.
3. Copy the post URL, which looks like `https://www.instagram.com/p/<shortcode>/`.
4. Paste the `<shortcode>` in the list below, in display order (first = pinned/leads).

Then tell Claude to sync these into `FeedContent.tsx` → `instagramPosts`.

Posts embedded (display order):
- DSzfXQglC7V
- DCcuACyT163
- C3oH34KPwlp
- C20SHQYvnNW
- C0UyLo6ys37
- Ch6-dA-L-zv

> The pinned post `ClVF0Twr22d` is intentionally NOT embedded: Instagram refuses to
> serve it in an iframe (returns a login wall / X-Frame-deny), which is typical for a
> video post with licensed audio. Neither the video nor the rest of the post can be
> pulled in automatically. To feature it, add a custom static card with a
> manually-supplied image + caption.

> LinkedIn note: embeds are rendered without `?collapsed=1` so each post shows its full
> caption top-to-bottom (no "see more"). LinkedIn iframes are fixed-height and expose no
> auto-resize, so heights are set per post in `FeedContent.tsx` -> `linkedinEmbeds`.

## X / Twitter

Profile: https://x.com/gaureshkapoor17

No posts yet. The component renders a native-looking black X card (GK avatar + handle + "No posts yet. Catch me on X soon." + Follow button) until there are tweets to embed.

When there are tweets to show, add them below (post text + link), then tell Claude to wire them in:
- _(none yet)_
