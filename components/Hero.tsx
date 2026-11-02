import React, { Suspense, lazy } from 'react';
import { ArrowRight } from 'lucide-react';
import { scrollToSection, BOOKING_URL } from './scroll';

// three.js is heavy, so the badge loads after the text is on screen
const Lanyard = lazy(() => import('./Lanyard'));

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

        {/* Hanging ID badge. On desktop the canvas runs up to the top of the page so the strap comes from under
            the navbar, and far out to both sides so a hard swing is never cut off. The canvas lets clicks through,
            so only this column's own box takes the touch-action rule that stops horizontal drags from scrolling. */}
        <div className="lg:col-span-5 relative h-[440px] sm:h-[500px] lg:h-[460px] -mx-6 lg:mx-0 [touch-action:pan-y]">
          <span className="sr-only">Fred's ID badge: Fred D., Automation Specialist. Drag it around, tap it to flip.</span>
          <Suspense fallback={null}>
            <Lanyard className="absolute inset-0 lg:-top-44 lg:-bottom-28 lg:-inset-x-[24rem] [mask-image:linear-gradient(to_bottom,transparent,black_12%)] lg:[mask-image:none]" />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;
