import { motion } from 'framer-motion';
import { Bot, Code2, Bug, Layers, FlaskConical, Repeat, Wand2, type LucideIcon } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { aiTools, aiWorkflow } from '@/data/profile';
import { fadeInUp, scaleIn, stagger } from '@/lib/motion';

const icons: LucideIcon[] = [Wand2, Layers, Code2, Bug, FlaskConical, Repeat];

export default function AIWorkflow() {
  return (
    <section id="ai-workflow" className="relative px-4 py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 h-64 w-[700px] -translate-x-1/2 rounded-full bg-accent-violet/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI-Assisted Development"
          title="How AI fits into my workflow"
          description="AI tools accelerate my process — from first prototype to final polish. They support my work; they don't replace the engineering judgment behind it."
        />

        {/* Tools */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {aiTools.map((t) => (
            <motion.div
              key={t.name}
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="group glass rounded-2xl p-5 text-center transition-colors hover:border-accent-violet/30"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-blue/20 text-accent-violet ring-1 ring-white/10">
                <Bot size={22} />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-white">{t.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{t.role}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Workflow steps */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {aiWorkflow.map((w, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={w.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 transition-colors hover:border-accent-cyan/30"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-cyan/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan ring-1 ring-white/10">
                    <Icon size={18} />
                  </span>
                  <span className="font-mono text-xs text-slate-500">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{w.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-slate-500">
          AI tools are development assistants I direct and review — not proprietary products of my own.
        </p>
      </div>
    </section>
  );
}
