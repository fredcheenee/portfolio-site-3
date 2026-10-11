import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { scrollToSection, BOOKING_URL } from './scroll';

const links = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.theme = next ? 'dark' : 'light';
  };

  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    scrollToSection(e, id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-base/90 backdrop-blur-md border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-page mx-auto px-6 h-[72px] flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-semibold text-lg tracking-tight text-ink">
          Fred D.
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => go(e, l.id)} className="text-sm font-medium text-muted hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full text-muted hover:text-ink hover:bg-surface transition-colors" aria-label="Toggle theme">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm font-semibold rounded-md bg-ink text-paper hover:bg-accent hover:text-accent-ink transition-colors">
            Book a call
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggleTheme} className="p-2 rounded-full text-muted" aria-label="Toggle theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="p-2 text-ink" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base border-b border-line px-6 py-6 md:hidden flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => go(e, l.id)} className="text-lg font-medium text-ink">
              {l.label}
            </a>
          ))}
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-center py-3 rounded-md bg-ink text-paper font-semibold">
            Book a call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
