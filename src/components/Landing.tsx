import { useNavigate } from "react-router-dom";
import { Linkedin, Mail, Github, FileDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import StaggerChildren, { staggerItem } from "./StaggerChildren";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";
import ProfileAvatar from "./ProfileAvatar";
import { sections, links } from "@/config/site";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute top-5 right-5 z-10">
        <ThemeToggle />
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl w-full flex flex-col md:flex-row md:items-start gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0"
          >
            <ProfileAvatar className="w-48 h-48 md:w-60 md:h-60" />
          </motion.div>

          <StaggerChildren className="flex-1 min-w-0">
          <motion.div variants={staggerItem} className="mb-5 flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary/60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              San Francisco · Los Angeles · New Delhi
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-display text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-5"
          >
            Gauresh Kapoor
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="font-mono text-sm md:text-[15px] font-semibold text-foreground mb-4"
          >
            AI Product Engineer <span className="text-primary">@ PwC Deals</span>
            <span className="text-muted-foreground/50"> | </span>
            UCLA Alum 🐻
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
          >
            Equal parts engineer and operator, building AI products at the
            intersection of data and business.
          </motion.p>

          <motion.nav variants={staggerItem} className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3.5">
              {sections.filter((s) => s.path !== "/contact").map((link) => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className="group flex items-center gap-1 text-base text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  <span className="font-mono text-sm text-primary/70 mr-0.5">/</span>
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </button>
              ))}
            </div>
          </motion.nav>

          <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-3">
            <a
              href={links.resume}
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
            >
              <FileDown className="w-4 h-4" />
              Resume
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-border rounded-md hover:bg-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={links.email}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-border rounded-md hover:bg-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-border rounded-md hover:bg-accent transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </motion.div>
          </StaggerChildren>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
