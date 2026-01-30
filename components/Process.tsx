import React from 'react';
import ScrollReveal from './ScrollReveal';

const Process: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Audit & Blueprint",
      description: "We don't guess. I dissect your current manual workflows to identify redundancy. You receive a complete architectural logic map before a single line of code is written."
    },
    {
      id: "02",
      title: "Development",
      description: "Building the engine. I implement robust, error-handled workflows using n8n or Make. APIs are connected, edge cases are covered, and data integrity is enforced."
    },
    {
      id: "03",
      title: "Deploy & Handover",
      description: "Stress testing with live data. Once optimized, I provide video documentation and training, ensuring your team can manage the system without constant dependency."
    }
  ];

  return (
    <section id="process" className="bg-section py-32 px-6 border-b border-subtle relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <ScrollReveal className="mb-24">
           <span className="inline-block py-1 px-2 border border-subtle bg-surface text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">
              Methodology
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
              Simple by design. <br />
              <span className="text-gray-500 dark:text-gray-500">Complex under the hood.</span>
            </h2>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.2} className="h-full">
              <div className="group relative h-full bg-gray-200 dark:bg-surface border border-subtle p-8 transition-all duration-300 hover:shadow-xl dark:hover:shadow-none hover:border-black/20 dark:hover:border-white/20">
                
                {/* Big Number Background */}
                <div className="absolute top-0 right-0 p-4 text-7xl font-bold text-black/[0.04] dark:text-white/[0.03] select-none pointer-events-none group-hover:text-black/[0.08] dark:group-hover:text-white/[0.06] transition-colors duration-500 font-sans">
                  {step.id}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                   {/* Accent Line */}
                   <div className="w-12 h-1 bg-green-500 mb-6"></div>
                   
                   <h3 className="text-2xl font-bold !text-black dark:!text-white mb-4">{step.title}</h3>
                   <p className="!text-black dark:!text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                    {step.description}
                   </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;