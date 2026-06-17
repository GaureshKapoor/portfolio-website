import { useState } from "react";
import { ExternalLink, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, XTwitter } from "@/components/BrandIcons";
import { Reveal, RevealItem } from "@/components/Reveal";
import { links } from "@/config/site";

// Official LinkedIn embeds. To add a post: open it on LinkedIn -> "..." -> "Embed this post",
// copy the iframe's src URL + height, and add an entry here (newest first).
const linkedinEmbeds: { src: string; height: number }[] = [
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7323576666180476928?collapsed=1", height: 881 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7296135446890201088?collapsed=1", height: 627 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7120559797900316672?collapsed=1", height: 263 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7069346006517108738?collapsed=1", height: 668 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7061509799145865216?collapsed=1", height: 263 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:6793834640412082176?collapsed=1", height: 263 },
];

// Instagram iframe embeds. To add a post: paste the shortcode from the URL
// (instagram.com/p/<shortcode>/) into this array -- they'll render as live embeds.
const instagramPosts: { shortcode: string }[] = [];

const Subhead = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-mono text-sm text-muted-foreground mb-4">
    <span className="text-primary"># </span>
    {children}
  </h3>
);

const LinkedInSection = () => {
  const [idx, setIdx] = useState(0);
  const n = linkedinEmbeds.length;
  const go = (d: number) => setIdx((i) => (i + d + n) % n);
  const embed = linkedinEmbeds[idx];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-mono text-sm text-muted-foreground">
          <span className="text-primary"># </span>LinkedIn
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => go(-1)}
            aria-label="Previous post"
            className="p-1.5 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-xs text-muted-foreground tabular-nums w-10 text-center">
            {idx + 1} / {n}
          </span>
          <button
            onClick={() => go(1)}
            aria-label="Next post"
            className="p-1.5 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden rounded-lg bg-white border border-border shadow-sm dark:border-white/10 dark:shadow-[0_10px_40px_-12px_rgba(0,0,0,0.55)]"
        >
          <iframe
            src={embed.src}
            height={embed.height}
            width="100%"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            title={`LinkedIn post ${idx + 1}`}
            className="block w-full"
          />
        </motion.div>
      </AnimatePresence>

      <a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-4"
      >
        <Linkedin className="w-4 h-4" /> See all activity on LinkedIn
      </a>
    </div>
  );
};

const InstagramSection = () => (
  <div>
    <Subhead>Instagram</Subhead>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center text-sm font-semibold text-muted-foreground shrink-0">
        GK
      </div>
      <div className="min-w-0">
        <a
          href="https://www.instagram.com/gauresh_kapoor/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
        >
          @gauresh_kapoor
        </a>
      </div>
      <a
        href="https://www.instagram.com/gauresh_kapoor/"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto shrink-0 text-xs text-primary hover:underline"
      >
        Follow
      </a>
    </div>
    {instagramPosts.length > 0 ? (
      <div className="space-y-5">
        {instagramPosts.map((post, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg bg-white border border-border shadow-sm dark:border-white/10 dark:shadow-[0_10px_40px_-12px_rgba(0,0,0,0.55)]"
          >
            <iframe
              src={`https://www.instagram.com/p/${post.shortcode}/embed`}
              width="100%"
              height={480}
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              title={`Instagram post ${i + 1}`}
              className="block w-full"
            />
          </div>
        ))}
      </div>
    ) : (
      <div className="rounded-lg border border-border bg-card p-8 flex flex-col items-center text-center">
        <Instagram className="w-6 h-6 text-muted-foreground mb-2" />
        <p className="text-sm text-muted-foreground">Posts coming soon.</p>
      </div>
    )}
  </div>
);

const XSection = () => (
  <div>
    <Subhead>X / Twitter</Subhead>
    <div className="rounded-lg bg-black text-white p-5">
      <XTwitter className="w-5 h-5 text-white mb-3" />
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center text-sm font-semibold shrink-0">
          GK
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-white leading-tight text-sm">Gauresh Kapoor</p>
          <p className="text-sm text-white/50 truncate">@gaureshkapoor17</p>
        </div>
      </div>
      <p className="text-sm text-white/70 leading-relaxed mb-4">
        No posts yet. Catch me on X soon.
      </p>
      <a
        href="https://x.com/gaureshkapoor17"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-white bg-white/10 hover:bg-white/20 transition-colors rounded-md px-3 py-1.5"
      >
        Follow on X <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  </div>
);

const FeedContent = () => {
  return (
    <Reveal className="space-y-10">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Feed</h2>
        <p className="text-muted-foreground mt-2">
          Thoughts, posts, and things I'm building in the open.
        </p>
      </RevealItem>

      <RevealItem>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <LinkedInSection />
          </div>
          <div className="lg:col-span-5 mt-10 lg:mt-0 space-y-8">
            <InstagramSection />
            <XSection />
          </div>
        </div>
      </RevealItem>
    </Reveal>
  );
};

export default FeedContent;
