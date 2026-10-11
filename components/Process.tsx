import React from 'react';

const steps = [
  {
    n: '1',
    title: 'Audit',
    description: 'I map how work actually flows through your business today, find what breaks, and send you a plain-English plan before anything gets built.',
  },
  {
    n: '2',
    title: 'Build',
    description: 'Workflows go in with error handling, logging and a test run on real data. You see progress as it happens, not at the end.',
  },
  {
    n: '3',
    title: 'Hand over and monitor',
    description: 'Short video walkthroughs so your team can run it, plus monitoring so I know if something stops before you do.',
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="px-6 py-24 md:py-32">
      <div className="max-w-page mx-auto">
        <div className="max-w-[40ch] mb-14 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink mb-5">How a project runs</h2>
          <p className="text-lg text-muted leading-relaxed">Three steps, in this order, every time.</p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {steps.map((s) => (
            <li key={s.n} className="bg-surface p-8 md:p-10">
              <div className="w-9 h-9 rounded-full bg-ink text-paper text-sm font-semibold flex items-center justify-center mb-8">{s.n}</div>
              <h3 className="text-xl font-semibold text-ink mb-3">{s.title}</h3>
              <p className="text-muted leading-relaxed">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
