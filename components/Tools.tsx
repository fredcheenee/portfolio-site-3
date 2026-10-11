import React from 'react';

const tools = [
  'n8n', 'Make', 'GoHighLevel', 'Zapier', 'Supabase', 'Next.js', 'Claude', 'OpenAI', 'Slack', 'Stripe', 'Airtable', 'Google Calendar',
];

const Tools: React.FC = () => {
  return (
    <section className="px-6 py-12">
      <div className="max-w-page mx-auto flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
        <p className="text-sm text-muted shrink-0">Tools I work in every day</p>
        <ul className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <li key={t} className="px-3 py-1.5 rounded-full border border-line bg-surface text-sm font-medium text-ink">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tools;
