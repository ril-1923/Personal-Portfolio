import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '@/data/profile';
import { fadeInUp, stagger } from '@/lib/motion';

type Errors = Partial<Record<'name' | 'email' | 'subject' | 'message', string>>;
type Status = 'idle' | 'error' | 'success';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.subject.trim()) e.subject = 'Please enter a subject';
    if (!form.message.trim()) e.message = 'Please enter a message';
    else if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }
    // Backend not yet wired — structure for future integration.
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const field = (key: keyof typeof form, label: string, type = 'text') => (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          rows={4}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className={`w-full rounded-xl bg-ink-800/60 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all ring-1 ${
            errors[key] ? 'ring-red-500/50' : 'ring-white/10 focus:ring-accent-cyan/50'
          }`}
          placeholder={label}
        />
      ) : (
        <input
          type={type}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className={`w-full rounded-xl bg-ink-800/60 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all ring-1 ${
            errors[key] ? 'ring-red-500/50' : 'ring-white/10 focus:ring-accent-cyan/50'
          }`}
          placeholder={label}
        />
      )}
      {errors[key] && <p className="mt-1.5 text-xs text-red-400">{errors[key]}</p>}
    </div>
  );

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/3 h-72 w-[600px] -translate-x-1/2 rounded-full bg-accent-blue/10 blur-[140px]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Open to freelance projects, full-time roles, and collaborations. Reach out and I'll get back to you."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* info */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-4 lg:col-span-2"
          >
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white">Get in touch</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Whether you have a project in mind or just want to connect, I'm always happy to talk.
              </p>
              <div className="mt-5 space-y-3">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-accent-cyan">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan"><Mail size={16} /></span>
                  {profile.email}
                </a>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue"><MapPin size={16} /></span>
                  {profile.location}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500">Find me on</p>
              <div className="mt-4 flex gap-3">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl glass text-slate-300 transition-colors hover:text-accent-cyan" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl glass text-slate-300 transition-colors hover:text-accent-cyan" aria-label="GitHub">
                  <Github size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass flex items-center gap-3 rounded-2xl p-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-emerald-300">{profile.availability}</span>
            </motion.div>
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            onSubmit={handleSubmit}
            noValidate
            className="glass-strong rounded-2xl p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {field('name', 'Name')}
              {field('email', 'Email', 'email')}
            </div>
            <div className="mt-4">{field('subject', 'Subject')}</div>
            <div className="mt-4">{field('message', 'Message', 'textarea')}</div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-5 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.01] active:scale-95 sm:w-auto"
            >
              <Send size={16} />
              Send Message
            </button>

            {status === 'success' && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300 ring-1 ring-emerald-500/20">
                <CheckCircle2 size={16} /> Message captured! Backend delivery will be wired up soon.
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-300 ring-1 ring-red-500/20">
                <AlertCircle size={16} /> Please fix the highlighted fields.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
