import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import HeroBackground from './HeroBackground';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  const tools = [
    "GoHighLevel", "n8n", "Make", "Zapier", "OpenAI", "Claude",
    "Airtable", "Supabase", "HubSpot", "Shopify", "Slack", "Stripe",
  ];
  const marqueeTools = [...tools, ...tools, ...tools, ...tools];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-base pt-24 pb-16">

      <HeroBackground />

      {/* Vignette so content stays legible over the network */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,transparent,var(--bg-base)_85%)]"></div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">

        {/* Status badge — schematic style */}
        <ScrollReveal delay={0.1} className="mb-8">
          <div className="inline-flex items-center gap-2.5 border border-subtle bg-surface/70 backdrop-blur-sm px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-secondary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-accent-node opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-accent-node"></span>
            </span>
            Available · 1 build slot open
          </div>
        </ScrollReveal>

        {/* Mono kicker */}
        <ScrollReveal delay={0.15}>
          <p className="font-mono text-xs md:text-sm text-accent uppercase tracking-[0.3em] mb-6">
            // AI &amp; Automation Systems
          </p>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.2} className="mb-8 max-w-5xl">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance" style={{ lineHeight: 1.05 }}>
            <span className="block text-ink-muted">Stop doing the work twice.</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-accent-bright via-accent to-accent-node">
              Automate it once.
            </span>
          </h1>
        </ScrollReveal>

        {/* Subheading */}
        <ScrollReveal delay={0.3} className="mb-10 max-w-2xl">
          <p className="text-lg md:text-xl text-ink-secondary leading-relaxed text-balance">
            I'm <span className="text-ink-primary font-medium">Fred</span> — I design AI-driven automation systems with
            <span className="text-ink-primary font-medium"> n8n</span>,
            <span className="text-ink-primary font-medium"> Make</span> and
            <span className="text-ink-primary font-medium"> GoHighLevel</span> that run your operations in the background.
            Reliable, observable, built to scale.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal delay={0.4} width="auto" className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="group relative inline-flex items-center justify-center bg-accent text-white h-14 px-8 text-base font-semibold transition-all duration-200 hover:bg-accent-bright min-w-[200px] shadow-[0_0_0_1px_var(--accent),0_8px_30px_-8px_var(--accent)] hover:shadow-[0_0_0_1px_var(--accent-bright),0_12px_40px_-8px_var(--accent)]"
          >
            Book a systems audit
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#work"
            onClick={(e) => scrollToSection(e, 'work')}
            className="group inline-flex items-center justify-center border border-strong text-ink-primary h-14 px-8 text-base font-semibold hover:border-accent hover:text-accent transition-all duration-200 min-w-[200px] bg-surface/40 backdrop-blur-sm"
          >
            <Play className="mr-2 w-4 h-4 fill-current opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            <span className="transition-transform duration-300 group-hover:translate-x-1">See the builds</span>
          </a>
        </ScrollReveal>

        {/* Stack marquee */}
        <ScrollReveal delay={0.6} className="mt-24 w-full max-w-full overflow-hidden">
          <p className="font-mono text-[11px] text-center text-ink-muted uppercase tracking-[0.3em] mb-8">
            Stack I build on
          </p>
          <div className="relative w-full overflow-hidden group">
            <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-base to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-base to-transparent z-10 pointer-events-none"></div>
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
              {marqueeTools.map((tool, i) => (
                <div key={i} className="px-2.5">
                  <div className="px-5 py-2.5 border border-subtle bg-surface/50 backdrop-blur-sm font-mono text-sm text-ink-secondary whitespace-nowrap hover:border-accent hover:text-accent transition-colors cursor-default">
                    {tool}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-accent/40 to-transparent"></div>
    </section>
  );
};

export default Hero;
