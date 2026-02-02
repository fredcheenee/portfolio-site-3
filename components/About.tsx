import React from 'react';
import { Search, TrendingUp, Target } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-base relative border-b border-subtle transition-colors duration-300 py-32">
        {/* Background Texture - Fixed to section */}
        <div 
            className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(120, 120, 120, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 120, 120, 0.3) 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
            }}
        ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              ABOUT <span className="text-green-600 dark:text-green-500">ME</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Hi, I'm Fred! I am an Automation Specialist and Technical Virtual Assistant focused on building reliable systems, automation, and clean execution.
            </p>
        </ScrollReveal>

        {/* Content Container - Centered */}
        <div className="max-w-4xl mx-auto">
             
             {/* 1. Journey Text */}
             <ScrollReveal delay={0.1} className="bg-surface border border-subtle p-8 md:p-12 rounded-3xl shadow-lg dark:shadow-green-900/5 mb-20 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-green-500 rounded-full inline-block"></span>
                        My Journey
                </h3>
                <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                    <p>
                    It started when I saw how much time businesses were losing to repetitive tasks. I realized automation isn’t just about saving time — it’s about creating systems that scale and don’t break.
                    </p>
                    <p>
                    Now, I specialize in building workflows using GoHighLevel, Zapier, and CRM platforms that help businesses reduce manual work, respond faster, and operate with consistency.
                    </p>
                    <p>
                    I help service-based businesses and agencies replace manual work with smart automation that runs in the background.
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white pt-4 border-t border-subtle">
                    Whether it’s lead capture, CRM setup, appointment booking, follow-ups, or integrations — I build systems that work even when things go wrong.
                    </p>
                </div>
            </ScrollReveal>

            {/* 2. Unique Approach */}
            <div>
                <ScrollReveal delay={0.2} className="text-center mb-10">
                     <h3 className="text-3xl font-bold text-gray-900 dark:text-white">My Unique Approach</h3>
                </ScrollReveal>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <ScrollReveal delay={0.3} className="h-full">
                        <div className="bg-surface border border-subtle p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-green-500/50 transition-colors duration-300 shadow-lg dark:shadow-green-900/5 h-full">
                            <div className="shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400">
                                <Search size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Audit First</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    I don't automate broken processes — I analyze and fix them first to ensure a solid foundation.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Card 2 */}
                    <ScrollReveal delay={0.4} className="h-full">
                        <div className="bg-surface border border-subtle p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-green-500/50 transition-colors duration-300 shadow-lg dark:shadow-green-900/5 h-full">
                            <div className="shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Scale Smart</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Every system I build is designed to grow with your business, handling increased load effortlessly.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Card 3 */}
                    <ScrollReveal delay={0.5} className="h-full">
                        <div className="bg-surface border border-subtle p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-green-500/50 transition-colors duration-300 shadow-lg dark:shadow-green-900/5 h-full">
                            <div className="shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400">
                                <Target size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Results Focus</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Success is measured in hours saved, errors reduced, and revenue supported, not just complexity.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;