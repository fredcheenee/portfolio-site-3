import React from 'react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-base py-32 px-6 border-b border-subtle relative overflow-hidden transition-colors duration-300">
        {/* Background Texture */}
        <div 
            className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(120, 120, 120, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 120, 120, 0.3) 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
            }}
        ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Image */}
          <ScrollReveal>
             <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none overflow-hidden bg-surface border border-subtle group">
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
                    alt="Fred D. - Automation Specialist" 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-60"></div>
                
                {/* Decorative Tech Elements */}
                <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-gray-900 dark:border-white/30"></div>
                <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-gray-900 dark:border-white/30"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-gray-900 dark:border-white/30"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-gray-900 dark:border-white/30"></div>
             </div>
          </ScrollReveal>

          {/* Right Column - Content */}
          <ScrollReveal delay={0.2} className="flex flex-col justify-center">
            <span className="inline-block py-1 px-2 border border-subtle bg-surface text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-8 w-fit">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-8">
              Reliability is <br/>
              <span className="text-gray-500">the only metric.</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed font-light text-lg">
                <p>
                  I am an Automation Specialist obsessed with building self-healing systems for growing businesses.
                </p>
                <p>
                    Most agencies build happy paths—workflows that work when everything is perfect. I build for the edge cases. My approach ensures that when an API fails or data is malformed, your business doesn't grind to a halt.
                </p>
                <p>
                    I bring a software engineering mindset to no-code tools, implementing robust error handling, data validation, and automated retries. The result is an ecosystem that scales effortlessly as you grow.
                </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-subtle flex items-center gap-4">
                <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center border border-subtle text-gray-900 dark:text-white font-bold text-sm">
                    FD
                </div>
                <div>
                    <div className="text-gray-900 dark:text-white font-semibold text-sm">Fred D.</div>
                    <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Automation Specialist</div>
                </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default About;