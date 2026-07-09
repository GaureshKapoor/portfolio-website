import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import ProjectVisual from "@/components/ProjectVisuals";

export const projects = [
  {
    slug: "vault",
    name: "Vault",
    role: "Founder / Product Engineer",
    period: "Dec 2025 – Present",
    hook: "An AI-native platform for agentic ideation, task planning, and execution.",
    longDescription:
      "Vault turns raw ideas into structured, actionable execution flows, built to make capturing a thought and shipping it feel like one motion. I'm building it solo from zero to one: full-stack on Next.js, Supabase, and Vercel, owning every core system end to end, auth, data models, agent workflows, billing, analytics, and product UX. It's where my engineer-plus-operator thesis gets tested in real time: design the architecture, ship the product, run the loop.",
    stack: ["Next.js", "Supabase", "Vercel", "Stripe", "PostHog", "LLM / agent orchestration"],
    link: "https://joinvault.app",
  },
  {
    slug: "ionava",
    name: "Ionava",
    role: "Founding Engineer",
    period: "Sep 2025 – Present",
    hook: "A production fintech wellness platform pairing financial health with everyday well-being.",
    longDescription:
      "I launched Ionava as a full-stack production platform, owning the frontend architecture, backend services, data layers, and security. I built the stateful user flows and API integrations behind features like the Health Score and Wellness Wallet, translating financial-health planning into something a user actually returns to. Angel-backed and shipping.",
    stack: ["Full-stack web", "API integrations", "Secure data layers"],
    link: "https://ionava.com",
  },
  {
    slug: "wist-health",
    name: "Wist Health",
    role: "Product & Strategy Lead",
    period: "Jan 2025 – Sep 2025",
    hook: "A web + iOS mental-health AI app, published on the App Store.",
    longDescription:
      "Wist is an AI-native wellness platform with adaptive UX and personalized support flows for guided mental-health journeys. I engineered the web and iOS apps and implemented the LLM-powered conversational workflows and session-state management that deliver context-aware reflections and in-app support. We shipped through TestFlight and the App Store, iterating on the core experience, and the work earned a $10K mental-health innovation grant. Built under the Larta Heal.LA 2025 accelerator.",
    stack: ["iOS (Swift / Expo)", "Web", "LLM conversational flows", "Session-state management"],
    link: "https://www.wist.health",
  },
  {
    slug: "nomadist",
    name: "Nomadist",
    role: "Builder",
    period: "Feb 2025 – Apr 2025",
    hook: "A GPT-4 gear concierge for vehicle adventurers.",
    longDescription:
      "Nomadist is a proprietary GPT-4 assistant that helps overlanders and vehicle adventurers find gear compatible with their vehicle and trip. I integrated structured fitment logic, expert data, and use-case prompting across thousands of data points to recommend lighting, racks, and rooftop-tent bundles. We launched a beta with KC HiLiTES targeting a 13% conversion lift and prototyped a white-label SaaS for B2B partners. Knapp Venture Competition Semi-Finalist (Consumer Software Track, 2025).",
    stack: ["GPT-4", "Structured fitment logic", "Recommendation system"],
    link: "",
  },
  {
    slug: "frameforge",
    name: "FrameForge",
    role: "Builder",
    period: "Feb 2025 – Mar 2025",
    hook: "Generative-AI scene control for consistent AI video. 2nd Place, FBRC.ai x Luma AI Hackathon.",
    longDescription:
      "FrameForge improves video consistency across keyframes in generative filmmaking. I built a pipeline combining Blender for 3D scene assets, ControlNet plus SDXL for stylized rendering, and Luma AI's Ray2 APIs to generate cinematic sequences, letting directors input textual keyframe descriptions and get structured, high-quality clips with reduced randomness. Won 2nd in the Scene Control Challenge.",
    stack: ["Blender", "ControlNet", "SDXL", "Luma Ray2 API"],
    link: "https://www.youtube.com/watch?v=UQcJUsA9tSs",
  },
  {
    slug: "ubun2",
    name: "UBUN2",
    role: "Builder",
    period: "Mar 2023 – Sep 2023",
    hook: "A web app + prison pen-pal system to cut LA-area recidivism. 1st Place, Innovate@UCLA.",
    longDescription:
      "UBUN2 is a social-change web application and pen-pal system aimed at cutting inmate recidivism in Greater LA by ~15%. Built with Wix and BeautifulSoup web scraping, using design-thinking frameworks and agile market research alongside Sony and JPL mentors. Took first place in the competition.",
    stack: ["Wix", "BeautifulSoup", "Design thinking / agile"],
    link: "",
  },
];

const earlier = [
  {
    name: "DataRes Consulting",
    period: "Sep 2021 – Mar 2024",
    desc: "Real Estate: led a team of 7 building data-driven Zillow valuations with NLTK and sentiment analysis. EdTech: surfaced a 20% revenue-uplift opportunity across 7,000+ users.",
    tech: ["Python", "NLTK", "Sentiment analysis"],
    link: "",
  },
  {
    name: "ACM AI · Cassava Leaf Disease Detection",
    period: "Jan 2023 – Mar 2023",
    desc: "PyTorch CNNs and transfer learning for crop-disease detection.",
    tech: ["PyTorch", "CNNs", "Transfer learning"],
    link: "",
  },
  {
    name: "Driver Distraction Detector",
    period: "2020",
    desc: "Computer-vision CNN classifying driver attentiveness.",
    tech: ["Keras", "TensorFlow"],
    link: "https://bit.ly/driverai",
  },
  {
    name: "Medical Imaging · Pneumonia Detection",
    period: "2020",
    desc: "CNN reading lung X-rays to flag pneumonia.",
    tech: ["Keras", "TensorFlow"],
    link: "https://bit.ly/medicalimagingai",
  },
];

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground font-mono">
    {children}
  </span>
);

const ProjectsContent = () => {
  const [showEarlier, setShowEarlier] = useState(true);
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);

  return (
    <Reveal className="space-y-12">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
        <p className="text-muted-foreground mt-2">Things I've built and shipped, zero to one.</p>
      </RevealItem>

      <RevealItem>
        <div className="grid sm:grid-cols-2 gap-4 auto-rows-fr">
          {projects.map((p) => (
            <button
              key={p.slug}
              onClick={() => setSelected(p)}
              className="group flex flex-col h-full text-left p-5 rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_-16px_hsl(var(--primary)/0.4)]"
            >
              <ProjectVisual slug={p.slug} />
              <div className="mt-4 flex items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <span className="font-mono text-xs text-muted-foreground shrink-0">{p.period}</span>
              </div>
              <p className="font-mono text-[11px] text-primary mt-0.5">{p.role}</p>
              <p className="text-[15px] text-foreground/80 leading-relaxed mt-2">{p.hook}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
                {p.stack.slice(0, 4).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </button>
          ))}
        </div>
      </RevealItem>

      <RevealItem>
        <button
          onClick={() => setShowEarlier((s) => !s)}
          className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-primary"># </span>Earlier / ML Foundations
          <ChevronDown className={`w-4 h-4 transition-transform ${showEarlier ? "rotate-180" : ""}`} />
        </button>
        {showEarlier && (
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            {earlier.map((e) => {
              const inner = (
                <>
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-medium text-foreground text-sm">{e.name}</h4>
                    {e.link && <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />}
                  </div>
                  <p className="font-mono text-[11px] text-muted-foreground mt-0.5">{e.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">{e.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {e.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </>
              );
              return e.link ? (
                <a
                  key={e.name}
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-lg border border-border bg-card transition-colors hover:border-primary/40"
                >
                  {inner}
                </a>
              ) : (
                <div key={e.name} className="group p-4 rounded-lg border border-border bg-card">
                  {inner}
                </div>
              );
            })}
          </div>
        )}
      </RevealItem>

      <Dialog open={!!selected} onOpenChange={(o) => { if (!o) setSelected(null); }}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          {selected && (
            <div className="space-y-5">
              <ProjectVisual slug={selected.slug} />
              <div>
                <DialogTitle className="font-display text-2xl font-bold text-foreground">
                  {selected.name}
                </DialogTitle>
                <p className="font-mono text-xs text-primary mt-1">
                  {selected.role} · {selected.period}
                </p>
              </div>
              <p className="text-[15px] text-foreground/90 leading-relaxed">{selected.hook}</p>
              <p className="text-[15px] text-muted-foreground leading-relaxed">{selected.longDescription}</p>
              <div>
                <h4 className="font-mono text-sm text-muted-foreground mb-3">
                  <span className="text-primary"># </span>Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selected.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
                >
                  Visit {selected.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Reveal>
  );
};

export default ProjectsContent;
