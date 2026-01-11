import React from 'react';
import { ArrowRight, Play, Cpu, Zap, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20 pb-16">
      
      {/* Background Ambience - "Glow" effect inspired by Image 2 & 3 but monochromatic */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top center spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full mix-blend-screen"></div>
        {/* Bottom center horizon glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-gray-900 via-black to-transparent opacity-80"></div>
        
        {/* Abstract Grid Mesh - Adding technical texture */}
        <div 
            className="absolute inset-0 opacity-[0.1]" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
            }}
        ></div>
      </div>

      {/* Floating Elements - Abstract shapes inspired by Image 1 */}
      <div className="absolute left-10 top-1/3 w-24 h-24 border border-white/10 opacity-20 hidden lg:block animate-pulse-slow"></div>
      <div className="absolute right-20 bottom-1/3 w-32 h-32 border border-white/10 opacity-20 hidden lg:block" style={{ transform: 'rotate(45deg)'}}></div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Pill Badge */}
        <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-gray-300 hover:border-white/30 transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full opacity-75 bg-green-400"></span>
              <span className="relative inline-flex rounded-sm h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </div>
        </div>

        {/* Headline */}
        <h1 className="max-w-5xl mx-auto text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', lineHeight: 1.1 }}>
          <span className="block text-gray-500">Manual is broken.</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400">
            Automate the rest.
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          I architect self-healing ecosystems for high-growth enterprises using <span className="text-white font-medium">n8n</span>, <span className="text-white font-medium">Make</span>, and <span className="text-white font-medium">HighLevel</span>.
          Stop trading time for output.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center bg-white text-black h-14 px-8 text-base font-semibold transition-all duration-200 hover:bg-gray-200 min-w-[180px]"
          >
            Start Building
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          
          <a
            href="#work"
            className="group inline-flex items-center justify-center border border-white/20 text-white h-14 px-8 text-base font-semibold hover:bg-white/5 transition-all duration-200 min-w-[180px]"
          >
            <Play className="mr-2 w-4 h-4 fill-current opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            <span className="transition-transform duration-300 group-hover:translate-x-1">View Case Studies</span>
          </a>
        </div>

        {/* Trust/Tech Badges - Replaces the bottom logos in Image 2 */}
        <div className="mt-20 pt-10 border-t border-white/10 w-full max-w-4xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-6 font-semibold">Powering systems with</p>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text-based Logos for minimal aesthetic */}
             <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><Cpu size={20}/> n8n</span>
             <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><Zap size={20}/> Zapier</span>
             <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><Activity size={20}/> Make</span>
             <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">GHL</span>
          </div>
        </div>

      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-t from-white/20 to-transparent"></div>
    </section>
  );
};

export default Hero;