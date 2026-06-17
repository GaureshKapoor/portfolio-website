import { Reveal, RevealItem } from "@/components/Reveal";

const interests = [
  "AI & smart tech",
  "adventure sports",
  "travel",
  "Bollywood music",
  "stand-up comedy",
  "fashion",
  "video games",
  "gym",
  "soccer",
];

const languages: { name: string; level: string }[] = [
  { name: "English", level: "native/bilingual" },
  { name: "Hindi", level: "native/bilingual" },
  { name: "French", level: "elementary" },
  { name: "Punjabi", level: "elementary" },
  { name: "Spanish", level: "elementary" },
];

const offTheClock: { label: string; text: string }[] = [
  {
    label: "Builds for fun",
    text: "I ship side projects on nights and weekends. Half my \"fun\" is a new repo.",
  },
  {
    label: "Gives back",
    text: "Pi Kappa Alpha philanthropy, LA Regional Food Bank, and earlier Tamanna Special School and Saakshar Mission literacy drives.",
  },
  {
    label: "Origin",
    text: "New Delhi to Los Angeles.",
  },
];

const Subhead = ({ label }: { label: string }) => (
  <h3 className="font-mono text-sm text-muted-foreground">
    <span className="text-primary"># </span>
    {label}
  </h3>
);

const FunFactsContent = () => {
  return (
    <Reveal className="space-y-12 max-w-3xl">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Fun Facts</h2>
        <p className="text-muted-foreground mt-2">A few things about me outside of work.</p>
      </RevealItem>

      <RevealItem>
        <Subhead label="Into" />
        <div className="mt-4 flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span
              key={interest}
              className="rounded-md border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
            >
              {interest}
            </span>
          ))}
        </div>
      </RevealItem>

      <RevealItem>
        <Subhead label="Languages" />
        <div className="mt-4 flex flex-wrap gap-2">
          {languages.map((lang) => (
            <span
              key={lang.name}
              className="rounded-md border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
            >
              {lang.name}
              <span className="ml-1.5 text-muted-foreground text-xs">{lang.level}</span>
            </span>
          ))}
        </div>
      </RevealItem>

      <RevealItem>
        <Subhead label="Off the clock" />
        <ul className="mt-4 space-y-3">
          {offTheClock.map((item) => (
            <li key={item.label} className="flex gap-3 text-[15px] text-foreground/85">
              <span className="mt-[9px] h-1 w-1 rounded-full bg-primary shrink-0" />
              <span>
                <span className="font-medium text-foreground">{item.label}:</span>{" "}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </RevealItem>
    </Reveal>
  );
};

export default FunFactsContent;
