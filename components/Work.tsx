import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    client: 'Marketing agency, 40+ client accounts',
    title: 'Moved an entire agency off GoHighLevel onto a custom dashboard',
    problem: 'Every client lived in GoHighLevel: calendars, texts, bookings, chatbots. It was slow, expensive and impossible to monitor across 40 accounts.',
    built: 'A migration path that flips one client at a time: readiness checks, calendar mirroring, a flip script, and a two-day watch after each move so nothing goes quiet.',
    result: 'One client at a time, zero missed bookings during the move, and every account now visible on one screen.',
    figure: '40+',
    figureLabel: 'accounts migrated',
    tools: ['Supabase', 'Next.js', 'n8n', 'GoHighLevel API'],
  },
  {
    client: 'Custom booking system',
    title: 'Two-way calendar sync between a booking engine and Google Calendar',
    problem: 'Clinics book in their own Google Calendar, patients book online, and the two drifted. Double bookings and ghost events followed.',
    built: 'A sync engine with an audit trail for every event, automatic repair when the two sides disagree, and alerts when a calendar stops answering.',
    result: 'Both calendars agree, moves and cancellations flow both ways, and problems show up before the clinic notices.',
    figure: '2-way',
    figureLabel: 'sync with audit trail',
    tools: ['Google Calendar API', 'Supabase', 'TypeScript'],
  },
  {
    client: 'Every client account',
    title: 'Health monitoring that catches dead automations',
    problem: 'An automation can die silently for days. The client only finds out when the leads stop showing up.',
    built: 'A sweep across every account that checks leads, appointments, texts and webhook runs, then posts only new problems to Slack so nobody tunes it out.',
    result: 'Issues get caught the same day instead of the same week, and the team knows exactly which account is broken.',
    figure: '24/7',
    figureLabel: 'every account checked',
    tools: ['n8n', 'Make', 'Slack', 'Supabase'],
  },
];

const Work: React.FC = () => {
  return (
    <section id="work" className="px-6 py-24 md:py-32 bg-surface border-y border-line">
      <div className="max-w-page mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-20">
          <div className="max-w-[40ch]">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink mb-5">Recent work</h2>
            <p className="text-lg text-muted leading-relaxed">Three systems I built and still run. Client names kept private.</p>
          </div>
          <a
            href="https://www.notion.so/Explore-My-Skills-1c0a08f522ca80f1bc92c7edc5d6cf4b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent transition-colors"
          >
            Full portfolio on Notion
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <article key={p.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-base border border-line rounded-2xl p-7 md:p-10">
              <div className="lg:col-span-3 flex lg:flex-col justify-between gap-6">
                <div>
                  <div className="text-5xl md:text-6xl font-semibold tracking-tight text-accent">{p.figure}</div>
                  <div className="text-sm text-muted mt-1">{p.figureLabel}</div>
                </div>
                <div className="text-sm text-muted lg:mt-auto text-right lg:text-left">{p.client}</div>
              </div>

              <div className="lg:col-span-9">
                <h3 className="text-xl md:text-2xl font-semibold text-ink mb-6 max-w-[36ch]">{p.title}</h3>
                <dl className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <dt className="text-sm font-semibold text-ink mb-1.5">The problem</dt>
                    <dd className="text-sm text-muted leading-relaxed">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-ink mb-1.5">What I built</dt>
                    <dd className="text-sm text-muted leading-relaxed">{p.built}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-ink mb-1.5">The result</dt>
                    <dd className="text-sm text-muted leading-relaxed">{p.result}</dd>
                  </div>
                </dl>
                <ul className="flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <li key={t} className="px-2.5 py-1 rounded-full bg-surface border border-line text-xs font-medium text-muted">{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
