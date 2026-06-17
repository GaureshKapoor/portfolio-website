import { useState } from "react";
import { Reveal, RevealItem } from "@/components/Reveal";

const experiences = [
  {
    company: "PwC",
    logo: "/logos/pwc.svg",
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
    logo: "/logos/zeta.svg",
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
    logo: "/logos/clear.svg",
    role: "Product Strategy & Analytics — FinTech SaaS Products",
    period: "Jan – Jun 2024",
    location: "New Delhi, India",
    bullets: [
      "Partnered with Business Ops to modernize and simplify web app UI/UX, boosting net customers acquired by ~15%",
      "Built a Python NLP model to extract tax data from images and PDFs with 68% accuracy across Clear's 130M-user platform",
    ],
  },
  {
    company: "Zeta Global",
    logo: "/logos/zeta.svg",
    role: "Data Science & Analytics Intern — GTM Analytics",
    period: "Jun – Aug 2023",
    location: "New York, NY",
    bullets: [
      "Collaborated with NYC and Prague teams on GTM ad campaigns, analyzing 50M+ garment sales records in Python/SQL to model purchasing behavior, driving changes that improved monthly P&L by 8%",
    ],
  },
];

const CompanyMark = ({ src, name }: { src: string; name: string }) => {
  const [ok, setOk] = useState(true);
  const initials = name.replace(/\(.*\)/, "").trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
  return (
    <div className="w-10 h-10 rounded-md border border-border bg-card flex items-center justify-center overflow-hidden shrink-0">
      {ok ? (
        <img src={src} alt={name} className="w-full h-full object-contain p-1.5" onError={() => setOk(false)} />
      ) : (
        <span className="font-mono text-xs text-muted-foreground">{initials}</span>
      )}
    </div>
  );
};

const ExperienceContent = () => {
  return (
    <Reveal className="space-y-12">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
        <p className="text-muted-foreground mt-2">A lineage of building across AI, product, and data.</p>
      </RevealItem>

      <div className="relative pl-7 sm:pl-8">
        <div className="absolute left-[6px] sm:left-[7px] top-1.5 bottom-1.5 w-px bg-gradient-to-b from-primary/70 via-primary/25 to-transparent" />
        <div className="space-y-11">
          {experiences.map((exp, i) => (
            <RevealItem key={i} className="relative">
              <span className="absolute -left-[26px] sm:-left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <p className="font-mono text-xs text-primary mb-2.5">{exp.period}</p>
              <div className="flex items-start gap-3">
                <CompanyMark src={exp.logo} name={exp.company} />
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-foreground leading-snug">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{exp.company} · {exp.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-[15px] text-foreground/80 leading-relaxed">
                    <span className="mt-[9px] h-1 w-1 rounded-full bg-primary/70 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default ExperienceContent;
