import { motion, useReducedMotion, type Variants } from "framer-motion";

// One entrance system for the whole site. Wrap a page's content in <Reveal>
// and each block in <RevealItem>. Runs once on mount, top-to-bottom, fast.
// Respects prefers-reduced-motion (renders instantly, no transform).

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Reveal = ({ children, className }: Props) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div variants={container} initial="hidden" animate="show" className={className}>
      {children}
    </motion.div>
  );
};

export const RevealItem = ({ children, className }: Props) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
};

export default Reveal;
