import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderGit2, Mail } from 'lucide-react';
import HeroBackground from './HeroBackground';
import { profile } from '@/data/profile';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-16">
      <HeroBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.div variants={item} className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </span>
        </motion.div>

        <motion.p variants={item} className="mt-6 font-mono text-sm uppercase tracking-[0.3em] text-accent-cyan/90">
          {profile.title}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-3 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Mohammed <span className="text-gradient">Rilwan</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 text-lg font-medium text-slate-300 sm:text-xl"
        >
          {profile.subtitle}
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          I build responsive, performant web applications and interactive 3D browser-based
          experiences — engineering modern interfaces with React, TypeScript, and AI-assisted workflows.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => scrollTo('#projects')}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-5 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] active:scale-95"
          >
            <FolderGit2 size={18} />
            Explore My Projects
          </button>
          <a
            href={profile.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/[0.08]"
          >
            <Download size={18} />
            Download Resume
          </a>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/[0.08]"
          >
            <Mail size={18} />
            Contact Me
          </button>
        </motion.div>

        <motion.div variants={item} className="mt-12 flex justify-center">
          <button
            onClick={() => scrollTo('#about')}
            className="flex flex-col items-center gap-1 text-slate-500 transition-colors hover:text-slate-300"
            aria-label="Scroll down"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
            <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
              <ArrowDown size={16} />
            </motion.span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
