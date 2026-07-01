import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial Theme Check
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of navbar + padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const links = [
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-base/80 backdrop-blur-md border-subtle py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — node mark */}
        <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative w-4 h-4">
            <div className="absolute inset-0 border border-accent rotate-45 transition-transform group-hover:rotate-[135deg] duration-500"></div>
            <div className="absolute inset-1.5 bg-accent-node"></div>
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-ink-primary">FRED<span className="text-accent">.</span>D</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => scrollToSection(e, l.id)}
              className="font-mono text-xs uppercase tracking-[0.15em] text-ink-secondary hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 border border-subtle hover:border-accent text-ink-secondary hover:text-accent transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-white bg-accent hover:bg-accent-bright transition-colors"
          >
            Book audit
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
            <button
                onClick={toggleTheme}
                className="p-2 border border-subtle text-ink-secondary"
                aria-label="Toggle theme"
            >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
            className="text-ink-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base border-b border-subtle p-6 md:hidden flex flex-col gap-4 animate-fade-in-up shadow-2xl">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => scrollToSection(e, l.id)}
              className="font-mono text-sm uppercase tracking-[0.15em] text-ink-secondary hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="text-white bg-accent text-center py-3 font-mono text-sm uppercase tracking-[0.15em] transition-colors"
          >
            Book audit
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;