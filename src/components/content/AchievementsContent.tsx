import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Lightbulb, DollarSign, Medal } from "lucide-react";

const achievements = [
  { icon: Award, title: "Dean's Honor List", desc: "UCLA, multiple quarters", color: "text-primary" },
  { icon: Medal, title: "Sharpe Fellow", desc: "Selected for UCLA's Sharpe Fellowship program", color: "text-primary" },
  { icon: Lightbulb, title: "Start-Up Nation Fellow", desc: "Innovation fellowship for entrepreneurship", color: "text-primary" },
  { icon: DollarSign, title: "$10K GenAI Grant", desc: "Received grant for generative AI research and development", color: "text-primary" },
  { icon: Trophy, title: "Innovate@UCLA — 1st Place", desc: "Won first place at UCLA's innovation competition", color: "text-primary" },
  { icon: Trophy, title: "FBRC.ai Hackathon — 2nd Place", desc: "Runner-up at the FBRC.ai AI hackathon", color: "text-primary" },
];

const AchievementCard = ({ achievement, index }: { achievement: typeof achievements[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const Icon = achievement.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -3, borderColor: "hsl(var(--primary) / 0.4)" }}
      className="p-5 rounded-xl bg-card border border-border flex items-start gap-4 transition-colors relative overflow-hidden group"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.08 + 0.15 }}
        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 relative z-10"
      >
        <Icon className={`w-5 h-5 ${achievement.color}`} />
      </motion.div>
      <div className="relative z-10">
        <h3 className="font-semibold text-foreground">{achievement.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{achievement.desc}</p>
      </div>
    </motion.div>
  );
};

const AchievementsContent = () => {
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
          Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-8"
        >
          Awards, honors, and recognition.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {achievements.map((a, i) => (
          <AchievementCard key={i} achievement={a} index={i} />
        ))}
      </div>
    </div>
  );
};

export default AchievementsContent;
