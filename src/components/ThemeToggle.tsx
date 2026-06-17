import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const getInitial = () => {
  if (typeof window === "undefined") return true;
  const saved = localStorage.getItem("theme");
  if (saved) return saved === "dark";
  return false; // default light
};

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const [dark, setDark] = useState(getInitial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle theme"
      className={`p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors ${className}`}
    >
      {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

export default ThemeToggle;
