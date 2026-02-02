import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import HeroBackground from './HeroBackground';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height compensation
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const tools = [
    "GoHighLevel", "Zapier", "HubSpot", "Shopify", "WordPress", 
    "Make (Integromat)", "Monday.com", "Airtable", "n8n", 
    "ChatGPT", "Grok", "Claude", "Photoshop", "Canva"
  ];

  // Quadruple the array to ensure seamless looping on large screens
  const marqueeTools = [...tools, ...tools, ...tools, ...tools];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-base pt-20 pb-16 transition-colors duration-300">
      
      {/* Three.js Particle Background */}
      <HeroBackground />

      {/* Abstract Grid Mesh - Kept for texture, but lowered opacity to let particles shine */}
      <div 
          className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" 
          style={{ 
              backgroundImage: `linear-gradient(rgba(120, 120, 120, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 120, 120, 0.3) 1px, transparent 1px)`, 
              backgroundSize: '40px 40px' 
          }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Pill Badge */}
        <ScrollReveal delay={0.1} className="mb-8">
          <div className="inline-flex items-center gap-2 border border-subtle bg-surface/80 backdrop-blur-sm px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-300 hover:border-black/20 dark:hover:border-white/20 transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full opacity-75 bg-green-400"></span>
              <span className="relative inline-flex rounded-sm h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.2} className="mb-8 max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300" style={{ lineHeight: 1.1 }}>
            <span className="block text-gray-400 dark:text-gray-500">Manual is broken.</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-800 to-gray-500 dark:from-white dark:via-white dark:to-gray-400">
              Automate the rest.
            </span>
          </h1>
        </ScrollReveal>

        {/* Subheading */}
        <ScrollReveal delay={0.3} className="mb-10 max-w-2xl">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed transition-colors duration-300">
            I architect self-healing ecosystems for high-growth enterprises using <span className="text-black dark:text-white font-medium">n8n</span>, <span className="text-black dark:text-white font-medium">Make</span>, and <span className="text-black dark:text-white font-medium">HighLevel</span>.
            Stop trading time for output.
          </p>
        </ScrollReveal>

        {/* CTA Group */}
        <ScrollReveal delay={0.4} width="auto" className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="group relative inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black h-14 px-8 text-base font-semibold transition-all duration-200 hover:bg-gray-800 dark:hover:bg-gray-200 min-w-[180px]"
          >
            Start Building
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          
          <a
            href="#work"
            onClick={(e) => scrollToSection(e, 'work')}
            className="group inline-flex items-center justify-center border border-black/10 dark:border-white/20 text-black dark:text-white h-14 px-8 text-base font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 min-w-[180px] bg-white/50 dark:bg-black/50 backdrop-blur-sm"
          >
            <Play className="mr-2 w-4 h-4 fill-current opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            <span className="transition-transform duration-300 group-hover:translate-x-1">View my Work</span>
          </a>
        </ScrollReveal>

        {/* Tools Marquee */}
        <ScrollReveal delay={0.6} className="mt-24 w-full max-w-full overflow-hidden">
          <p className="text-xs text-center text-gray-500 dark:text-gray-600 uppercase tracking-widest mb-8 font-semibold transition-colors duration-300">
            Tools I Use
          </p>
          
          <div className="relative w-full overflow-hidden group">
             {/* Gradient Masks */}
             <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-base to-transparent z-10 pointer-events-none transition-colors duration-300"></div>
             <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-base to-transparent z-10 pointer-events-none transition-colors duration-300"></div>
             
             <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                {marqueeTools.map((tool, i) => (
                    <div key={i} className="px-3">
                         <div className="px-6 py-3 rounded-full border border-subtle bg-surface/50 backdrop-blur-sm text-sm md:text-base font-medium text-black dark:text-gray-400 whitespace-nowrap hover:border-green-500/50 hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-default">
                            {tool}
                         </div>
                    </div>
                ))}
             </div>
          </div>
        </ScrollReveal>

      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-1/2 w-px h-16 bg-gradient-to-t from-black/10 dark:from-white/20 to-transparent transition-colors duration-300"></div>
    </section>
  );
};

export default Hero;