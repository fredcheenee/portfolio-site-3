import React from 'react';
import { Users, CalendarCheck, Bot, LayoutTemplate } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'CRM and lead automation',
    description: 'Every lead lands in the right place, gets tagged, routed and followed up by text and email within seconds. No more leads sitting in an inbox.',
    tools: 'GoHighLevel, HubSpot, n8n, Make',
  },
  {
    icon: CalendarCheck,
    title: 'Booking and calendar systems',
    description: 'Online booking that respects real availability, takes deposits, syncs both ways with Google Calendar and sends reminders that cut no-shows.',
    tools: 'Google Calendar, Stripe, Supabase, custom engines',
  },
  {
    icon: Bot,
    title: 'AI agents and chatbots',
    description: 'Assistants that answer patient and customer questions, qualify leads and hand off to a human the moment it matters, with guardrails you control.',
    tools: 'Claude, OpenAI, n8n, Slack',
  },
  {
    icon: LayoutTemplate,
    title: 'Landing pages and funnels',
    description: 'Fast, mobile-first pages wired straight into your booking and CRM. Built in GoHighLevel or custom code, depending on what you need.',
    tools: 'GoHighLevel, Next.js, Tailwind',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="px-6 py-24 md:py-32">
      <div className="max-w-page mx-auto">
        <div className="max-w-[40ch] mb-14 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink mb-5">What I build</h2>
          <p className="text-lg text-muted leading-relaxed">
            Four things, done properly. Each one is built to keep working when a tool changes, a lead types their phone number wrong, or someone on your team clicks the wrong button.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-line">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className={`py-10 md:py-12 border-b border-line ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:border-l'}`}>
                <div className="w-11 h-11 rounded-lg bg-accent-soft text-accent flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-ink mb-3">{s.title}</h3>
                <p className="text-muted leading-relaxed mb-5 max-w-[48ch]">{s.description}</p>
                <p className="text-sm text-muted">{s.tools}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
