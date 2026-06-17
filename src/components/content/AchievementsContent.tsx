import { ExternalLink } from "lucide-react";
import { Reveal, RevealItem } from "@/components/Reveal";

const honorsAndAwards = [
  {
    title: "2nd Place, Cross Campus Innovation Challenge (Gen AI Track)",
    org: "UCLA Anderson, Easton Technology Center",
    date: "Apr 2025",
    detail: "For Uphealth (now Wist.health), an AI wellness platform with a psychotherapy-trained assistant. $10,000 grant.",
  },
  {
    title: "Semi-Finalist, Knapp Venture Competition (Consumer Software)",
    org: "UCLA Anderson, Price Center",
    date: "Apr 2025",
    detail: "For Nomadist.",
  },
  {
    title: "2nd Place, FBRC.ai x Luma AI Hackathon (Scene Control)",
    org: "FBRC.ai",
    date: "Feb 2025",
    detail: "For FrameForge.",
  },
  {
    title: "Dean's Honor List",
    org: "UCLA",
    date: "All 4 years, through Dec 2024",
    detail: null,
  },
  {
    title: "William F. Sharpe Fellow",
    org: "UCLA Alumni Association",
    date: "May 2023",
    detail: "Top 1% of UCLA business and tech undergrads.",
  },
  {
    title: "UC Investments Academy Fellow",
    org: "University of California",
    date: "2023 - 2025",
    detail: null,
  },
  {
    title: "Start-Up Nation Mentorship Fellow",
    org: "World Jewish Congress",
    date: "2022 - 2023",
    detail: "Excellence in Student Leadership.",
  },
  {
    title: "1st Place, Young Tech Professionals Bootcamp",
    org: "Innovate@UCLA",
    date: "Jun 2022",
    detail: "For UBUN2.",
  },
  {
    title: "Earlier Honors (High School)",
    org: null,
    date: null,
    detail:
      "Queen's Commonwealth Essay Competition (Bronze G12, Gold G11, Silver G10); tGELF Youth Leader & Innovation Competition Semi-Finalist; Dhruv Arora Memorial Scholarship; M.S. Bedi Memorial Award (Best Student, Science Stream); ANCQ High Distinction; Prize for Academic Excellence (6 consecutive years).",
  },
];

const certifications = [
  {
    title: "Databricks Certified: Generative AI Engineer Associate",
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
    org: "UCLA Undergraduate Business Society",
    date: "Mar 2023",
    link: null,
  },
  {
    title: "Machine Learning (Stanford University)",
    org: "Coursera",
    date: "Aug 2019",
    link: "https://coursera.org/verify/49Q4XB7QVXDS",
  },
];

const testScores = "SAT 1540/1600 (EBRW 750, Math 790) · TOEFL iBT 117/120 · AP Calculus 5/5 · AP Physics C: Mechanics 5/5 · CBSE Class XII 98.2% · CBSE Class X 98.4%";

const AchievementsContent = () => {
  return (
    <Reveal className="space-y-12 max-w-3xl">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Achievements</h2>
        <p className="text-muted-foreground mt-2 text-[15px]">Awards, honors, certifications, and recognition along the way.</p>
      </RevealItem>

      <RevealItem>
        <p className="font-mono text-sm text-muted-foreground mb-4">
          <span className="text-primary"># </span>Honors &amp; Awards
        </p>
        <div className="flex flex-col gap-3">
          {honorsAndAwards.map((a) => (
            <div key={a.title} className="flex gap-3 rounded-lg border border-border bg-card p-4">
              <span className="mt-[9px] h-1 w-1 rounded-full bg-primary shrink-0" />
              <div className="min-w-0">
                <h3 className="font-medium text-foreground leading-snug text-[15px]">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {a.org && <span>{a.org}</span>}
                  {a.org && a.date && <span> · </span>}
                  {a.date && <span>{a.date}</span>}
                </p>
                {a.detail && (
                  <p className="text-sm text-muted-foreground mt-1">{a.detail}</p>
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
        <div className="flex flex-col gap-3">
          {certifications.map((c) => (
            <div key={c.title} className="flex gap-3 rounded-lg border border-border bg-card p-4">
              <span className="mt-[9px] h-1 w-1 rounded-full bg-primary shrink-0" />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="font-medium text-foreground leading-snug text-[15px]">{c.title}</h3>
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary inline-flex items-center gap-0.5 text-sm hover:underline"
                    >
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
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
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-[15px] text-muted-foreground leading-relaxed">{testScores}</p>
        </div>
      </RevealItem>
    </Reveal>
  );
};

export default AchievementsContent;
