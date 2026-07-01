import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-base py-20 px-6 border-t border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="relative w-4 h-4">
                <div className="absolute inset-0 border border-accent rotate-45"></div>
                <div className="absolute inset-1.5 bg-accent-node"></div>
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-ink-primary">FRED<span className="text-accent">.</span>D</span>
            </div>
            <p className="text-ink-secondary leading-relaxed text-sm max-w-sm">
              I design and build AI-driven automation systems that run your operations in the background — reliable, observable, built to scale.
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="text-sm text-ink-secondary hover:text-accent transition-colors">Services</a></li>
              <li><a href="#work" onClick={(e) => scrollTo(e, 'work')} className="text-sm text-ink-secondary hover:text-accent transition-colors">Work</a></li>
              <li><a href="#process" onClick={(e) => scrollTo(e, 'process')} className="text-sm text-ink-secondary hover:text-accent transition-colors">Process</a></li>
              <li><a href="#about" onClick={(e) => scrollTo(e, 'about')} className="text-sm text-ink-secondary hover:text-accent transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-6">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:fredcheenee19@gmail.com" className="text-sm text-ink-secondary hover:text-accent transition-colors">Email</a></li>
              <li><a href="https://calendly.com/fredcheenee19/new-meeting" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-secondary hover:text-accent transition-colors">Book a call</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-6">Connect</h4>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 border border-subtle text-ink-secondary hover:text-accent hover:border-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 border border-subtle text-ink-secondary hover:text-accent hover:border-accent transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-xs text-ink-muted">&copy; {year} FRED.D — All rights reserved.</div>
          <div className="font-mono text-xs text-ink-muted">Built to run itself.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
