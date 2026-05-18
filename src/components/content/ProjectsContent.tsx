import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const projects = [
  {
    slug: "vault",
    name: "Vault",
    period: "Dec 2025 – Present",
    description: "Full-stack AI platform for agentic ideation, task-planning and execution — built from 0 to 1.",
    tech: ["Next.js", "Supabase", "Vercel", "Stripe", "LLMs"],
    longDescription: "Shipped a full-stack AI platform built on Next.js, Supabase, and Vercel. Architected core systems across auth, data models, agent flows, billing (Stripe), analytics, and product UX from 0 to 1.",
  },
  {
    slug: "ionava",
    name: "Ionava",
    period: "Sep 2025 – Present",
    description: "Financial health & wellness platform backed by angel investors — production full-stack from the ground up.",
    tech: ["React", "TypeScript", "Supabase", "Stripe", "Vercel"],
    longDescription: "Launched a production full-stack platform, owning frontend architecture, backend services, data layers and security. Built stateful user flows and API integrations for financial-health planning, Health Score and Wellness Wallet functionality.",
  },
  {
    slug: "wist-health",
    name: "Wist Health",
    period: "Jan – Jun 2025",
    description: "B2B mental-health AI solutions — web and iOS app published on the App Store via the Larta Heal.LA 2025 accelerator.",
    tech: ["React", "Swift (iOS)", "LLMs", "Supabase"],
    longDescription: "Engineered a web and iOS AI wellness app with adaptive UX and personalized support flows. Implemented LLM-powered conversational workflows and session state management for guided user reflections.",
  },
  {
    slug: "datares",
    name: "DataRes Consulting",
    period: "Sep 2021 – Mar 2024",
    description: "Pro-bono data science consulting for local businesses through UCLA's premier consulting group.",
    tech: ["Python", "R", "SQL", "Scikit-learn", "Tableau"],
    longDescription: "Real Estate client: led team of 7 to build data-driven valuations for Zillow live listings using NLTK and sentiment analysis. EdTech platform: identified a 20% revenue uplift opportunity by analyzing user perks and ad timing across 7000+ users.",
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
