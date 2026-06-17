import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Instagram, XTwitter } from "@/components/BrandIcons";
import { links } from "@/config/site";
import ContactForm from "@/components/ContactForm";
import GaureshAI from "@/components/GaureshAI";

const contacts = [
  { icon: Mail, label: "Email", value: "gaureshkapoor@gmail.com, gaureshkapoor7@ucla.edu", href: links.email },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/gaureshkapoor", href: links.linkedin },
  { icon: Github, label: "GitHub", value: "github.com/GaureshKapoor", href: links.github },
  { icon: Phone, label: "Phone", value: "+1 (310) 562-4855", href: links.phone },
  { icon: Instagram, label: "Instagram", value: "instagram.com/gauresh_kapoor", href: links.instagram },
  { icon: XTwitter, label: "X / Twitter", value: "x.com/gaureshkapoor17", href: links.twitter },
];

const ContactContent = () => {
  return (
    <Reveal className="space-y-12 max-w-3xl">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Contact</h2>
        <p className="text-muted-foreground mt-2">
          Let's connect — I'm always open to new opportunities and good conversations.
        </p>
      </RevealItem>

      <RevealItem>
        <ul className="divide-y divide-border border-y border-border">
          {contacts.map((c) => {
            const Icon = c.icon;
            const external = c.href.startsWith("http");
            return (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 py-3.5 transition-colors"
                >
                  <Icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  <span className="w-24 shrink-0 text-foreground transition-colors group-hover:text-primary">
                    {c.label}
                  </span>
                  <span className="min-w-0 truncate text-sm text-muted-foreground">{c.value}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </RevealItem>

      <RevealItem>
        <h3 className="font-mono text-sm text-muted-foreground">
          <span className="text-primary"># </span>Send a message
        </h3>
        <div className="mt-4">
          <ContactForm />
        </div>
      </RevealItem>

      <RevealItem>
        <h3 className="font-mono text-sm text-muted-foreground">
          <span className="text-primary"># </span>Chat with Gauresh AI
        </h3>
        <div className="mt-4">
          <GaureshAI />
        </div>
      </RevealItem>
    </Reveal>
  );
};

export default ContactContent;
