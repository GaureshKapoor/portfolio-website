import { Award } from "lucide-react";
import { Reveal, RevealItem } from "@/components/Reveal";

const honors = [
  "Dean's Honor List (all 4 years)",
  "William F. Sharpe Fellow",
  "Start-Up Nation Fellow",
  "UC Investments Academy Fellow",
];

const activities = [
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
    "Math Statistics & Probability (100A/B)",
    "Linear Models (100C)",
    "Statistical Models & Data Mining (101C)",
    "Design & Analysis of Experiments (101B)",
    "Data Analysis & Regression (101A)",
    "Computation & Optimization (102B)",
    "Computational Statistics with R (102A)",
    "Monte Carlo Methods (102C)",
    "Statistical Consulting Capstone (140XP/141XP)",
  ],
  "CS & Math": [
    "Intro CS in C++ (CS 31)",
    "Data Structures & Algorithms (CS 32)",
    "Linear Algebra (MATH 33A)",
    "Multivariable Calculus (MATH 32A/B)",
    "Single-variable Calculus (MATH 31A/B)",
  ],
  "Economics & Finance": [
    "Advanced Econometrics (143)",
    "Econometrics (103)",
    "Data Science for Economists (104/4L)",
    "Finance (106F)",
    "Investments (106V)",
    "Money & Banking (160)",
    "Micro/Macro Theory (101/102)",
  ],
  Business: [
    "Foundations of Business & Entrepreneurship (MGMT 159)",
    "Principles of Accounting (1A/1B)",
    "Personal Financial Health (168)",
    "Business & Social Policy Writing (ENGCOMP 131B)",
  ],
};

const stats = [
  { value: "3.8 / 4.0", label: "GPA" },
  { value: "Double Major", label: "Degree Type" },
  { value: "Sep 2021 - Jun 2025", label: "Dates" },
  { value: "SAT 1540", label: "Score" },
];

const EducationContent = () => {
  return (
    <Reveal className="space-y-12">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Education</h2>
        <p className="text-muted-foreground mt-2">
          Academic foundation across data science, statistics, economics, and business.
        </p>
      </RevealItem>

      <RevealItem>
        <div className="rounded-lg border border-border bg-card p-6 border-l-4 border-l-primary">
          <div className="mb-5">
            <h3 className="font-display text-xl font-bold text-foreground">
              University of California, Los Angeles
            </h3>
            <p className="text-muted-foreground text-sm mt-0.5">Los Angeles, CA</p>
            <p className="text-primary font-medium mt-2">
              B.S. Statistics &amp; Data Science and B.A. Business Economics
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-md bg-secondary px-3 py-1.5 flex flex-col items-start"
              >
                <span className="font-semibold text-foreground text-sm leading-tight">{s.value}</span>
                <span className="text-xs text-muted-foreground mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="mb-5">
            <p className="font-mono text-sm text-muted-foreground mb-2">
              <span className="text-primary"># </span>Honors
            </p>
            <div className="flex flex-wrap gap-2">
              {honors.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-sm rounded-md bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  <Award className="w-3 h-3 text-primary flex-shrink-0" />
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-sm text-muted-foreground mb-2">
              <span className="text-primary"># </span>Activities
            </p>
            <div className="flex flex-wrap gap-2">
              {activities.map((a) => (
                <span
                  key={a}
                  className="px-2 py-0.5 text-xs rounded-md bg-secondary/60 text-muted-foreground border border-border"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </RevealItem>

      <RevealItem>
        <div className="space-y-6">
          {Object.entries(coursework).map(([group, courses]) => (
            <div key={group}>
              <p className="font-mono text-sm text-muted-foreground mb-3">
                <span className="text-primary"># </span>{group}
              </p>
              <div className="flex flex-wrap gap-2">
                {courses.map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-1 text-sm rounded-md bg-secondary text-secondary-foreground border border-border hover:border-primary/40 transition-colors"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RevealItem>

      <RevealItem>
        <div className="rounded-lg border border-border bg-card p-4 opacity-80">
          <h3 className="font-display text-base font-semibold text-foreground">
            Springdales School, Dhaula Kuan
          </h3>
          <p className="text-muted-foreground text-sm mt-0.5">New Delhi · 2015 - 2021</p>
          <p className="text-sm text-muted-foreground mt-1">
            CBSE: 98.2% (XII), 98.4% (X)
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            School Topper grades 9 to 12, School Prefect &amp; Student Council, House Captain Peace
            House, Executive Head SPEX Computers Club.
          </p>
        </div>
      </RevealItem>
    </Reveal>
  );
};

export default EducationContent;
