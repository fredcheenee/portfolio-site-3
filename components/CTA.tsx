import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CTA: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic would go here
    alert("Thanks for the inquiry. This is a demo.");
  };

  return (
    <section id="contact" className="bg-section py-32 px-6 border-b border-subtle relative overflow-hidden">
       {/* Background Ambience */}
       <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
            }}
        ></div>
        
        {/* Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Copy */}
            <ScrollReveal>
                <span className="inline-block py-1 px-2 border border-subtle bg-surface text-xs font-mono uppercase tracking-widest text-gray-400 mb-8">
                  Get Started
                </span>
                
                <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-8 leading-tight">
                  Ready to automate <br />
                  <span className="text-gray-500">your growth?</span>
                </h2>
                
                <p className="text-xl text-gray-400 font-light mb-12 leading-relaxed max-w-md">
                  Stop trading time for output. Fill out the form to map out your new architecture and identify immediate bottlenecks.
                </p>

                <div className="flex items-center gap-3 text-sm font-mono text-gray-400 border border-subtle bg-surface w-fit px-4 py-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full opacity-75 bg-green-400"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    ACCEPTING NEW PROJECTS FOR Q4
                </div>
            </ScrollReveal>

            {/* Right Column: Form */}
            <ScrollReveal delay={0.2} className="bg-surface border border-subtle p-8 md:p-10 relative">
                 <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div>
                        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Name</label>
                        <input 
                            type="text" 
                            id="name"
                            className="w-full bg-base border border-subtle px-4 py-4 text-white focus:border-white/40 focus:outline-none transition-colors placeholder-gray-800"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Work Email</label>
                        <input 
                            type="email" 
                            id="email"
                            className="w-full bg-base border border-subtle px-4 py-4 text-white focus:border-white/40 focus:outline-none transition-colors placeholder-gray-800"
                            placeholder="john@company.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Project Details</label>
                        <textarea 
                            id="message"
                            rows={4}
                            className="w-full bg-base border border-subtle px-4 py-4 text-white focus:border-white/40 focus:outline-none transition-colors placeholder-gray-800 resize-none"
                            placeholder="Tell me about your current manual workflows..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full group relative flex items-center justify-center bg-white text-black h-14 px-8 text-sm font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors mt-2"
                    >
                        Send Inquiry
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </form>
            </ScrollReveal>
        </div>
    </section>
  );
};

export default CTA;