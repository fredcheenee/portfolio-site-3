import React from 'react';
import { scrollToSection } from './scroll';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-10 border-t border-line">
      <div className="max-w-page mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Fred D. Automation specialist, Philippines.
        </div>
        <nav className="flex flex-wrap gap-6 text-sm">
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-muted hover:text-ink transition-colors">Services</a>
          <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="text-muted hover:text-ink transition-colors">Work</a>
          <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="text-muted hover:text-ink transition-colors">Process</a>
          <a href="mailto:fredcheenee19@gmail.com" className="text-muted hover:text-ink transition-colors">Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink transition-colors">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
