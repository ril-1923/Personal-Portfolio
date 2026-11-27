import { motion } from 'framer-motion';
import { ArrowUpRight, Box } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProjectVisual from './ProjectVisual';
import { projects } from '@/data/profile';
import { fadeInUp, stagger } from '@/lib/motion';

const showcase = projects
  .filter((p) => p.category === '3D Experiences' || p.category === 'Interactive Simulations')
  .slice(0, 6);

export default function ThreeDShowcase() {
  return (
    <section id="3d-showcase" className="relative px-4 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <div className="absolute left-[10%] top-1/4 h-64 w-64 rounded-full bg-accent-blue/10 blur-[120px]" />
      <div className="absolute right-[10%] bottom-1/4 h-64 w-64 rounded-full bg-accent-violet/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="3D Showcase"
          title="Browser-based 3D experiences"
          description="Immersive, interactive 3D projects rendered directly in the browser — a cinematic look at my creative web engineering work."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {showcase.map((p, i) => (
            <motion.article
              key={p.id}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-2xl glass transition-colors hover:border-accent-cyan/30 ${
                i === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              <ProjectVisual
                name={p.name}
                category={p.category}
                className={i === 0 ? 'h-56 lg:h-72' : 'h-40'}
              />
              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg glass text-accent-cyan">
                <Box size={16} />
              </div>
              <div className="p-5">
                <h3 className={`font-bold text-white ${i === 0 ? 'text-2xl' : 'text-lg'}`}>{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <span key={t} className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-accent-cyan/90">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => p.demoUrl && window.open(p.demoUrl, '_blank')}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-accent-cyan"
                  >
                    View Demo <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
