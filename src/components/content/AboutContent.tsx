import { Reveal, RevealItem } from "@/components/Reveal";
import ProfileAvatar from "@/components/ProfileAvatar";

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground font-medium underline decoration-primary/40 underline-offset-2 hover:decoration-primary hover:text-primary transition-colors"
  >
    {children}
  </a>
);

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
          <ProfileAvatar className="w-52 h-52 md:w-64 md:h-64" />
        </RevealItem>

        <div className="flex-1 min-w-0 space-y-10">
          <RevealItem>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="mt-4 space-y-4 text-[15px] text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm Gauresh 👋. Equal parts engineer and operator, I build AI products at the
                intersection of data and business, and love owning the full product lifecycle.
                I am curious, ambitious, constantly learning, and obsessed with building what's next.
              </p>
              <p>
                At <A href="https://www.pwc.com">PwC</A> Deals, I work within the Technology & Data
                practice, building production AI-native products, LLM platforms, agentic workflows,
                and data pipelines, plus automation across M&A tech diligence and enterprise
                analytics. My day-to-day spans AI strategy, agentic product development, data
                engineering, and on-prem client delivery, partnering directly with Fortune 500
                clients and PE-backed companies to solve complex operational and technical
                challenges and drive measurable business impact.
              </p>
              <p>
                Previously, I built GenAI products at <A href="https://www.zetaglobal.com">Zeta Global</A>{" "}
                and worked on FinTech product strategy at <A href="https://www.clear.in">Clear</A>.
                Outside of work, I build and ship full-stack AI products from zero to one, most
                recently <A href="https://joinvault.app">Vault</A>, an agentic AI app for ideation;{" "}
                <A href="https://ionava.com">Ionava</A>, an angel-backed fintech platform for health
                and wellness; and <A href="https://www.wist.health">Wist Health</A>, a mental-health
                AI app published on the App Store.
              </p>
              <p>
                I studied Statistics & Data Science and Business Economics at{" "}
                <A href="https://www.ucla.edu">UCLA</A>.
              </p>
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

          <RevealItem>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Always excited to connect and explore what's next in frontier AI, startups, product,
              and business!{" "}
              <a href="mailto:gaureshkapoor@gmail.com" className="text-primary hover:underline">
                gaureshkapoor@gmail.com
              </a>
            </p>
          </RevealItem>
        </div>
      </div>
    </Reveal>
  );
};

export default AboutContent;
