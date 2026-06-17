// Trajectory canvas, theme-aware. Both modes get a faint dot-grid + soft accent
// glow; dark adds a scattered starfield + vignette. Static (no JS) — calm, cheap.
const BackgroundPattern = () => (
  <div
    className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-background"
    aria-hidden="true"
  >
    <div
      className="absolute inset-0 opacity-60"
      style={{
        backgroundImage:
          "radial-gradient(hsl(var(--foreground) / 0.045) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }}
    />
    <div
      className="absolute inset-0 hidden dark:block"
      style={{
        backgroundImage: `
          radial-gradient(1.5px 1.5px at 12% 18%, hsl(var(--foreground) / 0.5), transparent),
          radial-gradient(1px 1px at 28% 62%, hsl(var(--foreground) / 0.35), transparent),
          radial-gradient(1.5px 1.5px at 67% 26%, hsl(var(--foreground) / 0.4), transparent),
          radial-gradient(1px 1px at 82% 72%, hsl(var(--foreground) / 0.3), transparent),
          radial-gradient(1px 1px at 45% 88%, hsl(var(--foreground) / 0.3), transparent),
          radial-gradient(1.5px 1.5px at 90% 14%, hsl(var(--primary) / 0.55), transparent),
          radial-gradient(1px 1px at 55% 42%, hsl(var(--foreground) / 0.25), transparent),
          radial-gradient(1px 1px at 8% 80%, hsl(var(--foreground) / 0.25), transparent)
        `,
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% -15%, hsl(var(--primary) / 0.07), transparent 60%)",
      }}
    />
    <div
      className="absolute inset-0 hidden dark:block"
      style={{
        background:
          "radial-gradient(ellipse 100% 60% at 50% 120%, hsl(222 45% 3% / 0.7), transparent 55%)",
      }}
    />
  </div>
);

export default BackgroundPattern;
