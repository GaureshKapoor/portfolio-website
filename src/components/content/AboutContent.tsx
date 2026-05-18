import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const skillCategories = [
  { label: "AI / ML", items: ["LLMs", "RAG", "LangChain", "Computer Vision", "NLP", "Prompt Engineering", "Fine-Tuning"] },
  { label: "Programming", items: ["Python", "R", "SQL", "JavaScript", "TypeScript", "Java", "C++"] },
  { label: "Backend & Data", items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "Pinecone", "Redis", "Databricks"] },
  { label: "Dev Tools", items: ["Git", "Docker", "AWS", "Azure", "GCP", "Vercel", "CodeRabbit"] },
  { label: "Product", items: ["Figma", "Jira", "A/B Testing", "Databricks", "Openrouter", "Hugging Face", "Tableau"] },
];

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 12);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, text, delay]);

  return (
    <span ref={ref}>
      {displayed}
      {displayed.length < text.length && isInView && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="text-primary"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

const SkillCategory = ({ cat, index }: { cat: typeof skillCategories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref}>
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="text-sm font-medium text-foreground mb-2 font-mono"
      >
        {cat.label}
      </motion.p>
      <div className="flex flex-wrap gap-2">
        {cat.items.map((item, j) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: index * 0.05 + j * 0.03 }}
            whileHover={{ scale: 1.08, y: -2, borderColor: "hsl(var(--primary) / 0.5)" }}
            className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border font-mono cursor-default transition-colors"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const AboutContent = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const eduRef = useRef(null);
  const eduInView = useInView(eduRef, { once: true, margin: "-30px" });

  const bio1 = "I'm Gauresh — a product builder and AI strategist based in Los Angeles. I work at the intersection of technology consulting, data science, and product development. Currently at PwC helping Fortune 500 companies navigate AI transformation, while building my own products on the side.";
  const bio2 = "UCLA grad with dual degrees in Statistics & Data Science and Business Economics. I believe the best products are built when deep technical skills meet genuine empathy for users.";

  return (
    <div className="space-y-12">
      {/* Bio */}
      <div ref={headerRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          About Me
        </motion.h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TypingText text={bio1} delay={300} />
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TypingText text={bio2} delay={3800} />
          </motion.p>
        </div>
      </div>

      {/* Skills */}
      <div>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-foreground mb-4 font-mono"
        >
          <span className="text-primary/60">#</span> Skills
        </motion.h3>
        <div className="space-y-4">
          {skillCategories.map((cat, i) => (
            <SkillCategory key={cat.label} cat={cat} index={i} />
          ))}
        </div>
      </div>

      {/* Education */}
      <div ref={eduRef}>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={eduInView ? { opacity: 1 } : {}}
          className="text-lg font-semibold text-foreground mb-4 font-mono"
        >
          <span className="text-primary/60">#</span> Education
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={eduInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ borderColor: "hsl(var(--primary) / 0.4)", y: -2 }}
          className="p-5 rounded-xl bg-card border border-border transition-all"
        >
          <h4 className="text-lg font-bold text-foreground">University of California, Los Angeles</h4>
          <p className="text-primary font-medium mt-1">B.S. Statistics & Data Science + B.A. Business Economics</p>
          <p className="text-sm text-muted-foreground mt-1">Sep 2021 – Jun 2025 · GPA: 3.8 / 4.0</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {["Dean's Honor List", "Sharpe Fellow", "Start-Up Nation Fellow"].map((h, i) => (
              <motion.span
                key={h}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={eduInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
              >
                {h}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutContent;
