import { motion } from 'framer-motion';
import { Box } from 'lucide-react';

type Props = {
  name: string;
  category: string;
  className?: string;
  variant?: number;
};

const palettes = [
  ['#22d3ee', '#3b82f6'],
  ['#8b5cf6', '#3b82f6'],
  ['#22d3ee', '#8b5cf6'],
  ['#3b82f6', '#8b5cf6'],
  ['#22d3ee', '#06b6d4'],
  ['#a78bfa', '#6366f1'],
];

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

export default function ProjectVisual({ name, category, className = '', variant }: Props) {
  const v = variant ?? hash(name) % palettes.length;
  const [c1, c2] = palettes[v % palettes.length];
  const initials = name
    .replace(/[^\w\s]/g, '')
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <div className={`relative overflow-hidden bg-ink-850 ${className}`}>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-40"
        style={{ background: c1 }}
      />
      <div
        className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full blur-3xl opacity-30"
        style={{ background: c2 }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <motion.div
          initial={{ scale: 0.9, opacity: 0.7 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold"
          style={{ background: `linear-gradient(135deg, ${c1}, ${c2})`, color: '#0a0a0f' }}
        >
          {initials || <Box size={24} />}
        </motion.div>
        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">{category}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
    </div>
  );
}
