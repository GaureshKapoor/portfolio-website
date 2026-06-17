import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";
import { sections } from "@/config/site";

interface SectionLayoutProps {
  children: React.ReactNode;
  title?: string;
  wide?: boolean;
}

const SectionLayout = ({ children, title, wide }: SectionLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentSection = sections.find((s) => location.pathname.startsWith(s.path));
  const pageTitle = title || currentSection?.label || "";

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Nav — fixed so it stays static during page overscroll/bounce */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-background/70 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Back to home"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-sm font-medium text-foreground">
              {pageTitle.toLowerCase()}
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {sections.map((s) => {
              const active = location.pathname.startsWith(s.path);
              return (
                <button
                  key={s.path}
                  onClick={() => navigate(s.path)}
                  className={`px-2.5 py-1.5 text-sm rounded-md transition-colors ${
                    active
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>
      <div className="h-[57px] shrink-0" aria-hidden="true" />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[57px] inset-x-0 z-30 bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-6 py-3 flex flex-col gap-1">
              {sections.map((s) => {
                const active = location.pathname.startsWith(s.path);
                return (
                  <button
                    key={s.path}
                    onClick={() => {
                      navigate(s.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 text-sm rounded-md text-left transition-colors ${
                      active
                        ? "text-primary bg-primary/10 font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <main className={`flex-1 w-full mx-auto px-6 py-10 md:py-16 ${wide ? "max-w-5xl" : "max-w-3xl"}`}>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export default SectionLayout;
