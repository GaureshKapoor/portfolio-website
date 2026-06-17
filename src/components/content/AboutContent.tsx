import { Reveal, RevealItem } from "@/components/Reveal";
import ProfileAvatar from "@/components/ProfileAvatar";

const bio = [
  "I'm Gauresh — I build at the intersection of AI, data, product, and business. Equal parts engineer and operator: curious, ambitious, and obsessed with building what's next.",
  "At PwC Deals, I ship AI-native products, data systems, and automation tools across M&A tech diligence and enterprise analytics — architecting agentic workflows, developing AI-powered platforms, and shaping product direction directly with Fortune 500 and PE-backed clients. Outside of work, I build full-stack AI products from zero to one.",
];

const principles = [
  "Keep it simple, stupid.",
  "Lead with your heart, the head will follow.",
  "Chase the kick.",
];

const AboutContent = () => {
  return (
    <Reveal>
      <div className="flex flex-col sm:flex-row gap-8 md:gap-10">
        <RevealItem className="shrink-0">
          <ProfileAvatar className="w-36 h-36 md:w-44 md:h-44" />
        </RevealItem>

        <div className="flex-1 min-w-0 space-y-10">
          <RevealItem>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="mt-4 space-y-4 text-[15px] text-muted-foreground leading-relaxed">
              {bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </RevealItem>

          <RevealItem>
            <h3 className="font-mono text-sm text-muted-foreground">
              <span className="text-primary"># </span>Principles
            </h3>
            <ul className="mt-4 space-y-2.5">
              {principles.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] text-foreground/85">
                  <span className="mt-[9px] h-1 w-1 rounded-full bg-primary shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </RevealItem>
        </div>
      </div>
    </Reveal>
  );
};

export default AboutContent;
