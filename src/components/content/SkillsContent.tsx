import { ArrowRight } from "lucide-react";
import { Reveal, RevealItem } from "@/components/Reveal";

const skillCategories = [
  {
    label: "AI / ML",
    items: [
      "LLMs & Agentic Systems",
      "LangChain",
      "RLHF",
      "NLP",
      "Neural Networks",
      "Computer Vision (OpenCV)",
      "Time Series",
    ],
  },
  {
    label: "Programming",
    items: [
      "Python (PyTorch, TensorFlow, Pandas, Scikit-learn)",
      "SQL",
      "TypeScript",
      "JavaScript",
      "Swift (iOS)",
      "R",
      "C++",
    ],
  },
  {
    label: "Backend & Infra",
    items: [
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Azure",
      "AWS",
      "GCP",
      "GitHub Actions",
      "Docker",
      "Vercel",
    ],
  },
  {
    label: "Developer Tools",
    items: [
      "React/Next.js",
      "Expo (React Native)",
      "Jupyter",
      "Stripe",
      "Sentry",
      "CodeRabbit",
      "Git/GitHub",
      "macOS/Linux",
    ],
  },
  {
    label: "Product & Analytics",
    items: [
      "A/B Testing",
      "Databricks",
      "Tableau",
      "Excel",
      "Linear",
      "JIRA",
      "PostHog",
      "Openrouter",
      "Hugging Face",
    ],
  },
];

const buildStages = [
  {
    label: "Think / Spec",
    tools: ["ChatGPT", "Claude"],
  },
  {
    label: "Design & Scaffold",
    tools: ["Lovable", "Cursor", "Warp", "GitHub", "Claude Code / Codex", "CodeRabbit"],
  },
  {
    label: "Build (frontend)",
    tools: ["React", "Vite / Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Expo + React Native", "Swift"],
  },
  {
    label: "Build (backend & AI)",
    tools: ["Supabase", "Openrouter", "Vercel"],
  },
  {
    label: "Ship & Run",
    tools: ["Stripe", "PostHog", "Sentry", "Mailchimp"],
  },
];

const Chip = ({ label }: { label: string }) => (
  <span className="px-2.5 py-1 text-sm rounded-md bg-secondary text-secondary-foreground border border-border transition-colors hover:border-primary/40 hover:text-foreground">
    {label}
  </span>
);

const SkillsContent = () => {
  return (
    <Reveal className="space-y-12">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Skills</h2>
        <p className="text-muted-foreground mt-2">The stack I build with - across AI, product, and data.</p>
      </RevealItem>

      {skillCategories.map((cat) => (
        <RevealItem key={cat.label}>
          <h3 className="font-mono text-sm text-muted-foreground">
            <span className="text-primary"># </span>{cat.label}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <Chip key={item} label={item} />
            ))}
          </div>
        </RevealItem>
      ))}

      <RevealItem>
        <div className="border-t border-border" />
      </RevealItem>

      <RevealItem>
        <h3 className="font-mono text-sm text-muted-foreground">
          <span className="text-primary"># </span>The build journey
        </h3>
        <p className="text-muted-foreground mt-1 text-sm">How I actually move from idea to shipped.</p>

        <div className="mt-6 space-y-0">
          {buildStages.map((stage, i) => (
            <div key={stage.label}>
              <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 py-4">
                <span className="font-mono text-xs text-muted-foreground w-36 shrink-0">{stage.label}</span>
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
                  {stage.tools.map((tool, j) => (
                    <div key={tool} className="flex items-center gap-x-1.5">
                      <Chip label={tool} />
                      {j < stage.tools.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-primary/50 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {i < buildStages.length - 1 && (
                <div className="border-t border-border" />
              )}
            </div>
          ))}
        </div>
      </RevealItem>
    </Reveal>
  );
};

export default SkillsContent;
