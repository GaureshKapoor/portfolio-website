import { ExternalLink, Linkedin } from "lucide-react";
import { Instagram, XTwitter } from "@/components/BrandIcons";
import { Reveal, RevealItem } from "@/components/Reveal";
import { links } from "@/config/site";

// Official LinkedIn embeds. To add a post: open it on LinkedIn → "⋯" → "Embed this post",
// copy the iframe's src URL + height, and add an entry here (newest first).
const linkedinEmbeds: { src: string; height: number }[] = [
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7323576666180476928?collapsed=1", height: 881 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7296135446890201088?collapsed=1", height: 627 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7120559797900316672?collapsed=1", height: 263 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7069346006517108738?collapsed=1", height: 668 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7061509799145865216?collapsed=1", height: 263 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:6793834640412082176?collapsed=1", height: 263 },
];

const instagramPosts: { caption?: string; link?: string }[] = [
  { caption: "On the trail" },
  { caption: "Etihad matchday" },
  { caption: "Always a new spot to try" },
  { caption: "Somewhere new" },
  { caption: "Live music nights" },
  { caption: "Building, late" },
];

const tweets: { date: string; text: string; link?: string }[] = [
  {
    date: "Jun 2026",
    text: "Shipping beats planning. Every weekend project teaches me more than a month of reading roadmaps.",
  },
  {
    date: "May 2026",
    text: "The best forward-deployed work feels like product, sales, and engineering all at once. That's the fun part.",
    link: "https://x.com/",
  },
];

const Subhead = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-mono text-sm text-muted-foreground mb-4">
    <span className="text-primary"># </span>
    {children}
  </h3>
);

const LinkedInEmpty = () => (
  <div className="rounded-lg border border-dashed border-border p-6 text-sm text-muted-foreground leading-relaxed">
    No posts embedded yet. On LinkedIn, open a post →{" "}
    <span className="font-mono text-foreground">⋯</span> →{" "}
    <span className="font-mono text-foreground">Embed this post</span>, copy the link, and add it to{" "}
    <span className="font-mono text-foreground">linkedinEmbeds</span> — they'll render here as live,
    native LinkedIn posts.
  </div>
);

const InstagramTile = ({ post }: { post: typeof instagramPosts[0] }) => {
  const Wrapper = post.link ? "a" : "div";
  const wrapperProps = post.link
    ? { href: post.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative block aspect-square rounded-md overflow-hidden border border-border bg-secondary"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary to-secondary" />
      <Instagram className="absolute inset-0 m-auto w-8 h-8 text-foreground/10" />
      {post.caption && (
        <div className="absolute inset-0 flex items-center justify-center p-2 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-xs text-foreground text-center leading-snug">{post.caption}</p>
        </div>
      )}
    </Wrapper>
  );
};

const TweetCard = ({ tweet }: { tweet: typeof tweets[0] }) => (
  <article className="rounded-lg border border-border bg-card p-5">
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold shrink-0">
        GK
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-foreground leading-tight">Gauresh Kapoor</p>
          <span className="text-sm text-muted-foreground truncate">@gaureshkapoor</span>
          <XTwitter className="w-3.5 h-3.5 text-muted-foreground ml-auto shrink-0" />
        </div>
        <p className="text-[15px] text-foreground/80 leading-relaxed mt-1">{tweet.text}</p>
        <div className="flex items-center gap-3 mt-2">
          <span className="font-mono text-[11px] text-muted-foreground">{tweet.date}</span>
          {tweet.link && (
            <a
              href={tweet.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              View on X <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  </article>
);

const FeedContent = () => {
  return (
    <Reveal className="space-y-12 max-w-xl mx-auto">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Feed</h2>
        <p className="text-muted-foreground mt-2">Thoughts, posts, and things I'm building in the open.</p>
      </RevealItem>

      <RevealItem>
        <Subhead>LinkedIn</Subhead>
        <div className="space-y-5">
          {linkedinEmbeds.length > 0 ? (
            linkedinEmbeds.map((embed, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg bg-white border border-border shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:shadow-[0_10px_40px_-12px_rgba(0,0,0,0.55)]"
              >
                <iframe
                  src={embed.src}
                  height={embed.height}
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  title={`LinkedIn post ${i + 1}`}
                  className="block w-full"
                />
              </div>
            ))
          ) : (
            <LinkedInEmpty />
          )}
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            <Linkedin className="w-4 h-4" /> See all activity on LinkedIn
          </a>
        </div>
      </RevealItem>

      <RevealItem>
        <Subhead>Instagram</Subhead>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {instagramPosts.map((post, i) => (
            <InstagramTile key={i} post={post} />
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3">A curated grid — real photos coming soon.</p>
      </RevealItem>

      <RevealItem>
        <Subhead>X / Twitter</Subhead>
        <div className="space-y-4">
          {tweets.map((tweet, i) => (
            <TweetCard key={i} tweet={tweet} />
          ))}
        </div>
      </RevealItem>
    </Reveal>
  );
};

export default FeedContent;
