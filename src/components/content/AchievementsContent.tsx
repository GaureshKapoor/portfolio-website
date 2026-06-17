import { Trophy, Medal, Award, ExternalLink } from "lucide-react";
import { Reveal, RevealItem } from "@/components/Reveal";

const highlights = [
  {
    icon: Trophy,
    title: "2nd Place, Cross Campus Innovation Challenge (Gen AI Track)",
    context: "UCLA Anderson, Easton Technology Center. For Wist.health (psychotherapy-trained AI wellness assistant); $10,000 grant.",
    year: "Apr 2025",
  },
  {
    icon: Medal,
    title: "Semi-Finalist, Knapp Venture Competition (Consumer Software)",
    context: "UCLA Anderson, Price Center. For Nomadist.",
    year: "Apr 2025",
  },
  {
    icon: Award,
    title: "2nd Place, FBRC.ai x Luma AI Hackathon (Scene Control)",
    context: "FBRC.ai. For FrameForge.",
    year: "Feb 2025",
  },
];

const honorsAndAwards = [
  {
    title: "Dean's Honor List",
    detail: "UCLA -- all 4 years, through Dec 2024",
  },
  {
    title: "William F. Sharpe Fellow",
    detail: "UCLA Alumni Association -- top 1% UCLA business/tech undergrads, May 2023",
  },
  {
    title: "UC Investments Academy Fellow",
    detail: "University of California, 2023--2025",
  },
  {
    title: "Start-Up Nation Mentorship Fellow",
    detail: "World Jewish Congress, 2022--2023",
  },
  {
    title: "1st Place, Young Tech Professionals Bootcamp",
    detail: "Innovate@UCLA, Jun 2022. For UBUN2.",
  },
  {
    title: "Earlier Honors (High School)",
    detail:
      "Queen's Commonwealth Essay Competition (Bronze G12, Gold G11, Silver G10); tGELF Semi-Finalist; Dhruv Arora Memorial Scholarship; M.S. Bedi Memorial Award; ANCQ High Distinction; Prize for Academic Excellence (6 consecutive years).",
  },
];

const certifications = [
  {
    title: "Databricks Certified Generative AI Engineer Associate",
    org: "Databricks",
    date: "Sep 2025",
    link: null,
  },
  {
    title: "Generative AI with Large Language Models",
    org: "DeepLearning.AI",
    date: "Aug 2024",
    link: null,
  },
  {
    title: "LangChain for LLM Application Development",
    org: "DeepLearning.AI",
    date: "Jul 2024",
    link: null,
  },
  {
    title: "Building Systems with ChatGPT",
    org: "DeepLearning.AI",
    date: "Jun 2024",
    link: null,
  },
  {
    title: "UC Investments Fellow",
    org: "University of California",
    date: "Oct 2023",
    link: null,
  },
  {
    title: "Excel & Financial Modeling Workshop",
    org: "UCLA UBS",
    date: "Mar 2023",
    link: null,
  },
  {
    title: "Machine Learning, Stanford University",
    org: "Coursera",
    date: "Aug 2019",
    link: "https://coursera.org/verify/49Q4XB7QVXDS",
  },
];

const testScores = [
  { value: "1540", label: "SAT" },
  { value: "117", label: "TOEFL iBT" },
  { value: "5", label: "AP Calculus" },
  { value: "5", label: "AP Physics C" },
  { value: "98.2%", label: "CBSE XII" },
  { value: "98.4%", label: "CBSE X" },
];

const AchievementsContent = () => {
  return (
    <Reveal className="space-y-12 max-w-3xl">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Achievements</h2>
        <p className="text-muted-foreground mt-2 text-[15px]">Awards, honors, certifications, and recognition along the way.</p>
      </RevealItem>

      <RevealItem>
        <div className="grid sm:grid-cols-3 gap-4">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 hover:-translate-y-1 transition-all duration-200"
              >
                <Icon size={20} className="text-primary mb-3" />
                <h3 className="font-medium text-foreground text-[15px] leading-snug">{h.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{h.context}</p>
                <p className="font-mono text-xs text-primary mt-3">{h.year}</p>
              </div>
            );
          })}
        </div>
      </RevealItem>

      <RevealItem>
        <p className="font-mono text-sm text-muted-foreground mb-4">
          <span className="text-primary"># </span>Honors &amp; Awards
        </p>
        <div className="flex flex-col gap-2.5">
          {honorsAndAwards.map((a) => (
            <div key={a.title} className="flex gap-3 items-start">
              <span className="mt-[9px] h-1 w-1 rounded-full bg-primary shrink-0" />
              <div className="min-w-0">
                <span className="font-medium text-foreground text-[15px]">{a.title}</span>
                {a.detail && (
                  <span className="text-sm text-muted-foreground"> -- {a.detail}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </RevealItem>

      <RevealItem>
        <p className="font-mono text-sm text-muted-foreground mb-4">
          <span className="text-primary"># </span>Certifications
        </p>
        <div className="flex flex-col gap-2.5">
          {certifications.map((c) => (
            <div key={c.title} className="flex gap-3 items-start">
              <span className="mt-[9px] h-1 w-1 rounded-full bg-primary shrink-0" />
              <div className="min-w-0">
                <span className="font-medium text-foreground text-[15px]">{c.title}</span>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-flex items-center ml-1.5 hover:underline"
                    aria-label="Verify certificate"
                  >
                    <ExternalLink size={12} />
                  </a>
                )}
                <p className="text-sm text-muted-foreground mt-0.5">
                  {c.org} · {c.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </RevealItem>

      <RevealItem>
        <p className="font-mono text-sm text-muted-foreground mb-4">
          <span className="text-primary"># </span>Test Scores
        </p>
        <div className="flex flex-wrap gap-2">
          {testScores.map((s) => (
            <div
              key={s.label}
              className="rounded-md bg-secondary px-3 py-1.5 flex flex-col items-center min-w-[72px]"
            >
              <span className="font-bold text-foreground text-[15px] leading-tight">{s.value}</span>
              <span className="text-[11px] text-muted-foreground leading-tight">{s.label}</span>
            </div>
          ))}
        </div>
      </RevealItem>
    </Reveal>
  );
};

export default AchievementsContent;
