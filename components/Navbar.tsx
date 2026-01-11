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
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white"></div>
          <span className="font-bold text-lg tracking-tight">FRED D.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Methodology</a>
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Case Studies</a>
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</a>
          <a
            href="#"
            className="text-sm font-semibold bg-white text-black px-5 py-2 hover:bg-gray-200 transition-colors"
          >
            Book Call
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
        <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-4 animate-fade-in-up">
          <a href="#" className="text-gray-400 hover:text-white">Methodology</a>
          <a href="#" className="text-gray-400 hover:text-white">Case Studies</a>
          <a href="#" className="text-gray-400 hover:text-white">Pricing</a>
          <a href="#" className="text-white font-semibold">Book Call</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;