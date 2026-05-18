import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const projects = [
  {
    slug: "vault",
    name: "Vault",
    period: "Dec 2025 – Present",
    description: "AI-powered personal finance manager with automated expense tracking, smart budgeting, and predictive spending insights.",
    tech: ["React Native", "Expo", "Supabase", "FastAPI", "LLMs"],
    longDescription: "Vault is a mobile-first personal finance app that uses AI to automatically categorize expenses, create smart budgets based on spending patterns, and provide predictive insights about future spending. Built with React Native for cross-platform support, backed by Supabase for real-time data sync and FastAPI for the ML inference pipeline.",
  },
  {
    slug: "ionava",
    name: "Ionava",
    period: "Sep 2025 – Present",
    description: "Full-stack marketplace platform connecting local artisans with consumers, featuring real-time inventory and Stripe payments.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Vercel"],
    longDescription: "Ionava is a marketplace that connects local artisans and craftspeople directly with consumers. The platform features real-time inventory management, secure Stripe payment processing, and a review system. Built with Next.js for SEO-optimized server-side rendering and deployed on Vercel.",
  },
  {
    slug: "wist-health",
    name: "Wist Health",
    period: "Jan – Jun 2025",
    description: "Health-tech platform using NLP to parse clinical notes and surface actionable patient insights for care teams.",
    tech: ["Python", "FastAPI", "NLP", "React", "Azure"],
    longDescription: "Wist Health is a health-tech platform designed to help care teams extract actionable insights from unstructured clinical notes. Using custom NLP models, it parses doctor notes, lab results, and patient histories to surface critical information and flag potential issues. Deployed on Azure for HIPAA-compliant infrastructure.",
  },
  {
    slug: "datares",
    name: "DataRes Consulting",
    period: "Sep 2021 – Mar 2024",
    description: "UCLA's premier data science consulting group. Led projects in predictive modeling, NLP, and data visualization for real-world clients.",
    tech: ["Python", "R", "Tableau", "SQL", "Scikit-learn"],
    longDescription: "As part of UCLA's DataRes consulting group, led multiple client-facing data science projects including predictive modeling for e-commerce companies, NLP-based sentiment analysis for brand monitoring, and interactive data visualizations for non-profit impact reporting.",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const navigate = useNavigate();

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 30, rotateX: 5 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.01, borderColor: "hsl(var(--primary) / 0.5)" }}
      onClick={() => navigate(`/projects/${project.slug}`)}
      className="text-left p-5 rounded-xl bg-card border border-border transition-all group relative overflow-hidden"
    >
      {/* Animated gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <motion.div
            initial={{ opacity: 0, x: -5, y: 5 }}
            animate={isInView ? { opacity: 0 } : {}}
            whileHover={{ opacity: 1, x: 0, y: 0 }}
            className="group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"
          >
            <ArrowUpRight className="w-4 h-4 text-primary" />
          </motion.div>
        </div>
        <p className="font-mono text-xs text-muted-foreground mb-3">{project.period}</p>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t, j) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.3 + j * 0.04 }}
              className="px-2 py-0.5 text-[10px] rounded-full bg-primary/10 text-primary font-medium font-mono"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.button>
  );
};

const ProjectsContent = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="space-y-8">
      <div ref={headerRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-foreground mb-2"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-8"
        >
          Things I've built and contributed to.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;
