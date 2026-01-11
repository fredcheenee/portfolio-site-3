import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          ? 'bg-black/80 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-5 h-5 bg-white"></div>
          <span className="font-bold text-lg tracking-tight">FRED D.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#services" 
            onClick={(e) => scrollToSection(e, 'services')}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Services
          </a>
          <a 
            href="#process" 
            onClick={(e) => scrollToSection(e, 'process')}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Methodology
          </a>
          <a 
            href="#integrations" 
            onClick={(e) => scrollToSection(e, 'integrations')}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Ecosystem
          </a>
          <a 
            href="#work" 
            onClick={(e) => scrollToSection(e, 'work')}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Work
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-4 animate-fade-in-up shadow-2xl">
          <a 
            href="#services" 
            onClick={(e) => scrollToSection(e, 'services')}
            className="text-gray-400 hover:text-white text-lg font-medium"
          >
            Services
          </a>
          <a 
            href="#process" 
            onClick={(e) => scrollToSection(e, 'process')}
            className="text-gray-400 hover:text-white text-lg font-medium"
          >
            Methodology
          </a>
          <a 
            href="#integrations" 
            onClick={(e) => scrollToSection(e, 'integrations')}
            className="text-gray-400 hover:text-white text-lg font-medium"
          >
            Ecosystem
          </a>
          <a 
            href="#work" 
            onClick={(e) => scrollToSection(e, 'work')}
            className="text-gray-400 hover:text-white text-lg font-medium"
          >
            Work
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="text-gray-400 hover:text-white text-lg font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;