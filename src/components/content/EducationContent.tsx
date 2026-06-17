import { Reveal, RevealItem } from "@/components/Reveal";

const honors = ["Dean's Honor List (2022–2025)", "William F. Sharpe Fellow", "Start-Up Nation Fellow"];

const EducationContent = () => {
  return (
    <Reveal className="space-y-12">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Education</h2>
        <p className="text-muted-foreground mt-2">Where I studied and what I focused on.</p>
      </RevealItem>

      <RevealItem>
        <h3 className="font-display text-lg font-semibold text-foreground">University of California, Los Angeles</h3>
        <p className="text-primary font-medium mt-1">B.S. Statistics &amp; Data Science + B.A. Business Economics</p>
        <p className="font-mono text-xs text-muted-foreground mt-2">Sep 2021 – Jun 2025 · GPA 3.8 / 4.0</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {honors.map((h) => (
            <span
              key={h}
              className="px-2.5 py-1 text-sm rounded-md bg-secondary text-secondary-foreground border border-border transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {h}
            </span>
          ))}
        </div>
      </RevealItem>

      <RevealItem>
        <h3 className="font-mono text-sm text-muted-foreground">
          <span className="text-primary"># </span>Relevant Coursework
        </h3>
        <p className="mt-3 text-[15px] text-muted-foreground">Coursework coming soon.</p>
      </RevealItem>
    </Reveal>
  );
};

export default EducationContent;
