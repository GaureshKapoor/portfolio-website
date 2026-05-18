import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "PwC",
    role: "Associate, AI & Data Solutions",
    period: "Jun 2025 – Present",
    location: "Los Angeles, CA",
    bullets: [
      "Advising Fortune 500 clients on AI/ML strategy, building agentic systems and LLM-powered tools for enterprise transformation",
      "Leading data migration and cloud analytics initiatives across Databricks, Azure, and AWS platforms",
      "Developing custom NLP pipelines for contract analysis and due diligence automation in M&A deals",
      "Building internal accelerators for AI-driven financial modeling and scenario planning",
    ],
  },
  {
    company: "Zeta Global",
    role: "AI Engineering Intern",
    period: "Jun – Aug 2024",
    location: "New York, NY",
    bullets: [
      "Built and deployed LLM-based recommendation engine improving ad targeting CTR by 18%",
      "Developed RAG pipeline for internal knowledge retrieval using LangChain and vector databases",
    ],
  },
  {
    company: "Clear (ClearTax)",
    role: "Product & Data Intern",
    period: "Jan – Jun 2024",
    location: "Bangalore, India",
    bullets: [
      "Led A/B testing for onboarding flow redesign, increasing conversion by 12%",
      "Built analytics dashboards in Tableau for product usage tracking across 5M+ users",
    ],
  },
  {
    company: "Zeta Global",
    role: "Data Science Intern",
    period: "Jun – Aug 2023",
    location: "New York, NY",
    bullets: [
      "Engineered real-time customer segmentation models using Python and SQL, processing 50M+ user events daily",
    ],
  },
];

const education = {
  school: "University of California, Los Angeles",
  degrees: "B.S. Statistics & Data Science + B.A. Business Economics",
  period: "Sep 2021 – Jun 2025",
  gpa: "3.8 / 4.0",
};

const TimelineCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row gap-4">
      {/* Date column */}
      <div className="md:w-[120px] shrink-0 flex md:justify-end items-start">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-xs text-muted-foreground bg-background px-1 relative z-10"
        >
          {exp.period}
        </motion.span>
      </div>

      {/* Dot — pulses when in view */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        className="absolute left-[4px] md:left-[117px] top-1 w-[7px] h-[7px] rounded-full bg-primary border-2 border-background z-10"
      >
        <motion.div
          animate={isInView ? { scale: [1, 2.5, 1], opacity: [0.6, 0, 0] } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute inset-0 rounded-full bg-primary"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.6, delay: index * 0.05 + 0.15 }}
        className="pl-6 md:pl-6 flex-1 group"
      >
        <motion.h3
          className="text-lg font-semibold text-foreground"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {exp.role}
        </motion.h3>
        <p className="text-primary font-medium text-sm">{exp.company} · {exp.location}</p>
        <ul className="mt-3 space-y-2">
          {exp.bullets.map((b, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + j * 0.08 }}
              className="text-sm text-muted-foreground flex gap-2"
            >
              <motion.span
                animate={isInView ? { opacity: [0, 1, 0.6] } : {}}
                transition={{ duration: 0.6, delay: 0.4 + j * 0.08 }}
                className="text-primary/60 mt-1 shrink-0"
              >
                ›
              </motion.span>
              <span>{b}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const ExperienceContent = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const eduRef = useRef(null);
  const eduInView = useInView(eduRef, { once: true, margin: "-50px" });

  return (
    <div className="space-y-12">
      <div ref={headerRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-foreground mb-8"
        >
          Experience
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Animated vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-[7px] md:left-[120px] top-0 bottom-0 w-px bg-border"
        />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <TimelineCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>

      {/* Education */}
      <div ref={eduRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={eduInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4 font-mono">
            <span className="text-primary/60">#</span> Education
          </h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={eduInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ borderColor: "hsl(var(--primary) / 0.4)" }}
            className="relative flex flex-col md:flex-row gap-4 p-5 rounded-xl bg-card border border-border transition-colors"
          >
            <div className="md:w-[120px] shrink-0 flex md:justify-end">
              <span className="font-mono text-xs text-muted-foreground">{education.period}</span>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-foreground">{education.school}</h4>
              <p className="text-primary font-medium text-sm">{education.degrees}</p>
              <p className="text-sm text-muted-foreground mt-1">GPA: {education.gpa}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceContent;
