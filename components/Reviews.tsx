import React from 'react';
import { Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const reviews = [
  {
    name: "Sunny",
    role: "Marketing Lead",
    company: "MSP CAMP",
    initials: "S",
    content: "Fred handled a series of landing page builds for our campaigns. We needed custom layouts for each one, and he turned them around quicker than expected. It's rare to find someone who doesn't need constant revisions on the design details.",
  },
  {
    name: "Taher",
    role: "Operations",
    company: "MSP CAMP",
    initials: "T",
    content: "Fred set up our entire backend in GoHighLevel — forms, triggers, and the underlying automation. He actually suggested a different data structure than we planned, which ended up being much cleaner for reporting. Great technical partner.",
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="bg-base py-28 md:py-32 px-6 border-b border-subtle relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-accent-node"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// Testimonials</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-primary tracking-tight leading-[1.05]">
            Work that speaks for itself.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-subtle border border-subtle">
          {reviews.map((review, index) => (
            <ScrollReveal key={index} delay={index * 0.12} className="h-full">
              <div className="bg-surface p-8 md:p-10 h-full flex flex-col relative group hover:bg-elevated transition-colors duration-300">
                <Quote className="absolute top-8 right-8 text-accent/15 w-12 h-12 group-hover:text-accent/25 transition-colors duration-300" />
                <p className="text-ink-primary text-lg leading-relaxed relative z-10 flex-grow mb-8">
                  "{review.content}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-subtle">
                  <div className="w-11 h-11 flex items-center justify-center border border-strong bg-base font-display font-bold text-accent">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-ink-primary text-sm">{review.name}</h4>
                    <p className="font-mono text-xs text-ink-muted uppercase tracking-wide">{review.role} · {review.company}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
