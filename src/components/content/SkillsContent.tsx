import { Reveal, RevealItem } from "@/components/Reveal";

const skillCategories = [
  { label: "AI / ML", items: ["LLMs & Agentic Systems", "LangChain", "RLHF", "NLP", "Neural Networks", "Computer Vision (OpenCV)", "Time Series"] },
  { label: "Programming", items: ["Python (PyTorch, TensorFlow, Pandas, Scikit-learn)", "SQL", "TypeScript", "JavaScript", "Swift (iOS)", "R", "C++"] },
  { label: "Backend & Infra", items: ["FastAPI", "PostgreSQL", "MongoDB", "Supabase", "Azure", "AWS", "GCP", "GitHub Actions", "Docker", "Vercel"] },
  { label: "Dev Tools", items: ["React/Next.js", "Expo (React Native)", "Jupyter", "Stripe", "Sentry", "CodeRabbit", "Git/GitHub"] },
  { label: "Product & Analytics", items: ["A/B Testing", "Databricks", "Tableau", "Linear", "JIRA", "PostHog", "Openrouter", "Hugging Face"] },
];

const SkillsContent = () => {
  return (
    <Reveal className="space-y-12">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Skills</h2>
        <p className="text-muted-foreground mt-2">The stack I build with — across AI, product, and data.</p>
      </RevealItem>

      {skillCategories.map((cat) => (
        <RevealItem key={cat.label}>
          <h3 className="font-mono text-sm text-muted-foreground">
            <span className="text-primary"># </span>{cat.label}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 text-sm rounded-md bg-secondary text-secondary-foreground border border-border transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </RevealItem>
      ))}
    </Reveal>
  );
};

export default SkillsContent;
