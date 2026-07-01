import React from 'react';
import { Search, Hammer, Zap, Activity } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Process: React.FC = () => {
  const steps = [
    {
      id: "01",
      icon: <Search className="w-5 h-5" />,
      title: "Audit",
      description: "I map your current workflows and find the repetitive, error-prone work worth automating — before writing a line of code.",
    },
    {
      id: "02",
      icon: <Hammer className="w-5 h-5" />,
      title: "Build",
      description: "Robust, error-handled workflows in n8n, Make or GoHighLevel. APIs connected, edge cases covered, data integrity enforced.",
    },
    {
      id: "03",
      icon: <Zap className="w-5 h-5" />,
      title: "Automate",
      description: "Stress-tested with live data, then handed over with video docs and training so your team owns the system.",
    },
    {
      id: "04",
      icon: <Activity className="w-5 h-5" />,
      title: "Monitor",
      description: "Logging and alerts so failures surface early. The system keeps running — and self-heals — while you focus on the business.",
    },
  ];

  return (
    <section id="process" className="bg-base py-28 md:py-32 px-6 border-b border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <ScrollReveal className="mb-20 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-accent-node"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// Process</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-primary tracking-tight leading-[1.05]">
            Simple by design.<br />
            <span className="text-ink-muted">Resilient under the hood.</span>
          </h2>
        </ScrollReveal>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
          {/* Connector line */}
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent/10 via-accent/40 to-accent/10"></div>

          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.15} className="relative md:px-5">
              {/* Node */}
              <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface border border-strong flex items-center justify-center text-accent">
                  {step.icon}
                </div>
                <span className="font-mono text-xs text-ink-muted tracking-widest">{step.id}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-ink-primary mb-3">{step.title}</h3>
              <p className="text-ink-secondary text-sm leading-relaxed md:pr-4">{step.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
