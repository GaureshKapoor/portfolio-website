import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "PwC",
    role: "Associate, AI & Data Solutions — AI Product & Data",
    period: "Jun 2025 – Present",
    location: "Los Angeles, CA",
    bullets: [
      "Engineered and deployed an LLM-powered client delivery platform using React, LangChain, Anthropic API, and Azure/AWS, reducing deliverable production time from ~8 hours to 45 minutes through reusable agentic workflows",
      "Designed AI-driven customer analytics dashboards integrating Databricks Delta Lake pipelines and LLM-based parsing for a $100B+ Financial Services client, reducing manual synthesis by 60% across 100K+ customer records",
      "Created a financial carveout engine with PyTorch, SQL, and OCR pipelines to extract and reconcile data across 500+ legal/financial docs, supporting 3 PE diligence deals totaling $800M+ and reducing manual data extraction by ~70%",
      "Drove AI innovation within Deals by integrating AI-native SOPs, boosting team throughput by ~200% across 15 members",
    ],
  },
  {
    company: "Zeta Global",
    role: "Generative AI Product Intern — AI Agents & Zeta Opportunity Engine",
    period: "Jun – Aug 2024",
    location: "San Francisco, CA / New York, NY",
    bullets: [
      "Automated a GPT feedback system using RLHF, improving AI agent response accuracy by 10% across client BI workflows",
      "Developed a real-time retrieval interface between GenAI agents and LLM systems, reducing team debugging time by 25%",
    ],
  },
  {
    company: "Clear (ClearTax)",
    role: "Product Strategy & Analytics — FinTech SaaS Products",
    period: "Jan – Jun 2024",
    location: "New Delhi, India",
    bullets: [
      "Partnered with Business Ops team to modernize and simplify web app UI/UX, boosting net customers acquired by ~15%",
      "Built a Python NLP model to extract tax data from images and PDFs with 68% accuracy across Clear's 130M-user platform",
    ],
  },
  {
    company: "Zeta Global",
    role: "Data Science & Analytics Intern — GTM Analytics",
    period: "Jun – Aug 2023",
    location: "New York, NY",
    bullets: [
      "Collaborated with NYC and Prague teams on GTM ad campaigns, analyzing 50M+ garment sales records in Python/SQL to model customer purchasing behavior, driving product and operational changes that improved monthly P&L by 8%",
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
