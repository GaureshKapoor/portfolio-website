import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "gaureshkapoor@gmail.com", href: "mailto:gaureshkapoor@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/gaureshkapoor", href: "https://www.linkedin.com/in/gaureshkapoor/" },
  { icon: Github, label: "GitHub", value: "github.com/GaureshKapoor", href: "https://github.com/GaureshKapoor" },
  { icon: Phone, label: "Phone", value: "+1 (310) 562-4855", href: "tel:+13105624855" },
];

const ContactCard = ({ contact, index }: { contact: typeof contacts[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const Icon = contact.icon;

  return (
    <motion.a
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -3, scale: 1.02, borderColor: "hsl(var(--primary) / 0.5)" }}
      href={contact.href}
      target={contact.href.startsWith("http") ? "_blank" : undefined}
      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="p-5 rounded-xl bg-card border border-border flex items-center gap-4 transition-all group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: "spring", stiffness: 250, damping: 18, delay: index * 0.1 + 0.15 }}
        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 relative z-10"
      >
        <Icon className="w-5 h-5 text-primary" />
      </motion.div>
      <div className="relative z-10">
        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{contact.label}</p>
        <p className="text-xs text-muted-foreground font-mono">{contact.value}</p>
      </div>
    </motion.a>
  );
};

const ContactContent = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="space-y-8">
      <div ref={headerRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-foreground mb-2"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-8"
        >
          Let's connect — I'm always open to new opportunities and conversations.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        {contacts.map((c, i) => (
          <ContactCard key={i} contact={c} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ContactContent;
