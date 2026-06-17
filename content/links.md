# Links

The single labeled list of every link used across the site. The **personal/social** links are mirrored into `src/config/site.ts` (the `links` object) and power the footer + contact + landing. The other sections document links embedded inside the page components (Experiences, Projects, Leadership, Feed, Fun Facts) so this file stays the source of truth. After editing here, ask Claude to sync.

## Personal & Social (mirrored to `site.ts` → `links`)

| Link        | Value                                                      | On site?                         |
| ----------- | ---------------------------------------------------------- | -------------------------------- |
| Email       | gaureshkapoor@gmail.com, gaureshkapoor7@ucla.edu          | Yes — footer + contact           |
| LinkedIn    | https://www.linkedin.com/in/gaureshkapoor/                 | Yes — footer + feed              |
| GitHub      | https://github.com/GaureshKapoor                           | Yes — footer                     |
| Phone       | +1 (310) 562-4855 → `tel:+13105624855`                     | Yes — contact                    |
| WhatsApp    | https://wa.me/13105624855                                  | Yes — footer                     |
| Instagram   | https://www.instagram.com/gauresh_kapoor/                  | Yes — footer + feed              |
| X / Twitter | https://x.com/gaureshkapoor17                              | Yes — footer + feed              |
| Resume      | `/resume.pdf` (in `public/`)                               | Linked on landing                |

## Experience company links (Experiences page)

Each primary/trajectory role links out to the company via an external-link icon.

| Company                            | Link                          |
| ---------------------------------- | ----------------------------- |
| PwC                                | https://www.pwc.com           |
| Wist.health                        | https://www.wist.health       |
| Zeta Global                        | https://www.zetaglobal.com    |
| Clear (from ClearTax)              | https://www.clear.in          |
| Atar Capital                       | https://www.atarcapital.com   |
| Mobalytics                         | https://mobalytics.gg         |
| California NanoSystems Institute   | https://cnsi.ucla.edu         |
| GlobalHunt                         | https://www.globalhunt.in     |

## Leadership org links (Experiences page → Leadership)

| Organization                              | Link                                                                                                          |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Bruin Finance Society                     | https://bruinfinancesociety.org/                                                                              |
| DataRes at UCLA                           | https://ucladatares.com/                                                                                       |
| Google Developer Student Clubs (UCLA)     | https://gdg.community.dev/gdg-on-campus-university-of-california-los-angeles-los-angeles-united-states/        |
| UCLA Statistics Club                      | https://statisticsucla.com/                                                                                    |

## Project links (Projects page)

| Project                                   | Link                                                  |
| ----------------------------------------- | ----------------------------------------------------- |
| Vault                                     | https://joinvault.app                                 |
| Ionava                                    | (no public link)                                      |
| Wist Health                               | https://www.wist.health                               |
| Nomadist                                  | (no public link)                                      |
| FrameForge                                | https://www.youtube.com/watch?v=UQcJUsA9tSs           |
| UBUN2                                     | (no public link)                                      |
| DataRes Consulting (earlier / ML)         | (no public link)                                      |
| ACM AI — Cassava Leaf Disease Detection   | (no public link)                                      |
| Driver Distraction Detector              | https://bit.ly/driverai                               |
| Medical Imaging — Pneumonia Detection     | https://bit.ly/medicalimagingai                       |

## Feed embeds (Feed page)

See `content/feed.md` for the full curated lists.

- **LinkedIn** post embeds: 6 posts (URN ids in `feed.md`), synced into `FeedContent.tsx` → `linkedinEmbeds`.
- **Instagram** post embeds: 7 posts (shortcodes in `feed.md`, first is pinned), synced into `FeedContent.tsx` → `instagramPosts`.

## Other embedded links

| Where                         | Link                                          |
| ----------------------------- | --------------------------------------------- |
| Fun Facts → "Latest Rec"      | https://www.youtube.com/watch?v=CEvIs9y1uog   |
