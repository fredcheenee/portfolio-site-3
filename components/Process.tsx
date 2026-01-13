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
    <section id="process" className="bg-section py-32 px-6 border-b border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <ScrollReveal className="mb-24">
           <span className="inline-block py-1 px-2 border border-subtle bg-surface text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">
              Methodology
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Simple by design. <br />
              <span className="text-gray-500">Complex under the hood.</span>
            </h2>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.2} className="group relative">
              {/* Top Line Indicator */}
              <div className="w-full h-px bg-subtle mb-8 group-hover:bg-white/30 transition-colors duration-500"></div>
              
              {/* Big Number Background */}
              <div className="absolute -top-12 -left-2 text-9xl font-bold text-white/[0.02] select-none pointer-events-none group-hover:text-white/[0.04] transition-colors duration-500 font-sans">
                {step.id}
              </div>

              {/* Content */}
              <div className="relative pl-2">
                <span className="font-mono text-sm text-green-400 mb-3 block opacity-80">STEP {step.id}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="!text-white leading-relaxed text-sm md:text-base font-normal" style={{ color: '#ffffff' }}>
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;