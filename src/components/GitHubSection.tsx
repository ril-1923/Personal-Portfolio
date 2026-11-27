import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '@/data/profile';
import { fadeInUp } from '@/lib/motion';

export default function GitHubSection() {
  return (
    <section id="github" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="GitHub"
          title="Open source & code"
          description="Explore my public repositories, experiments, and project source code."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14"
        >
          <div className="group relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-blue/15 blur-[100px] transition-opacity group-hover:opacity-100" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent-violet/15 blur-[100px]" />

            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-ink-700 to-ink-800 ring-1 ring-white/10">
                  <Github size={40} className="text-white" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white">ril-1923</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Public repositories and project source code on GitHub.
                  </p>
                  <p className="mt-1 font-mono text-xs text-accent-cyan/80">
                    {profile.github}
                  </p>
                </div>
              </div>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-5 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] active:scale-95"
              >
                Explore GitHub
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-slate-500">
            Public repository statistics can be displayed here once a GitHub token is configured.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
