import React from 'react';

const reviews = [
  {
    name: 'Sunny',
    role: 'Marketing Lead, MSP CAMP',
    content: "Fred handled a series of landing page builds for our campaigns. We needed custom layouts for each one, and he turned them around quicker than expected. It's rare to find someone who doesn't need constant revisions on the design details.",
  },
  {
    name: 'Taher',
    role: 'Operations, MSP CAMP',
    content: 'Fred set up our entire backend in GoHighLevel: forms, triggers, and the underlying automation. He actually suggested a different data structure than we planned, which ended up being much cleaner for reporting. Great technical partner.',
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-page mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink mb-14 md:mb-20">What clients say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-surface border border-line rounded-2xl p-8 md:p-10 flex flex-col">
              <blockquote className="text-lg text-ink leading-relaxed mb-8 flex-grow">
                “{r.content}”
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-soft text-accent font-semibold flex items-center justify-center">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-ink text-sm">{r.name}</div>
                  <div className="text-sm text-muted">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
