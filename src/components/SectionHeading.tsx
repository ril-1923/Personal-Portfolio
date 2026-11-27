import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: Props) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-accent-cyan/80">
        <span className="h-px w-8 bg-gradient-to-r from-accent-cyan to-transparent" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
