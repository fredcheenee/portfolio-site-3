import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Search, TrendingUp, Target } from 'lucide-react';

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

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              ABOUT <span className="text-green-600 dark:text-green-500">ME</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Hi, I'm Fred! I am an Automation Specialist and Technical Virtual Assistant focused on building reliable systems, automation, and clean execution.
            </p>
        </ScrollReveal>

        {/* Main Content Container */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-3xl bg-surface border border-subtle p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-green-900/5 dark:shadow-green-900/20">
            {/* Subtle Green Top Border/Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
            
            {/* My Journey Subsection */}
            <div className="mb-20 max-w-4xl mx-auto text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center md:justify-start gap-3">
                 My Journey
              </h3>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                <p>
                  It started when I saw how much time businesses were losing to repetitive tasks. I realized automation isn’t just about saving time — it’s about creating systems that scale and don’t break.
                </p>
                <p>
                  Now, I specialize in building workflows using GoHighLevel, Zapier, and CRM platforms that help businesses reduce manual work, respond faster, and operate with consistency.
                </p>
              </div>
            </div>

            {/* Unique Approach Subsection - Grid */}
            <div className="mb-20">
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center">My Unique Approach</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className="bg-base border border-subtle p-8 rounded-2xl hover:border-green-500/50 transition-colors duration-300 group text-center md:text-left h-full">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                        <Search size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Audit First</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      I don’t automate broken processes — I analyze and fix them first.
                    </p>
                  </div>

                   {/* Card 2 */}
                   <div className="bg-base border border-subtle p-8 rounded-2xl hover:border-green-500/50 transition-colors duration-300 group text-center md:text-left h-full">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                        <TrendingUp size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Scale Smart</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Every system I build is designed to grow with your business.
                    </p>
                  </div>

                   {/* Card 3 */}
                   <div className="bg-base border border-subtle p-8 rounded-2xl hover:border-green-500/50 transition-colors duration-300 group text-center md:text-left h-full">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                        <Target size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Results Focus</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                       Success is measured in hours saved, errors reduced, and revenue supported.
                    </p>
                  </div>
               </div>
            </div>

            {/* Closing Paragraphs */}
            <div className="text-center max-w-4xl mx-auto border-t border-subtle pt-12">
               <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                <p>
                  I help service-based businesses and agencies replace manual work with smart automation that runs in the background.
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  Whether it’s lead capture, CRM setup, appointment booking, follow-ups, or integrations — I build systems that work even when things go wrong.
                </p>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;