import { motion } from 'framer-motion';
import { techBadges } from './techBadges';

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* animated grid */}
      <div className="absolute inset-0 grid-bg animate-grid-pan opacity-60" />

      {/* radial fades */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950" />
      <div className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-accent-blue/20 blur-[120px]" />
      <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent-violet/20 blur-[110px] animate-pulse-glow" />
      <div className="absolute left-[6%] bottom-[12%] h-72 w-72 rounded-full bg-accent-cyan/20 blur-[110px] animate-pulse-glow [animation-delay:1.2s]" />

      {/* orbiting rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[560px] w-[560px] rounded-full border border-white/[0.04] animate-spin-slow">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent-cyan shadow-[0_0_20px_4px_rgba(34,211,238,0.5)]" />
        </div>
        <div className="absolute inset-10 rounded-full border border-white/[0.05] animate-spin-slow [animation-direction:reverse]">
          <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent-violet shadow-[0_0_20px_4px_rgba(139,92,246,0.5)]" />
        </div>
        <div className="absolute inset-20 rounded-full border border-white/[0.06]" />
      </div>

      {/* floating tech badges */}
      {techBadges.map((b, i) => (
        <motion.div
          key={b.label}
          className="absolute hidden md:block"
          style={{ left: b.x, top: b.y }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
        >
          <div
            className="glass animate-float-slow rounded-xl px-3 py-2 text-xs font-medium text-slate-200"
            style={{ animationDelay: `${b.delay}s` }}
          >
            {b.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
