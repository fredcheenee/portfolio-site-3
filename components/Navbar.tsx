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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-base/80 backdrop-blur-md border-subtle py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-5 h-5 bg-gray-900 dark:bg-white transition-colors"></div>
          <span className="font-bold text-lg tracking-tight text-gray-900 dark:text-white transition-colors">FRED D.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#services" 
            onClick={(e) => scrollToSection(e, 'services')}
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Services
          </a>
          <a 
            href="#process" 
            onClick={(e) => scrollToSection(e, 'process')}
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Methodology
          </a>
          <a 
            href="#integrations" 
            onClick={(e) => scrollToSection(e, 'integrations')}
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Ecosystem
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Contact
          </a>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a 
            href="#work" 
            onClick={(e) => scrollToSection(e, 'work')}
            className="px-5 py-2.5 text-sm font-bold text-white bg-black dark:text-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors tracking-wide"
          >
            View My Work
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300"
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
            className="text-gray-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base border-b border-subtle p-6 md:hidden flex flex-col gap-4 animate-fade-in-up shadow-2xl">
          <a 
            href="#services" 
            onClick={(e) => scrollToSection(e, 'services')}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-lg font-medium"
          >
            Services
          </a>
          <a 
            href="#process" 
            onClick={(e) => scrollToSection(e, 'process')}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-lg font-medium"
          >
            Methodology
          </a>
          <a 
            href="#integrations" 
            onClick={(e) => scrollToSection(e, 'integrations')}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-lg font-medium"
          >
            Ecosystem
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-lg font-medium"
          >
            Contact
          </a>
          <a 
            href="#work" 
            onClick={(e) => scrollToSection(e, 'work')}
            className="text-white bg-black dark:text-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-center py-3 font-bold uppercase tracking-wide transition-colors"
          >
            View My Work
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;