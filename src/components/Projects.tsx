import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProjectVisual from './ProjectVisual';
import { projects, type Project } from '@/data/profile';
import { fadeInUp, scaleIn } from '@/lib/motion';

const categories = ['All', 'Interactive Simulations', '3D Experiences', 'Web Applications', 'Frontend Projects'] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');
  const featured = projects.find((p) => p.featured)!;
  const rest = useMemo(
    () => projects.filter((p) => !p.featured && (filter === 'All' || p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative px-4 py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/3 h-72 w-[600px] -translate-x-1/2 rounded-full bg-accent-violet/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work & experiments"
          description="A collection of interactive 3D experiences, simulations, and web applications built in the browser."
        />

        {/* Featured */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14"
        >
          <div className="group relative grid overflow-hidden rounded-3xl glass-strong lg:grid-cols-2">
            <ProjectVisual
              name={featured.name}
              category={featured.category}
              className="min-h-[280px] lg:min-h-[420px]"
            />
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-cyan/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-accent-cyan">
                Featured · {featured.category}
              </span>
              <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{featured.name}</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
                {featured.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {featured.technologies.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <ProjectLinks project={featured} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="mt-14 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === c ? 'text-ink-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              {filter === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {rest.map((p) => (
              <motion.article
                key={p.id}
                layout
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col overflow-hidden rounded-2xl glass transition-colors hover:border-white/[0.14]"
              >
                <ProjectVisual name={p.name} category={p.category} className="h-44" />
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-accent-cyan/80">
                    {p.category}
                  </span>
                  <h3 className="mt-1.5 text-lg font-semibold text-white">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <span key={t} className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <ProjectLinks project={p} compact />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  const size = compact ? 'h-8 w-8' : 'h-10 w-10';
  const btn =
    'inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:border-accent-cyan/40 hover:text-white';
  const hasLinks = project.demoUrl || project.githubUrl;
  return (
    <>
      {project.demoUrl ? (
        <a href={project.demoUrl} target="_blank" rel="noreferrer" className={`${btn} ${size}`} aria-label="Live demo">
          <ExternalLink size={compact ? 14 : 16} />
        </a>
      ) : null}
      {project.githubUrl ? (
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className={`${btn} ${size}`} aria-label="Source code">
          <Github size={compact ? 14 : 16} />
        </a>
      ) : null}
      {!compact && (
        <button
          onClick={() => hasLinks ? window.open(project.demoUrl || project.githubUrl, '_blank') : null}
          className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:bg-white/[0.1]"
        >
          View Project <ArrowUpRight size={15} />
        </button>
      )}
    </>
  );
}
