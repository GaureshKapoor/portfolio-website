import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const facts = [
  { emoji: "🔵", text: "Man City fan — always" },
  { emoji: "🍜", text: "Big foodie — religiously on Beli" },
  { emoji: "🏔️", text: "Into the outdoors — hiking, exploring, all of it" },
  { emoji: "🎬", text: "Concerts, premieres, movies, TV shows — yes to all" },
  { emoji: "✈️", text: "20+ countries and counting — travel nerd through and through" },
  { emoji: "🤖", text: "Obsessed with AI and startups — building and following both" },
];

const FactCard = ({ fact, index }: { fact: typeof facts[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.07 }}
      whileHover={{ scale: 1.03, y: -3, borderColor: "hsl(var(--primary) / 0.3)" }}
      className="p-5 rounded-xl bg-card border border-border flex items-start gap-4 transition-colors"
    >
      <motion.span
        initial={{ scale: 0, rotate: -90 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 15, delay: index * 0.07 + 0.1 }}
        className="text-2xl"
      >
        {fact.emoji}
      </motion.span>
      <p className="text-muted-foreground">{fact.text}</p>
    </motion.div>
  );
};

const FunFactsContent = () => {
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
          Fun Facts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-8"
        >
          A few things about me outside of work.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {facts.map((f, i) => (
          <FactCard key={i} fact={f} index={i} />
        ))}
      </div>
    </div>
  );
};

export default FunFactsContent;
