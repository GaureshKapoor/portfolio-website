import { Reveal, RevealItem } from "@/components/Reveal";

const achievements = [
  { title: "Dean's Honor List", desc: "UCLA, 2022–2025" },
  { title: "William F. Sharpe Fellow", desc: "Sharpe Fellowship — UCLA Anderson" },
  { title: "Start-Up Nation Fellow", desc: "Innovation and entrepreneurship fellowship" },
  { title: "$10K GenAI & Health Innovation Grant", desc: "Awarded for generative AI and health innovation research" },
  { title: "Innovate@UCLA Tech Challenge — 1st Place", desc: "First place at UCLA's flagship tech innovation competition" },
  { title: "FBRC.ai × Luma AI Hackathon — 2nd Place", desc: "Runner-up at the FBRC.ai × Luma AI hackathon" },
];

const AchievementsContent = () => {
  return (
    <Reveal className="space-y-12 max-w-3xl">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Achievements</h2>
        <p className="text-muted-foreground mt-2">Awards, honors, and recognition along the way.</p>
      </RevealItem>

      <RevealItem>
        <div className="grid sm:grid-cols-2 gap-3">
          {achievements.map((a) => (
            <div key={a.title} className="flex gap-3 rounded-lg border border-border bg-card p-4">
              <span className="mt-[9px] h-1 w-1 rounded-full bg-primary shrink-0" />
              <div className="min-w-0">
                <h3 className="font-medium text-foreground leading-snug">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealItem>
    </Reveal>
  );
};

export default AchievementsContent;
