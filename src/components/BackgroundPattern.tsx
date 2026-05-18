import { useEffect, useRef, useState } from "react";

const BackgroundPattern = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 50, y: 50 });
  const currentPos = useRef({ x: 50, y: 50 });
  const autoAngle = useRef(0);
  const rafId = useRef<number>(0);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    const checkHover = window.matchMedia("(hover: hover)").matches;
    setHasHover(checkHover);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
    };

    if (checkHover) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const animate = () => {
      const container = containerRef.current;
      if (!container) {
        rafId.current = requestAnimationFrame(animate);
        return;
      }

      if (checkHover) {
        // Ease toward mouse
        currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.03;
        currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.03;
      } else {
        // Autonomous drift on mobile
        autoAngle.current += 0.005;
        currentPos.current.x = 50 + Math.sin(autoAngle.current) * 20;
        currentPos.current.y = 50 + Math.cos(autoAngle.current * 0.7) * 15;
      }

      container.style.setProperty("--blob-x", `${currentPos.current.x}%`);
      container.style.setProperty("--blob-y", `${currentPos.current.y}%`);

      // Secondary blob drifts independently
      const t = Date.now() * 0.0003;
      container.style.setProperty("--blob2-x", `${50 + Math.sin(t * 1.3) * 30}%`);
      container.style.setProperty("--blob2-y", `${50 + Math.cos(t * 0.9) * 25}%`);

      // Tertiary blob
      container.style.setProperty("--blob3-x", `${50 + Math.cos(t * 0.7) * 25}%`);
      container.style.setProperty("--blob3-y", `${50 + Math.sin(t * 1.1) * 20}%`);

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
      if (checkHover) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{
        background: `
          radial-gradient(ellipse 60% 50% at var(--blob-x, 50%) var(--blob-y, 50%), 
            hsl(var(--gradient-blob-1) / 0.5) 0%, transparent 70%),
          radial-gradient(ellipse 50% 60% at var(--blob2-x, 30%) var(--blob2-y, 70%), 
            hsl(var(--gradient-blob-2) / 0.4) 0%, transparent 70%),
          radial-gradient(ellipse 45% 55% at var(--blob3-x, 70%) var(--blob3-y, 30%), 
            hsl(var(--gradient-blob-3) / 0.35) 0%, transparent 70%),
          hsl(var(--background))
        `,
      }}
    />
  );
};

export default BackgroundPattern;
