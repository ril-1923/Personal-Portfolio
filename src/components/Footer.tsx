import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/[0.06] px-4 py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="text-sm text-slate-500">{profile.title}</p>
        </div>

        <div className="flex items-center gap-3">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg glass text-slate-400 transition-colors hover:text-accent-cyan" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg glass text-slate-400 transition-colors hover:text-accent-cyan" aria-label="GitHub">
            <Github size={17} />
          </a>
          <button onClick={scrollTop} className="flex h-9 w-9 items-center justify-center rounded-lg glass text-slate-400 transition-colors hover:text-accent-cyan" aria-label="Back to top">
            <ArrowUp size={17} />
          </button>
        </div>

        <p className="text-xs text-slate-600">© {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
