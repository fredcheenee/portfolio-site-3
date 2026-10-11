import React from 'react';

const stats = [
  { value: '40+', label: 'client accounts running on systems I built' },
  { value: '100+', label: 'automations in production right now' },
  { value: '24/7', label: 'health monitoring on every account' },
];

const Stats: React.FC = () => {
  return (
    <section className="px-6">
      <div className="max-w-page mx-auto border-y border-line grid grid-cols-1 sm:grid-cols-3">
        {stats.map((s, i) => (
          <div key={s.value} className={`py-8 sm:py-10 sm:px-8 ${i === 0 ? 'sm:pl-0' : ''} ${i > 0 ? 'border-t sm:border-t-0 sm:border-l border-line' : ''}`}>
            <div className="text-4xl md:text-5xl font-semibold tracking-tight text-ink mb-2">{s.value}</div>
            <div className="text-sm text-muted max-w-[24ch]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
