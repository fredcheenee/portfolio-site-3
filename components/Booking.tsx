import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Clock, Video, Calendar, ArrowRight } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section id="booking" className="bg-base py-32 px-6 border-b border-subtle relative transition-colors duration-300">
       {/* Background Grid */}
        <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(120, 120, 120, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 120, 120, 0.3) 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
            }}
        ></div>

       <div className="max-w-5xl mx-auto">
         <div className="bg-surface border border-subtle p-8 md:p-16 rounded-3xl relative overflow-hidden text-center shadow-2xl shadow-gray-200 dark:shadow-black/50">
           
           <ScrollReveal>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-base rounded-2xl mb-8 border border-subtle text-gray-900 dark:text-white">
                <Calendar size={32} strokeWidth={1.5} />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                Book a Discovery Call
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light mb-10 max-w-xl mx-auto leading-relaxed">
                Let's discuss your automation roadmap. We'll audit your current workflow and identify the highest-ROI opportunities.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-base px-4 py-2 rounded-lg border border-subtle text-sm">
                   <Clock size={16} />
                   <span>1 Hour</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-base px-4 py-2 rounded-lg border border-subtle text-sm">
                   <Video size={16} />
                   <span>Zoom</span>
                </div>
              </div>

              <a 
                href="https://calendly.com/fredcheenee19/new-meeting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black h-14 px-8 text-base font-semibold transition-all duration-200 hover:bg-gray-800 dark:hover:bg-gray-200 rounded-lg hover:scale-105 active:scale-95"
              >
                Select a Time
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
           </ScrollReveal>
         </div>
       </div>
    </section>
  );
};

export default Booking;