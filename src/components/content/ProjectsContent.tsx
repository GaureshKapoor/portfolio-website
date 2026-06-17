import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Reveal, RevealItem } from "@/components/Reveal";

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

const ProjectMark = ({ slug, name }: { slug: string; name: string }) => {
  const [ok, setOk] = useState(true);
  const initials = name.replace(/\(.*\)/, "").trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
  return (
    <div className="w-10 h-10 rounded-md border border-border bg-card flex items-center justify-center overflow-hidden shrink-0">
      {ok ? (
        <img src={`/logos/${slug}.svg`} alt={name} className="w-full h-full object-contain p-1.5" onError={() => setOk(false)} />
      ) : (
        <span className="font-mono text-xs text-muted-foreground">{initials}</span>
      )}
    </div>
  );
};

const ProjectsContent = () => {
  const navigate = useNavigate();

  return (
    <Reveal className="space-y-12">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
        <p className="text-muted-foreground mt-2">Things I've built and contributed to, zero to one.</p>
      </RevealItem>

      <RevealItem>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <button
              key={p.slug}
              onClick={() => navigate(`/projects/${p.slug}`)}
              className="text-left p-5 rounded-lg border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="flex items-start gap-3">
                <ProjectMark slug={p.slug} name={p.name} />
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-foreground leading-snug">{p.name}</h3>
                  <p className="font-mono text-xs text-primary mt-0.5">{p.period}</p>
                </div>
              </div>
              <p className="text-[15px] text-foreground/80 leading-relaxed mt-4">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </RevealItem>
    </Reveal>
  );
};

export default ProjectsContent;
