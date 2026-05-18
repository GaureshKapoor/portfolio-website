import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const posts = [
  {
    date: "Mar 2026",
    title: "Why Every PM Should Understand RAG Pipelines",
    excerpt: "Retrieval-augmented generation isn't just an engineering concern — it fundamentally changes how products surface information to users.",
    type: "thought",
  },
  {
    date: "Feb 2026",
    title: "The Case for Building in Public",
    excerpt: "Sharing your work-in-progress builds accountability, attracts collaborators, and creates a feedback loop that makes your product better.",
    type: "thought",
  },
  {
    date: "Jan 2026",
    title: "From Consulting to Code: Lessons from PwC",
    excerpt: "How enterprise consulting shaped my approach to building products — and why I think every builder should spend time in the trenches.",
    type: "linkedin",
    link: "https://www.linkedin.com/in/gaureshkapoor/",
  },
];

const PostCard = ({ post, index }: { post: typeof posts[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ x: 4, borderColor: "hsl(var(--primary) / 0.3)" }}
      className="p-5 rounded-xl bg-card border border-border group transition-colors relative overflow-hidden"
    >
      {/* Left accent bar that animates in */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        style={{ transformOrigin: "top" }}
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary/30 group-hover:bg-primary/60 transition-colors"
      />

      <div className="pl-3">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-muted-foreground">{post.date}</span>
          {post.type === "linkedin" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="px-2 py-0.5 text-[10px] rounded-full bg-primary/10 text-primary font-medium"
            >
              LinkedIn
            </motion.span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
        {post.link && (
          <motion.a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary hover:underline"
          >
            Read on LinkedIn <ExternalLink className="w-3 h-3" />
          </motion.a>
        )}
      </div>
    </motion.article>
  );
};

const FeedContent = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true });

  return (
    <div className="space-y-8">
      <div ref={headerRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-foreground mb-2"
        >
          Feed
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-8"
        >
          Thoughts, posts, and things I'm thinking about.
        </motion.p>
      </div>

      <div className="space-y-6">
        {posts.map((post, i) => (
          <PostCard key={i} post={post} index={i} />
        ))}
      </div>

      <div ref={galleryRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="pt-8 border-t border-border"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4 font-mono">
            <span className="text-primary/60">#</span> Gallery
          </h3>
          <p className="text-sm text-muted-foreground">Coming soon — photos, screenshots, and visual notes.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default FeedContent;
