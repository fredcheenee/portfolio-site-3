import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/10 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
            }}
        ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand Column (Span 5) */}
            <div className="md:col-span-5">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-4 h-4 bg-white"></div>
                    <span className="font-bold text-lg tracking-tight text-white">FRED D.</span>
                </div>
                <p className="text-gray-500 leading-relaxed text-sm max-w-sm">
                    Architecting self-healing automation systems for high-growth enterprises. 
                    Replacing manual chaos with code-perfect execution.
                </p>
            </div>

            {/* Links Column 1 */}
            <div className="md:col-span-2 md:col-start-7">
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">Explore</h4>
                <ul className="space-y-3">
                    <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Methodology</a></li>
                    <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                    <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a></li>
                    <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Process</a></li>
                </ul>
            </div>

            {/* Links Column 2 */}
            <div className="md:col-span-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">Legal</h4>
                <ul className="space-y-3">
                    <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
            </div>

             {/* Socials Column */}
             <div className="md:col-span-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">Connect</h4>
                <div className="flex gap-4">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} strokeWidth={1.5} /></a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} strokeWidth={1.5} /></a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={20} strokeWidth={1.5} /></a>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="text-xs text-gray-600 font-mono">
                &copy; {new Date().getFullYear()} FRED D. ALL RIGHTS RESERVED.
            </div>
            <div className="text-xs text-gray-600 font-mono">
                DESIGNED FOR SCALE.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;