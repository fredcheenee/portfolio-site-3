import React from 'react';
import { Search, TrendingUp, Target } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  const approach = [
    { icon: <Search size={22} />, title: "Audit first", desc: "I don't automate broken processes — I analyse and fix them first so the foundation is solid." },
    { icon: <TrendingUp size={22} />, title: "Scale smart", desc: "Every system is designed to grow with your business and handle increased load without breaking." },
    { icon: <Target size={22} />, title: "Results focus", desc: "Success is measured in hours saved and errors removed — not in how clever the build looks." },
  ];

  return (
    <section id="about" className="bg-base relative border-b border-subtle py-28 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <ScrollReveal className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-accent-node"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// About</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-primary tracking-tight leading-[1.05] mb-6">
            Hi, I'm Fred.
          </h2>
          <p className="text-lg md:text-xl text-ink-secondary leading-relaxed">
            An automation and AI systems builder focused on reliable systems, clean execution and work that runs itself.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-stretch">
          {/* Image */}
          <ScrollReveal className="relative min-h-[360px] lg:min-h-full">
            <div className="absolute inset-0 overflow-hidden border border-subtle group">
              <img
                src="https://raw.githubusercontent.com/fredcheenee/portfolio-images/refs/heads/main/about%20me%20image.jpg"
                alt="Fred at his workstation"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent mix-blend-multiply dark:mix-blend-screen transition-opacity duration-500 group-hover:opacity-0"></div>
              <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 bg-black/40 px-2 py-1">operator.jpg</span>
            </div>
          </ScrollReveal>

          {/* Journey */}
          <ScrollReveal delay={0.1} className="bg-surface border border-subtle p-8 md:p-12 flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold text-ink-primary mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-accent inline-block"></span>
              My journey
            </h3>
            <div className="space-y-5 text-ink-secondary leading-relaxed">
              <p>It started when I saw how much time businesses lose to repetitive tasks. Automation isn't just about saving time — it's about building systems that scale and don't break.</p>
              <p>Now I build workflows with GoHighLevel, n8n, Make and custom code that help businesses cut manual work, respond faster and operate with consistency.</p>
              <p className="font-medium text-ink-primary pt-4 border-t border-subtle">
                Lead capture, CRM, booking, follow-ups, AI agents or integrations — I build systems that keep working even when things go wrong.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Approach */}
        <ScrollReveal delay={0.1} className="mb-10">
          <h3 className="font-display text-2xl font-bold text-ink-primary text-center">How I work</h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-subtle border border-subtle">
          {approach.map((card, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.1} className="h-full">
              <div className="bg-surface p-8 flex flex-col items-start gap-4 hover:bg-elevated transition-colors duration-300 h-full">
                <div className="w-12 h-12 border border-subtle flex items-center justify-center text-accent">
                  {card.icon}
                </div>
                <h4 className="font-display text-lg font-bold text-ink-primary">{card.title}</h4>
                <p className="text-sm text-ink-secondary leading-relaxed">{card.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
