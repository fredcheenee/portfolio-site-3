import React from 'react';
import { Bot, Workflow, Users, Cable, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Bot className="w-7 h-7" />,
      title: "AI Agents & Assistants",
      description: "Custom GPT and Claude agents wired into your CRM, inbox and Slack — qualifying leads, drafting replies and answering customers around the clock.",
      tags: ["OpenAI", "Claude", "RAG"],
    },
    {
      icon: <Workflow className="w-7 h-7" />,
      title: "Workflow Automation",
      description: "Multi-step pipelines in n8n and Make with real error-handling, retries and logging. If it has an API, I connect it — and it keeps running when things go wrong.",
      tags: ["n8n", "Make", "Webhooks"],
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "CRM & Lead Systems",
      description: "End-to-end GoHighLevel builds: capture, score, route and follow up automatically over SMS and email so no lead ever goes cold.",
      tags: ["GoHighLevel", "HubSpot", "Twilio"],
    },
    {
      icon: <Cable className="w-7 h-7" />,
      title: "Integrations & Data Sync",
      description: "Bi-directional syncs that keep every tool in agreement. One source of truth across your stack, no more copy-paste between spreadsheets and dashboards.",
      tags: ["Stripe", "Supabase", "Airtable"],
    },
  ];

  return (
    <section id="services" className="bg-base py-28 md:py-32 px-6 border-b border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <ScrollReveal className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-accent-node"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// Services</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-primary tracking-tight leading-[1.05]">
              What I build for you.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="max-w-sm">
            <p className="text-ink-secondary text-lg leading-relaxed">
              Automation infrastructure that scales with your revenue — not your headcount.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-subtle border border-subtle">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              className="group relative p-8 md:p-10 bg-surface hover:bg-elevated transition-colors duration-300 h-full flex flex-col"
              delay={index * 0.1}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 border border-subtle text-accent group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <ArrowUpRight className="text-ink-muted group-hover:text-accent transition-colors duration-300" />
              </div>

              <h3 className="font-display text-2xl font-bold text-ink-primary mb-4 group-hover:translate-x-1 transition-transform duration-300">
                {service.title}
              </h3>
              <p className="text-ink-secondary leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-6 border-t border-subtle">
                {service.tags.map((tag, i) => (
                  <span key={i} className="font-mono text-xs text-ink-muted group-hover:text-accent uppercase tracking-wider transition-colors">
                    [{tag}]
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
