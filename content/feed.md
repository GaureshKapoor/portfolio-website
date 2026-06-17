# Feed

The Feed is a curated, native-looking stream with three sections: **LinkedIn posts / thoughts**, an **Instagram-style photo gallery**, and **X / Twitter posts**. Curate everything from this file.

## LinkedIn (live embeds)

Profile: https://www.linkedin.com/in/gaureshkapoor/

These render as **real, live LinkedIn posts** (official embeds — native look, live reaction/comment counts).

**How to add a post:**
1. Open the post on LinkedIn.
2. Click the **⋯** menu (top-right of the post) → **Embed this post**.
3. Copy the link in the iframe `src` — it looks like:
   `https://www.linkedin.com/embed/feed/update/urn:li:share:7300000000000000000`
4. Paste it in the list below (newest first). Optionally note a height if the post is tall/short.

Then tell Claude to sync these into `src/components/content/FeedContent.tsx` → `linkedinEmbeds`.

Posts to embed (newest first — synced into `FeedContent.tsx` → `linkedinEmbeds`):
- urn:li:ugcPost:7323576666180476928 (h=881)
- urn:li:ugcPost:7296135446890201088 (h=627)
- urn:li:share:7120559797900316672 (h=263)
- urn:li:share:7069346006517108738 (h=668)
- urn:li:share:7061509799145865216 (h=263)
- urn:li:share:6793834640412082176 (h=263)

> Note: LinkedIn embeds are light-themed (LinkedIn's own styling), so they appear as light cards even in the site's dark mode — this is expected and looks authentically like LinkedIn.

## Instagram Gallery

_Add photo entries below. Each entry: a short caption + a link to the post._

- _(example)_ Caption goes here — https://www.instagram.com/p/REPLACE_ME/
- _(example)_ Caption goes here — https://www.instagram.com/p/REPLACE_ME/
- _(example)_ Caption goes here — https://www.instagram.com/p/REPLACE_ME/

## X / Twitter

_Add post entries below. Each entry: the post text + a link to the tweet._

- _(example)_ Post text goes here — https://x.com/gaureshkapoor/status/REPLACE_ME
- _(example)_ Post text goes here — https://x.com/gaureshkapoor/status/REPLACE_ME
