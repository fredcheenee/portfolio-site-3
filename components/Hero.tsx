import React from 'react';
import { ArrowRight, Play, Cpu, Zap, Activity } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-base pt-20 pb-16">
      
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white/[0.04] blur-[120px] rounded-full pointer-events-none"></div>

      {/* Abstract Grid Mesh - Adding technical texture (low opacity) */}
      <div 
          className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none" 
          style={{ 
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`, 
              backgroundSize: '40px 40px' 
          }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Pill Badge */}
        <ScrollReveal delay={0.1} className="mb-8">
          <div className="inline-flex items-center gap-2 border border-subtle bg-surface backdrop-blur-sm px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-gray-300 hover:border-white/20 transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full opacity-75 bg-green-400"></span>
              <span className="relative inline-flex rounded-sm h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.2} className="mb-8 max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white" style={{ lineHeight: 1.1 }}>
            <span className="block text-gray-500">Manual is broken.</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400">
              Automate the rest.
            </span>
          </h1>
        </ScrollReveal>

        {/* Subheading */}
        <ScrollReveal delay={0.3} className="mb-10 max-w-2xl">
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            I architect self-healing ecosystems for high-growth enterprises using <span className="text-white font-medium">n8n</span>, <span className="text-white font-medium">Make</span>, and <span className="text-white font-medium">HighLevel</span>.
            Stop trading time for output.
          </p>
        </ScrollReveal>

        {/* CTA Group */}
        <ScrollReveal delay={0.4} width="auto" className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </ScrollReveal>

        {/* Trust/Tech Badges */}
        <ScrollReveal delay={0.6} className="mt-20 pt-10 border-t border-subtle w-full max-w-4xl">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-6 font-semibold">Powering systems with</p>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><Cpu size={20}/> n8n</span>
             <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><Zap size={20}/> Zapier</span>
             <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><Activity size={20}/> Make</span>
             <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">GHL</span>
          </div>
        </ScrollReveal>

      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-t from-white/20 to-transparent"></div>
    </section>
  );
};

export default Hero;