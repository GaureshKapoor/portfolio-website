// Central site config. Mirrors content/links.md (links) and drives nav order
// + the "last updated" footer. Keep this in sync when content/ changes.

// Bump this after any substantial profile/experience/content update. Format: "Month YYYY".
export const lastUpdated = "July 2026";

// Single source of truth for outbound links. Some appear on the site (footer,
// contact, landing); some are here just for reference. Mirror from content/links.md.
export const links = {
  email: "mailto:gaureshkapoor@gmail.com",
  linkedin: "https://www.linkedin.com/in/gaureshkapoor/",
  github: "https://github.com/GaureshKapoor",
  phone: "tel:+13105624855",
  whatsapp: "https://wa.me/13105624855",
  instagram: "https://www.instagram.com/gauresh_kapoor/",
  twitter: "https://x.com/gaureshkapoor17",
  resume: "/resume.pdf",
} as const;

// Section nav order. Single source replacing the duplicated lists that used to
// live in Landing.tsx and SectionLayout.tsx. Also drives the prev/next arrows.
export const sections = [
  { label: "About Me", path: "/about" },
  { label: "Experiences", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Achievements", path: "/achievements" },
  { label: "Education", path: "/education" },
  { label: "Fun Facts", path: "/fun-facts" },
  { label: "Feed", path: "/feed" },
  { label: "Contact", path: "/contact" },
] as const;
