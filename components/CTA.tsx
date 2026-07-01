import React from 'react';
import { Mail, Phone, MapPin, Clock, Video, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="bg-section py-28 md:py-32 px-6 border-b border-subtle relative overflow-hidden">
      {/* Ambient accent glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.06] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

        {/* Left: pitch + book */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-accent-node"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// Get started</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-ink-primary tracking-tight mb-6 leading-[1.05]">
            Ready to automate<br />
            <span className="text-ink-muted">your growth?</span>
          </h2>

          <p className="text-lg text-ink-secondary mb-8 leading-relaxed max-w-md">
            Book a free systems audit. We'll map your current workflow and find the highest-ROI things to automate first.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 font-mono text-xs text-ink-secondary border border-subtle bg-surface px-4 py-2 uppercase tracking-wider">
              <Clock size={14} /> 45 min
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-ink-secondary border border-subtle bg-surface px-4 py-2 uppercase tracking-wider">
              <Video size={14} /> Zoom
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-ink-secondary border border-subtle bg-surface px-4 py-2 uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-accent-node opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 bg-accent-node"></span>
              </span>
              1 slot open
            </div>
          </div>

          <a
            href="https://calendly.com/fredcheenee19/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center bg-accent text-white h-14 px-8 text-base font-semibold transition-all duration-200 hover:bg-accent-bright shadow-[0_8px_30px_-8px_var(--accent)]"
          >
            Book your systems audit
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>

        {/* Right: contact channels */}
        <ScrollReveal delay={0.2} className="flex flex-col gap-px bg-subtle border border-subtle">
          <a href="mailto:fredcheenee19@gmail.com" className="group bg-surface p-7 flex items-center gap-5 hover:bg-elevated transition-colors duration-300">
            <div className="flex-shrink-0 p-4 bg-base text-accent border border-subtle group-hover:border-accent transition-colors">
              <Mail size={22} />
            </div>
            <div className="overflow-hidden">
              <h4 className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-1">Email</h4>
              <p className="text-lg font-bold text-ink-primary truncate">fredcheenee19@gmail.com</p>
            </div>
          </a>

          <a href="tel:09272557328" className="group bg-surface p-7 flex items-center gap-5 hover:bg-elevated transition-colors duration-300">
            <div className="flex-shrink-0 p-4 bg-base text-accent border border-subtle group-hover:border-accent transition-colors">
              <Phone size={22} />
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-1">Call</h4>
              <p className="text-lg font-bold text-ink-primary">0927 255 7328</p>
            </div>
          </a>

          <div className="group bg-surface p-7 flex items-center gap-5">
            <div className="flex-shrink-0 p-4 bg-base text-accent border border-subtle">
              <MapPin size={22} />
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-1">Location</h4>
              <p className="text-lg font-bold text-ink-primary">Philippines · Remote worldwide</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
