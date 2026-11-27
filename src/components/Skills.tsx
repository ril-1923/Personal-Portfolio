import { motion } from 'framer-motion';
import { Database, Layout, Sparkles, type LucideIcon } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skillCategories } from '@/data/profile';
import { fadeInUp, scaleIn, stagger } from '@/lib/motion';

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  database: Database,
  sparkles: Sparkles,
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools I build with"
          description="A focused toolkit spanning frontend engineering, data, and AI-assisted development."
        />

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.div
                key={cat.name}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 transition-colors hover:border-white/[0.14]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-blue/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40" />
                <div className="relative flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 text-accent-cyan ring-1 ring-white/10">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{cat.name}</h3>
                </div>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <motion.span
                      key={s}
                      variants={fadeInUp}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm font-medium text-slate-200 transition-all hover:border-accent-cyan/40 hover:bg-accent-cyan/10 hover:text-white"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
