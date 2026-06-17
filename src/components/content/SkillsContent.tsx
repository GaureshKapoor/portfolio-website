import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealItem } from "@/components/Reveal";

// Skills mapped to icon filenames (undefined = text tile)
type Skill = {
  name: string;
  icon?: string;
};

const skillGroups: { label: string; skills: Skill[] }[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Swift", icon: "swift" },
      { name: "SQL" },
      { name: "R", icon: "r" },
      { name: "C++", icon: "cplusplus" },
    ],
  },
  {
    label: "Frontend & Mobile",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "shadcn/ui", icon: "shadcnui" },
      { name: "Vite", icon: "vite" },
      { name: "Expo", icon: "expo" },
    ],
  },
  {
    label: "Backend & Infrastructure",
    skills: [
      { name: "FastAPI", icon: "fastapi" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Supabase", icon: "supabase" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "AWS" },
      { name: "GCP" },
      { name: "Azure" },
    ],
  },
  {
    label: "ML & AI Tooling",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "Jupyter", icon: "jupyter" },
      { name: "Ollama", icon: "ollama" },
      { name: "OpenRouter", icon: "openrouter" },
      { name: "LLMs & Agents" },
      { name: "LangChain" },
      { name: "RLHF" },
      { name: "NLP" },
      { name: "Neural Networks" },
      { name: "Computer Vision" },
      { name: "Time Series" },
    ],
  },
  {
    label: "Product & Analytics",
    skills: [
      { name: "PostHog", icon: "posthog" },
      { name: "Stripe", icon: "stripe" },
      { name: "Sentry", icon: "sentry" },
      { name: "Linear", icon: "linear" },
      { name: "Jira", icon: "jira" },
      { name: "Databricks" },
      { name: "Tableau" },
      { name: "A/B Testing" },
      { name: "Excel" },
    ],
  },
];

// Build journey data
type BuildStage = {
  label: string;
  description: string;
  tools: { name: string; icon?: string }[];
};

const buildStages: BuildStage[] = [
  {
    label: "Think / Spec",
    description: "Define the problem and architecture",
    tools: [
      { name: "Claude", icon: "anthropic" },
      { name: "ChatGPT" },
    ],
  },
  {
    label: "Design & Scaffold",
    description: "Structure the codebase and UI foundation",
    tools: [
      { name: "Lovable" },
      { name: "Cursor" },
      { name: "Warp" },
      { name: "GitHub", icon: "github" },
      { name: "Claude Code", icon: "anthropic" },
      { name: "CodeRabbit" },
    ],
  },
  {
    label: "Build (Frontend)",
    description: "Ship UI, interactions, and client logic",
    tools: [
      { name: "React", icon: "react" },
      { name: "Vite / Next.js", icon: "vite" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "shadcn/ui", icon: "shadcnui" },
      { name: "Expo", icon: "expo" },
      { name: "Swift", icon: "swift" },
    ],
  },
  {
    label: "Build (Backend & AI)",
    description: "APIs, databases, and agentic layers",
    tools: [
      { name: "Supabase", icon: "supabase" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "OpenRouter", icon: "openrouter" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
  {
    label: "Ship & Run",
    description: "Payments, observability, and growth",
    tools: [
      { name: "Stripe", icon: "stripe" },
      { name: "PostHog", icon: "posthog" },
      { name: "Sentry", icon: "sentry" },
      { name: "Mailchimp", icon: "mailchimp" },
    ],
  },
];

// Dock magnification constants
const BASE_SIZE = 52;
const MAX_SIZE = 80;
const INFLUENCE_RADIUS = 120;

function DockTile({ skill, mouseX }: {
  skill: Skill;
  mouseX: React.MutableRefObject<number | null>;
}) {
  const tileRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const rawScale = useMotionValue(1);
  const scale = useSpring(rawScale, { stiffness: 350, damping: 28, mass: 0.6 });

  // Use RAF to update scale based on mouse position
  const updateScale = () => {
    if (!tileRef.current || mouseX.current === null) {
      rawScale.set(1);
      return;
    }
    const rect = tileRef.current.getBoundingClientRect();
    const tileCenterX = rect.left + rect.width / 2;
    const dist = Math.abs(mouseX.current - tileCenterX);
    if (dist > INFLUENCE_RADIUS) {
      rawScale.set(1);
    } else {
      const t = 1 - dist / INFLUENCE_RADIUS;
      const s = 1 + (MAX_SIZE / BASE_SIZE - 1) * t * t;
      rawScale.set(s);
    }
  };

  return (
    <div
      ref={tileRef}
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); rawScale.set(1); }}
      onMouseMove={updateScale}
    >
      {/* Label above tile */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
        transition={{ duration: 0.15 }}
        className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none z-10"
      >
        <span className="px-2 py-1 rounded-md bg-foreground text-background text-xs font-medium shadow-lg">
          {skill.name}
        </span>
      </motion.div>

      {/* Tile */}
      <motion.div
        style={{ scale, width: BASE_SIZE, height: BASE_SIZE }}
        className="flex items-center justify-center rounded-xl border border-border bg-card cursor-default select-none overflow-hidden shrink-0"
      >
        {skill.icon ? (
          <img
            src={`/skill-icons/${skill.icon}.svg`}
            alt={skill.name}
            className="w-7 h-7 invert dark:invert-0"
            draggable={false}
          />
        ) : (
          <span className="text-[10px] font-mono font-medium text-muted-foreground text-center leading-tight px-1.5">
            {skill.name}
          </span>
        )}
      </motion.div>
    </div>
  );
}

function SkillDock({ skills }: { skills: Skill[] }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.current = e.clientX;
  };
  const handleMouseLeave = () => {
    mouseX.current = null;
  };

  return (
    <div
      ref={rowRef}
      className="flex flex-wrap gap-3 pt-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {skills.map((skill) => (
        <DockTile
          key={skill.name}
          skill={skill}
          mouseX={mouseX}
        />
      ))}
    </div>
  );
}

function MiniChip({ name, icon }: { name: string; icon?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-secondary border border-border text-xs font-medium text-foreground">
      {icon && (
        <img
          src={`/skill-icons/${icon}.svg`}
          alt={name}
          className="w-3.5 h-3.5 invert dark:invert-0 shrink-0"
          draggable={false}
        />
      )}
      {name}
    </span>
  );
}

function BuildJourney() {
  return (
    <div className="mt-6 relative">
      {/* Vertical connector line */}
      <div className="absolute left-4 top-8 bottom-8 w-px bg-border hidden sm:block" />

      <div className="space-y-3">
        {buildStages.map((stage, i) => (
          <div key={stage.label} className="flex gap-4 sm:gap-6 items-start group">
            {/* Stage number bubble */}
            <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full border border-primary/40 bg-background flex items-center justify-center">
              <span className="text-[10px] font-mono font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
            </div>

            {/* Stage card */}
            <div className="flex-1 min-w-0 pb-3">
              <div className="rounded-xl border border-border bg-card p-4 transition-colors group-hover:border-primary/30">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                  <span className="font-mono text-sm font-semibold text-foreground">{stage.label}</span>
                  <span className="text-xs text-muted-foreground">{stage.description}</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                  {stage.tools.map((tool, j) => (
                    <div key={tool.name} className="flex items-center gap-2">
                      <MiniChip name={tool.name} icon={tool.icon} />
                      {j < stage.tools.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-primary/40 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SkillsContent = () => {
  return (
    <Reveal className="space-y-12">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Skills</h2>
        <p className="text-muted-foreground mt-2">The stack I build with - across AI, product, and data.</p>
      </RevealItem>

      {skillGroups.map((group) => (
        <RevealItem key={group.label}>
          <h3 className="font-mono text-sm text-muted-foreground">
            <span className="text-primary"># </span>{group.label}
          </h3>
          <SkillDock skills={group.skills} />
        </RevealItem>
      ))}

      <RevealItem>
        <div className="border-t border-border" />
      </RevealItem>

      <RevealItem>
        <h3 className="font-mono text-sm text-muted-foreground">
          <span className="text-primary"># </span>The build journey
        </h3>
        <p className="text-muted-foreground mt-1 text-sm">How I move from idea to shipped.</p>
        <BuildJourney />
      </RevealItem>
    </Reveal>
  );
};

export default SkillsContent;
