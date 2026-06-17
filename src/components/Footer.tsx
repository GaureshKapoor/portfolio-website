import { Link } from "react-router-dom";
import { Linkedin, Mail, Github, Phone } from "lucide-react";
import { WhatsApp, Instagram, XTwitter } from "./BrandIcons";
import { lastUpdated, links } from "@/config/site";

const socials = [
  { label: "LinkedIn", href: links.linkedin, Icon: Linkedin, external: true },
  { label: "Email", href: links.email, Icon: Mail, external: false },
  { label: "GitHub", href: links.github, Icon: Github, external: true },
  { label: "Phone", href: links.phone, Icon: Phone, external: false },
  { label: "WhatsApp", href: links.whatsapp, Icon: WhatsApp, external: true },
  { label: "Instagram", href: links.instagram, Icon: Instagram, external: true },
  { label: "X (Twitter)", href: links.twitter, Icon: XTwitter, external: true },
];

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-muted-foreground shrink-0">
          Last updated · {lastUpdated}
        </p>
        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-3">
          <Link
            to="/contact"
            className="inline-flex items-center px-3.5 py-1.5 text-sm font-medium rounded-md border border-border text-foreground hover:bg-accent transition-colors"
          >
            Contact
          </Link>
          {socials.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
