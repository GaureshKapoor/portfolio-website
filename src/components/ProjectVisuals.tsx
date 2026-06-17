// Bespoke, themed micro-animations per project. Each is an inline SVG that
// animates on the parent card's hover (the card is a `group`). Cyan/theme tokens,
// hover-triggered CSS transitions (no infinite loops) — calm and performant.

const wrap = "w-16 h-16 text-primary";
const rotOrigin = { transformBox: "fill-box" as const, transformOrigin: "center" };

const Vault = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={wrap}>
    <circle cx="50" cy="50" r="32" strokeWidth="2" className="opacity-30" />
    <g className="transition-transform duration-700 ease-out group-hover:rotate-[135deg]" style={rotOrigin}>
      <circle cx="50" cy="50" r="21" strokeWidth="2" />
      <line x1="50" y1="29" x2="50" y2="38" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="50" y1="62" x2="50" y2="71" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="29" y1="50" x2="38" y2="50" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="62" y1="50" x2="71" y2="50" strokeWidth="3.5" strokeLinecap="round" />
    </g>
    <circle cx="50" cy="50" r="4.5" fill="currentColor" />
  </svg>
);

const Ionava = () => (
  <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" className="w-20 h-12 text-primary">
    <polyline
      points="2,30 26,30 34,12 46,48 56,30 70,30 78,22 86,30 98,30"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="[stroke-dasharray:160] [stroke-dashoffset:160] group-hover:[stroke-dashoffset:0] transition-all duration-1000 ease-out"
    />
    <circle cx="46" cy="48" r="3.5" fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500" />
  </svg>
);

const Wist = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={wrap}>
    {[28, 20, 12].map((r, i) => (
      <circle
        key={r}
        cx="50"
        cy="50"
        r={r}
        strokeWidth="2"
        className="origin-center transition-all duration-700 ease-out group-hover:scale-110"
        style={{ ...rotOrigin, opacity: 0.3 + i * 0.25, transitionDelay: `${i * 120}ms` }}
      />
    ))}
    <circle cx="50" cy="50" r="3.5" fill="currentColor" />
  </svg>
);

const Nomadist = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={wrap}>
    <circle cx="50" cy="50" r="32" strokeWidth="2" className="opacity-40" />
    <text x="50" y="20" textAnchor="middle" className="fill-current text-[10px] font-mono opacity-60">N</text>
    <g className="transition-transform duration-700 ease-out group-hover:rotate-[200deg]" style={rotOrigin}>
      <path d="M50 28 L57 52 L50 46 L43 52 Z" fill="currentColor" />
      <path d="M50 72 L43 48 L50 54 L57 48 Z" fill="currentColor" className="opacity-30" />
    </g>
    <circle cx="50" cy="50" r="3" fill="currentColor" />
  </svg>
);

const FrameForge = () => (
  <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" className="w-20 h-12 text-primary">
    {[6, 38, 70].map((x, i) => (
      <rect
        key={x}
        x={x}
        y="14"
        width="24"
        height="32"
        rx="2"
        strokeWidth="2"
        className="transition-transform duration-500 ease-out group-hover:-translate-y-1"
        style={{ ...rotOrigin, transitionDelay: `${i * 100}ms`, opacity: 0.4 + i * 0.3 }}
      />
    ))}
    <line x1="2" y1="9" x2="98" y2="9" strokeWidth="1.5" strokeDasharray="3 4" className="opacity-40" />
    <line x1="2" y1="51" x2="98" y2="51" strokeWidth="1.5" strokeDasharray="3 4" className="opacity-40" />
    <line
      x1="50" y1="6" x2="50" y2="54"
      strokeWidth="2"
      className="opacity-0 group-hover:opacity-100 transition-all duration-700 [transform:translateX(-40px)] group-hover:[transform:translateX(0)]"
    />
  </svg>
);

const Ubun2 = () => {
  const nodes = [
    [20, 24], [78, 20], [50, 50], [24, 76], [80, 74],
  ];
  const edges = [[0, 2], [1, 2], [2, 3], [2, 4], [0, 1]];
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={wrap}>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          strokeWidth="1.5"
          className="[stroke-dasharray:80] [stroke-dashoffset:80] group-hover:[stroke-dashoffset:0] transition-all duration-700 ease-out"
          style={{ transitionDelay: `${i * 90}ms` }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x} cy={y} r={i === 2 ? 5 : 3.5}
          fill="currentColor"
          className="origin-center transition-transform duration-500 group-hover:scale-125"
          style={{ ...rotOrigin, transitionDelay: `${i * 80}ms` }}
        />
      ))}
    </svg>
  );
};

const visuals: Record<string, () => JSX.Element> = {
  vault: Vault,
  ionava: Ionava,
  "wist-health": Wist,
  nomadist: Nomadist,
  frameforge: FrameForge,
  ubun2: Ubun2,
};

const ProjectVisual = ({ slug }: { slug: string }) => {
  const V = visuals[slug];
  return (
    <div className="flex h-24 items-center justify-center rounded-md bg-gradient-to-br from-primary/10 via-card to-card border border-border overflow-hidden">
      {V ? <V /> : <span className="font-display text-2xl text-muted-foreground">{slug[0]?.toUpperCase()}</span>}
    </div>
  );
};

export default ProjectVisual;
