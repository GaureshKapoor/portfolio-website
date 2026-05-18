import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Linkedin, Mail, Github, Moon, Sun, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import StaggerChildren, { staggerItem } from "./StaggerChildren";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Achievements", path: "/achievements" },
  { label: "Fun Facts", path: "/fun-facts" },
  { label: "Feed", path: "/feed" },
  { label: "Contact", path: "/contact" },
];

const Landing = () => {
  const navigate = useNavigate();
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  const [exiting, setExiting] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const handleNavClick = (path: string) => {
    setExiting(path);
    setTimeout(() => navigate(path), 250);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Theme toggle */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Center content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <StaggerChildren className="max-w-2xl w-full">
          {/* Hero */}
          <motion.div variants={staggerItem} className="mb-12">
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4"
              animate={exiting ? { opacity: 0, y: -20 } : {}}
              transition={{ duration: 0.3 }}
            >
              Gauresh Kapoor
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
              animate={exiting ? { opacity: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              Building at the intersection of AI, product, and business.
            </motion.p>
          </motion.div>

          {/* Navigation links */}
          <motion.nav
            className="mb-12"
            animate={exiting ? { opacity: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <motion.button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="text-base md:text-lg text-muted-foreground hover:text-foreground transition-colors relative group"
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-mono text-xs text-primary/60 mr-1.5">/</span>
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>
          </motion.nav>

          {/* Social links */}
          <motion.div
            className="flex flex-wrap items-center gap-3"
            variants={staggerItem}
            animate={exiting ? { opacity: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <a
              href="https://www.linkedin.com/in/gaureshkapoor/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-border rounded-md hover:bg-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="mailto:gaureshkapoor@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-border rounded-md hover:bg-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://github.com/GaureshKapoor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-border rounded-md hover:bg-accent transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
            >
              <FileDown className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        </StaggerChildren>
      </div>
    </div>
  );
};

export default Landing;
