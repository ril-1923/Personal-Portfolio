import { motion } from 'framer-motion';
import { Download, Eye, FileText } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '@/data/profile';
import { fadeInUp } from '@/lib/motion';

export default function Resume() {
  return (
    <section id="resume" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Resume"
          title="Download my resume"
          description="A complete overview of my experience, skills, and projects in a single document."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 flex flex-col items-center gap-6 rounded-3xl glass-strong p-10 text-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 text-accent-cyan ring-1 ring-white/10">
            <FileText size={30} />
          </span>
          <div>
            <h3 className="text-xl font-bold text-white">Mohammed Rilwan — Resume</h3>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              Replace the placeholder file at <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-accent-cyan">public/resume.pdf</code> with your actual resume to enable downloads.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-5 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] active:scale-95"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/[0.08]"
            >
              <Eye size={18} />
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
