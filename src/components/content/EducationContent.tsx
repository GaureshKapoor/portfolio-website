import { GraduationCap } from "lucide-react";
import { Reveal, RevealItem } from "@/components/Reveal";

const uclaHonors = [
  "William F. Sharpe Fellow (top 1% of UCLA Business/Tech undergraduates)",
  "Anderson Innovation Challenge, Gen AI Track, 2025 - 2nd Place ($10,000 grant), Wist.health",
  "Knapp Venture Competition, Consumer Software Track, 2025 - Semi-Finalist, Nomadist",
  "FBRC.ai × Luma AI Creative Control Hackathon 2025 - 2nd Place, FrameForge",
  "Innovate@UCLA Young Tech Professionals Challenge 2022 - 1st Place, UBUN2",
  "Start-Up Nation Mentorship Fellow 2022-23 (Excellence in Student Leadership)",
  "UBS Excel & Financial Modeling Workshop 2023",
  "UC Investments Academy Fellow 2023-2025",
  "Dean's Honor List, all 4 years",
];

const uclaActivities = [
  "Pi Kappa Alpha",
  "Bruin Finance Society",
  "DataRes Consulting",
  "Google Developer Student Clubs",
  "Statistics & Data Science Club",
  "CNSI Research",
  "DevX",
  "Bruin Entrepreneurs",
];

const coursework = {
  "Statistics & ML": [
    "Mathematical Statistics & Probability",
    "Linear Models",
    "Statistical Models & Data Mining",
    "Design & Analysis of Experiments",
    "Computational Statistics with R",
    "Statistical Consulting Capstone",
  ],
  "CS & Math": [
    "Data Structures & Algorithms",
    "Intro to Computer Science (C++)",
    "Linear Algebra",
    "Multivariable Calculus",
  ],
  "Economics & Finance": [
    "Advanced Econometrics",
    "Econometrics",
    "Data Science for Economists",
    "Investments",
    "Money & Banking",
  ],
  Business: [
    "Foundations of Business & Entrepreneurship",
    "Principles of Accounting",
    "Personal Financial Health",
  ],
};

const uclaStats = [
  { value: "3.8 / 4.0", label: "GPA" },
  { value: "Double Major", label: "Degree" },
  { value: "Sep 2021 – Jun 2025", label: "Dates" },
  { value: "1540", label: "SAT" },
];

const springdalesAccolades = [
  "School Topper in classes 9th, 10th, 11th, and 12th.",
  "Secured 98.2% in Class XII Board Examinations and 98.4% in Class X Board Examinations.",
  "Academic Prize Winner for 6 consecutive years, scoring above 90%.",
];

const springdalesActivities = [
  "School Prefect, Student Council",
  "House Captain, Peace House",
  "Executive Head, SPEX Computers Club",
  "Executive Member, Pi Mathematics Club",
  "Executive Member, Youth Entrepreneurship Society",
];

const springdalesStats = [
  { value: "98.2%", label: "CBSE XII" },
  { value: "98.4%", label: "CBSE X" },
  { value: "2015 – 2021", label: "Dates" },
];

const SchoolLogo = ({ src, fallback }: { src?: string; fallback?: boolean }) => (
  <div className="w-12 h-12 rounded-md border border-border bg-white flex items-center justify-center overflow-hidden shrink-0">
    {fallback || !src ? (
      <GraduationCap className="w-6 h-6 text-muted-foreground" />
    ) : (
      <img src={src} alt="" className="w-full h-full object-contain p-1" />
    )}
  </div>
);

const StatToken = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-md bg-secondary px-3 py-1.5 flex flex-col items-start">
    <span className="font-semibold text-foreground text-sm leading-tight">{value}</span>
    <span className="text-xs text-muted-foreground mt-0.5">{label}</span>
  </div>
);

const Subhead = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-sm text-muted-foreground mb-2.5">
    <span className="text-primary"># </span>
    {children}
  </p>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((it) => (
      <li key={it} className="flex gap-3 text-[15px] text-foreground/85 leading-relaxed">
        <span className="mt-[9px] h-1 w-1 rounded-full bg-primary shrink-0" />
        <span>{it}</span>
      </li>
    ))}
  </ul>
);

const Chips = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((a) => (
      <span
        key={a}
        className="px-2.5 py-1 text-sm rounded-md bg-secondary text-secondary-foreground border border-border hover:border-primary/40 transition-colors"
      >
        {a}
      </span>
    ))}
  </div>
);

const CourseTile = ({ course }: { course: string }) => {
  const m = course.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  const name = m ? m[1] : course;
  const code = m ? m[2] : null;
  return (
    <div className="rounded-md border border-border bg-card px-3 py-2 hover:border-primary/40 transition-colors">
      <p className="text-sm text-foreground leading-snug">{name}</p>
      {code && <p className="font-mono text-[11px] text-primary mt-0.5">{code}</p>}
    </div>
  );
};

const node =
  "absolute -left-[27px] sm:-left-[30px] top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-primary bg-background shadow-[0_0_8px_1px_hsl(var(--primary)/0.5)]";

const EducationContent = () => {
  return (
    <Reveal className="space-y-10">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Education</h2>
        <p className="text-muted-foreground mt-2">
          Academic foundation across data science, statistics, economics, and business.
        </p>
      </RevealItem>

      <div className="relative pl-7 sm:pl-8 space-y-8">
        <div className="absolute left-[6px] sm:left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/35 to-primary/60" />

        {/* UCLA */}
        <RevealItem className="relative">
          <span className={node} />
          <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
            <div className="mb-5 flex items-start gap-4">
              <SchoolLogo src="/logos/ucla.png" />
              <div className="min-w-0">
                <h3 className="font-display text-xl font-bold text-foreground">
                  University of California, Los Angeles
                </h3>
                <p className="text-muted-foreground text-sm mt-0.5">Los Angeles, CA</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-primary font-medium">Bachelor of Science in Statistics &amp; Data Science</p>
                    <span className="font-mono text-xs text-muted-foreground shrink-0">(B.S.)</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-primary font-medium">Bachelor of Arts in Business Economics</p>
                    <span className="font-mono text-xs text-muted-foreground shrink-0">(B.A.)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {uclaStats.map((s) => (
                <StatToken key={s.label} value={s.value} label={s.label} />
              ))}
            </div>

            <div className="mb-6">
              <Subhead>Honors &amp; Awards</Subhead>
              <Bullets items={uclaHonors} />
            </div>

            <div>
              <Subhead>Activities</Subhead>
              <Chips items={uclaActivities} />
            </div>
          </div>
        </RevealItem>

        {/* Coursework */}
        <RevealItem>
          <Subhead>Relevant Coursework</Subhead>
          <div className="space-y-6">
            {Object.entries(coursework).map(([group, courses]) => (
              <div key={group}>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">{group}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {courses.map((c) => (
                    <CourseTile key={c} course={c} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealItem>

        {/* Springdales — same structure as UCLA */}
        <RevealItem className="relative">
          <span className={node} />
          <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
            <div className="mb-5 flex items-start gap-4">
              <SchoolLogo src="/logos/springdales.png" />
              <div className="min-w-0">
                <h3 className="font-display text-xl font-bold text-foreground">Springdales School, Dhaula Kuan</h3>
                <p className="text-muted-foreground text-sm mt-0.5">New Delhi, India</p>
                <p className="text-primary font-medium mt-2">CBSE Diploma</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Mathematics, English, Computer Science, Physics, Chemistry
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {springdalesStats.map((s) => (
                <StatToken key={s.label} value={s.value} label={s.label} />
              ))}
            </div>

            <div className="mb-6">
              <Subhead>Academic Accolades</Subhead>
              <Bullets items={springdalesAccolades} />
            </div>

            <div>
              <Subhead>Activities &amp; Societies</Subhead>
              <Chips items={springdalesActivities} />
            </div>
          </div>
        </RevealItem>
      </div>
    </Reveal>
  );
};

export default EducationContent;
