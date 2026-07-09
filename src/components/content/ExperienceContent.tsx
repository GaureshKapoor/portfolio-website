import { useState, useRef, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Reveal, RevealItem } from "@/components/Reveal";

type Experience = {
  company: string;
  logo?: string;
  link?: string;
  role: string;
  period: string;
  location: string;
  descriptor: string;
  bullets?: string[];
};

const primary: Experience[] = [
  {
    company: "PwC",
    logo: "/logos/pwc.png",
    link: "https://www.pwc.com",
    role: "Experienced Associate",
    period: "Jun 2026 – Present",
    location: "San Francisco Bay Area",
    descriptor:
      "A global professional-services network. Relocated to the Bay Area and geared up for more, driving AI-native product development inside the Technology & Data practice.",
  },
  {
    company: "PwC",
    logo: "/logos/pwc.png",
    link: "https://www.pwc.com",
    role: "Associate, AI & Data Solutions",
    period: "Jun 2025 – Jun 2026",
    location: "Los Angeles, CA",
    descriptor:
      "Built AI-native products and delivery systems across M&A tech diligence and enterprise analytics, partnering directly with Fortune 500 and PE-backed clients.",
    bullets: [
      "Engineered and deployed an LLM-powered client delivery platform (React, LangChain, Anthropic API, Azure/AWS), cutting deliverable production from ~8 hours to 45 minutes via reusable agentic workflows.",
      "Designed AI-driven customer analytics dashboards on Databricks Delta Lake pipelines with LLM-based parsing for a $100B+ Financial Services client, reducing manual synthesis by 60% across 100K+ customer records.",
      "Built a financial carveout engine (PyTorch, SQL, OCR pipelines) to extract and reconcile data across 500+ legal/financial docs, supporting 3 PE diligence deals totaling $800M+ and cutting manual extraction by ~70%.",
      "Drove AI adoption across Deals by embedding AI-native SOPs, lifting team throughput ~200% across 15 members.",
    ],
  },
  {
    company: "Wist.health",
    logo: "/logos/wist.png",
    link: "https://www.wist.health",
    role: "Product & Strategy Lead",
    period: "Jan 2025 – Sep 2025",
    location: "Los Angeles, CA",
    descriptor:
      "B2B mental-health AI built under the Larta Heal.LA 2025 accelerator. I owned Product, Operations, Data, GTM, and Partnerships. Full build details live on the Projects page.",
  },
  {
    company: "Zeta Global",
    logo: "/logos/zeta.png",
    link: "https://www.zetaglobal.com",
    role: "Generative AI Product Intern",
    period: "Jun 2024 – Aug 2024",
    location: "San Francisco Bay Area",
    descriptor:
      "An AI-powered marketing-technology company using data and identity to personalize customer experiences at scale. On the AI Agents & Zeta Opportunity Engine team.",
    bullets: [
      "Automated a GPT feedback system with RLHF, improving AI agent response accuracy by 10% across client BI workflows.",
      "Built a real-time retrieval interface between GenAI agents and LLM systems, cutting team debugging time by 25%.",
    ],
  },
  {
    company: "Zeta Global",
    logo: "/logos/zeta.png",
    link: "https://www.zetaglobal.com",
    role: "Data Science & Analytics Intern",
    period: "Jun 2023 – Aug 2023",
    location: "New York, NY",
    descriptor:
      "GTM Analytics team, modeling customer behavior to drive product and operational decisions across global campaigns.",
    bullets: [
      "Partnered with NYC and Prague teams on GTM ad campaigns, modeling 50M+ garment-sales records in Python/SQL to drive product and operational changes that improved monthly P&L by 8%.",
    ],
  },
  {
    company: "Clear (from ClearTax)",
    logo: "/logos/clear.png",
    link: "https://www.clear.in",
    role: "Product Strategy & Analytics",
    period: "Jan 2024 – Jun 2024",
    location: "New Delhi, India · Remote",
    descriptor:
      "India's leading fintech SaaS platform for tax, invoicing, and compliance, serving a 130M+ user base.",
    bullets: [
      "Modernized and simplified the web app UI/UX with the Business Ops team, boosting net customers acquired by ~15%.",
      "Built a Python NLP model to extract tax data from images and PDFs at 68% accuracy across Clear's 130M-user platform.",
    ],
  },
];

const trajectory: Experience[] = [
  {
    company: "Atar Capital",
    logo: "/logos/atar.png",
    link: "https://www.atarcapital.com",
    role: "Business Intelligence Analyst",
    period: "Oct 2023 – Mar 2024",
    location: "Los Angeles, CA",
    descriptor: "A lower-middle-market private equity firm. Portfolio analytics across the acquisition pipeline.",
  },
  {
    company: "Mobalytics",
    logo: "/logos/mobalytics.png",
    link: "https://mobalytics.gg",
    role: "Strategy Analytics Intern",
    period: "Jun 2023 – Aug 2023",
    location: "Los Angeles, CA · Remote",
    descriptor: "A gaming-performance platform. Competitive-gaming analytics and market-expansion research.",
  },
  {
    company: "California NanoSystems Institute (UCLA)",
    logo: "/logos/cnsi.png",
    link: "https://cnsi.ucla.edu",
    role: "Applied Product Analyst",
    period: "Jan 2022 – Jun 2022",
    location: "Los Angeles, CA",
    descriptor: "UCLA's interdisciplinary nanoscience institute. R&D analytics and simulation modeling (MATLAB/LabVIEW optoelectronics).",
  },
  {
    company: "GlobalHunt",
    logo: "/logos/globalhunt.png",
    link: "https://www.globalhunt.in",
    role: "Data Science Intern",
    period: "Jun 2021 – Aug 2021",
    location: "New Delhi, India",
    descriptor: "An India-based executive-search and recruitment firm. Data solutions and recruitment analytics dashboards.",
  },
];

const leadership = [
  { role: "Co-Founder & External VP", org: "Bruin Finance Society", link: "https://bruinfinancesociety.org/", period: "Jan 2023 – Jun 2024", note: "Founded and scaled UCLA's premier undergrad business and finance org to 1,500+ members." },
  { role: "Consulting Lead", org: "DataRes at UCLA", link: "https://ucladatares.com/", period: "Sep 2021 – Jun 2024", note: "Pro-bono data consulting for local businesses (Hellosaurus, EpiData, HomeDescription)." },
  { role: "Vice President", org: "Google Developer Student Clubs (UCLA)", link: "https://gdg.community.dev/gdg-on-campus-university-of-california-los-angeles-los-angeles-united-states/", period: "Sep 2022 – Mar 2024", note: "Building products with Google technologies; led an 8-person board." },
  { role: "Workshops Director", org: "UCLA Statistics Club", link: "https://statisticsucla.com/", period: "Sep 2021 – Aug 2023", note: "Technical workshops (Python, R, SQL) for 1,000+ students." },
];

const CompanyMark = ({ src, name }: { src?: string; name: string }) => {
  const [ok, setOk] = useState(Boolean(src));
  const initials = name.replace(/\(.*\)/, "").replace(/[^A-Za-z\s]/g, "").trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
  return (
    <div className={`w-10 h-10 rounded-md border border-border flex items-center justify-center overflow-hidden shrink-0 ${ok && src ? "bg-white" : "bg-card"}`}>
      {ok && src ? (
        <img src={src} alt={name} className="w-full h-full object-contain p-1" onError={() => setOk(false)} />
      ) : (
        <span className="font-mono text-xs text-muted-foreground">{initials}</span>
      )}
    </div>
  );
};

const OrgLine = ({ exp }: { exp: Experience }) => (
  <p className="text-sm text-muted-foreground mt-0.5 flex items-center gap-1.5 flex-wrap">
    <span className="text-foreground/90">{exp.company}</span>
    {exp.link && (
      <a
        href={exp.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${exp.company} website`}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    )}
    <span className="text-muted-foreground/60">·</span>
    <span>{exp.location}</span>
  </p>
);

const TimelineEntry = ({
  exp,
  condensed,
  containerRef,
  onActive,
}: {
  exp: Experience;
  condensed?: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
  onActive: (top: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const active = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (active && nodeRef.current && containerRef.current) {
      const top =
        nodeRef.current.getBoundingClientRect().top -
        containerRef.current.getBoundingClientRect().top +
        6;
      onActive(top);
    }
  }, [active]);
  return (
  <RevealItem className="group relative">
    <span
      ref={nodeRef}
      className={`absolute -left-[27px] sm:-left-[30px] top-1.5 h-3 w-3 rounded-full border-2 bg-background transition-all duration-300 ${
        active
          ? "border-primary scale-[1.6] shadow-[0_0_10px_2px_hsl(var(--primary)/0.6)]"
          : "border-primary/50 group-hover:scale-125"
      }`}
    />
    <div ref={ref}>
    <p className={`font-mono text-xs mb-2.5 transition-colors ${active ? "text-primary" : "text-primary/70"}`}>{exp.period}</p>
    <div className="flex items-start gap-3">
      <CompanyMark src={exp.logo} name={exp.company} />
      <div className="min-w-0">
        <h3 className={`font-display font-semibold text-foreground leading-snug ${condensed ? "text-base" : "text-lg"}`}>
          {exp.role}
        </h3>
        <OrgLine exp={exp} />
      </div>
    </div>
    <p className="mt-3 text-sm text-muted-foreground italic leading-relaxed">{exp.descriptor}</p>
    {exp.bullets && (
      <ul className="mt-3 space-y-2.5">
        {exp.bullets.map((b, j) => (
          <li key={j} className="flex gap-3 text-[15px] text-foreground/80 leading-relaxed">
            <span className="mt-[9px] h-1 w-1 rounded-full bg-primary/70 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    )}
    </div>
  </RevealItem>
  );
};

const ExperienceContent = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeTop, setActiveTop] = useState(0);
  return (
    <Reveal className="space-y-12">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Experiences</h2>
        <p className="text-muted-foreground mt-2">A lineage of building across AI, product, and data.</p>
      </RevealItem>

      <div ref={timelineRef} className="relative pl-7 sm:pl-8">
        <div className="absolute left-[6px] sm:left-[7px] top-1.5 bottom-1.5 w-px bg-border" />
        <motion.div
          aria-hidden="true"
          className="absolute left-[6px] sm:left-[7px] top-1.5 w-px bg-primary"
          animate={{ height: Math.max(0, activeTop - 6) }}
          transition={{ type: "spring", stiffness: 120, damping: 24 }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute left-[6.5px] sm:left-[7.5px] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-[6px]"
          animate={{ top: activeTop }}
          transition={{ type: "spring", stiffness: 120, damping: 24 }}
        />
        <div className="space-y-11">
          {primary.map((exp, i) => (
            <TimelineEntry key={`p-${i}`} exp={exp} containerRef={timelineRef} onActive={setActiveTop} />
          ))}

          {trajectory.map((exp, i) => (
            <TimelineEntry key={`t-${i}`} exp={exp} condensed containerRef={timelineRef} onActive={setActiveTop} />
          ))}
        </div>
      </div>

      <RevealItem>
        <h3 className="font-mono text-sm text-muted-foreground mb-4">
          <span className="text-primary"># </span>Leadership
        </h3>
        <ul className="space-y-3">
          {leadership.map((l) => (
            <li key={l.org} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
              <span className="font-mono text-xs text-primary sm:w-36 sm:shrink-0">{l.period}</span>
              <span className="text-[15px] text-foreground/85">
                <span className="font-medium text-foreground">{l.role}</span>,{" "}
                <a
                  href={l.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-foreground hover:text-primary underline decoration-primary/30 underline-offset-2 transition-colors"
                >
                  {l.org}
                  <ExternalLink className="w-3 h-3" />
                </a>
                . {l.note}
              </span>
            </li>
          ))}
        </ul>
      </RevealItem>
    </Reveal>
  );
};

export default ExperienceContent;
