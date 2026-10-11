import React from 'react';
import { ArrowRight } from 'lucide-react';
import { scrollToSection, BOOKING_URL } from './scroll';

const Hero: React.FC = () => {
  return (
    <section className="pt-36 pb-20 md:pt-44 md:pb-28 px-6">
      <div className="max-w-page mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new projects
          </div>

          <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem] font-semibold tracking-[-0.03em] text-ink mb-7 max-w-[13ch]">
            I build the automation that runs your business in the background.
          </h1>

          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-[52ch] mb-10">
            Lead capture, CRM, booking, follow-ups and AI agents, built in n8n, Make, GoHighLevel and custom code for service businesses and agencies.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-13 px-7 py-3.5 rounded-md bg-accent text-accent-ink font-semibold hover:brightness-110 transition">
              Book a call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="inline-flex items-center justify-center h-13 px-7 py-3.5 rounded-md border border-line bg-surface text-ink font-semibold hover:border-ink transition-colors">
              See my work
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 lg:justify-self-end w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-accent-soft" aria-hidden="true"></div>
            <img
              src="/images/fred.webp"
              alt="Fred, automation specialist"
              width={960}
              height={960}
              className="relative w-full aspect-square object-cover rounded-[1.5rem] border border-line"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
