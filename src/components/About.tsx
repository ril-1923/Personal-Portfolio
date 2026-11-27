import { motion } from 'framer-motion';
import { Check, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { about, education, profile } from '@/data/profile';
import { fadeInUp, stagger } from '@/lib/motion';

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering modern web experiences"
          description="A snapshot of who I am, what I build, and how I work."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-2 space-y-5"
          >
            {about.paragraphs.map((p) => (
              <motion.p
                key={p}
                variants={fadeInUp}
                className="text-base leading-relaxed text-slate-300 sm:text-lg"
              >
                {p}
              </motion.p>
            ))}

            <motion.ul variants={fadeInUp} className="mt-6 grid gap-3 sm:grid-cols-2">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent-blue/15 text-accent-cyan">
                    <Check size={13} />
                  </span>
                  {h}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-4"
          >
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-violet/15 text-accent-violet">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500">Location</p>
                  <p className="text-sm font-medium text-white">{profile.location}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue/15 text-accent-blue">
                  <GraduationCap size={18} />
                </span>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500">Education</p>
                  <p className="text-sm font-medium text-white">{education.field}</p>
                  <p className="text-xs text-slate-400">{education.degree} ({education.label})</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass relative overflow-hidden rounded-2xl p-6">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent-cyan/10 blur-2xl" />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-cyan/15 text-accent-cyan">
                  <Sparkles size={18} />
                </span>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500">Focus</p>
                  <p className="text-sm font-medium text-white">3D Web & AI-Assisted Dev</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
