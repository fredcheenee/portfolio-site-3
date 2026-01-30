import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="bg-section py-32 px-6 border-b border-subtle relative overflow-hidden transition-colors duration-300">
       {/* Background Ambience */}
       <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(120, 120, 120, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 120, 120, 0.3) 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
            }}
        ></div>
        
        {/* Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-black/[0.02] dark:bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Copy */}
            <ScrollReveal>
                <span className="inline-block py-1 px-2 border border-subtle bg-surface text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-8">
                  Get Started
                </span>
                
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-8 leading-tight">
                  Ready to automate <br />
                  <span className="text-gray-500">your growth?</span>
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-400 font-light mb-12 leading-relaxed max-w-md">
                  Stop trading time for output. Reach out directly to map out your new architecture and identify immediate bottlenecks.
                </p>

                <div className="flex items-center gap-3 text-sm font-mono text-gray-600 dark:text-gray-400 border border-subtle bg-surface w-fit px-4 py-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full opacity-75 bg-green-400"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    ACCEPTING NEW PROJECTS FOR Q4
                </div>
            </ScrollReveal>

            {/* Right Column: Contact Details */}
            <ScrollReveal delay={0.2} className="flex flex-col gap-6">
                 {/* Email Card */}
                 <a href="mailto:fredcheenee19@gmail.com" className="group bg-surface border border-subtle p-8 flex items-center gap-6 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300">
                    <div className="flex-shrink-0 p-4 bg-base rounded-full text-gray-900 dark:text-white border border-subtle group-hover:border-green-500 group-hover:text-green-500 transition-colors">
                        <Mail size={24} />
                    </div>
                    <div className="overflow-hidden">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-1">Email Me</h4>
                        <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white truncate">fredcheenee19@gmail.com</p>
                    </div>
                </a>

                {/* Phone Card */}
                <a href="tel:09272557328" className="group bg-surface border border-subtle p-8 flex items-center gap-6 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300">
                    <div className="flex-shrink-0 p-4 bg-base rounded-full text-gray-900 dark:text-white border border-subtle group-hover:border-green-500 group-hover:text-green-500 transition-colors">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-1">Call Me</h4>
                        <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">0927 255 7328</p>
                    </div>
                </a>

                {/* Location Card */}
                <div className="group bg-surface border border-subtle p-8 flex items-center gap-6 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300">
                    <div className="flex-shrink-0 p-4 bg-base rounded-full text-gray-900 dark:text-white border border-subtle group-hover:border-green-500 group-hover:text-green-500 transition-colors">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-1">Location</h4>
                        <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Philippines</p>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>
  );
};

export default CTA;