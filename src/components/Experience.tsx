import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experience } from '@/data/profile';
import { fadeInUp, stagger } from '@/lib/motion';

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Professional Experience"
          title="Where I've worked"
          description="A timeline of my professional journey in web development."
        />

        <motion.div
          variants={stagger(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative mt-14 pl-8 sm:pl-0"
        >
          {/* vertical line */}
          <div className="absolute left-2.5 top-2 h-full w-px bg-gradient-to-b from-accent-cyan via-accent-blue to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={fadeInUp}
              className={`relative mb-10 sm:mb-12 sm:w-1/2 ${
                i % 2 === 0 ? 'sm:ml-auto sm:pl-10' : 'sm:pr-10 sm:text-right'
              }`}
            >
              {/* node */}
              <span
                className={`absolute top-2 flex h-5 w-5 items-center justify-center rounded-full bg-ink-900 ring-2 ring-accent-cyan left-0 sm:left-auto ${
                  i % 2 === 0 ? 'sm:-left-2.5' : 'sm:-right-2.5'
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-accent-cyan" />
              </span>

              <div className="glass rounded-2xl p-6">
                <div className={`flex items-center gap-2 ${i % 2 !== 0 ? 'sm:justify-end' : ''}`}>
                  <Briefcase size={16} className="text-accent-cyan" />
                  <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan/80">
                    {exp.duration}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-white">{exp.position}</h3>
                <p className="mt-1 text-sm font-medium text-slate-300">{exp.company}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-slate-500 sm:justify-end">
                  <MapPin size={12} /> {exp.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{exp.summary}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
