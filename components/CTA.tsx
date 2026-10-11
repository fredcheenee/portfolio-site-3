import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from './scroll';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="px-6 pb-24 md:pb-32">
      <div className="max-w-page mx-auto bg-accent text-accent-ink rounded-3xl p-10 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-5 max-w-[20ch]">
            Tell me what your team does by hand. I'll tell you what can run on its own.
          </h2>
          <p className="text-lg opacity-90 leading-relaxed max-w-[48ch]">
            A 30-minute call. You walk me through the work, I come back with what to automate first and what it would take.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-accent-ink text-accent font-semibold hover:opacity-90 transition">
            Book a call
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="mailto:fredcheenee19@gmail.com" className="text-sm font-medium underline underline-offset-4 opacity-90 hover:opacity-100">
            or email fredcheenee19@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
