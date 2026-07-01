import React from 'react';
import { Layers, Database, MessageSquare, CreditCard } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Integrations: React.FC = () => {
  const categories = [
    {
      title: "Orchestration",
      icon: <Layers className="w-5 h-5" />,
      tools: ["n8n", "Make.com", "Zapier", "Retool", "Custom Webhooks"],
    },
    {
      title: "CRM & Growth",
      icon: <Database className="w-5 h-5" />,
      tools: ["GoHighLevel", "HubSpot", "Salesforce", "Pipedrive", "ActiveCampaign"],
    },
    {
      title: "AI & Communication",
      icon: <MessageSquare className="w-5 h-5" />,
      tools: ["OpenAI", "Claude", "Slack", "Gmail / Outlook", "Twilio"],
    },
    {
      title: "Data & Payments",
      icon: <CreditCard className="w-5 h-5" />,
      tools: ["Stripe", "Supabase", "Airtable", "Notion", "Typeform"],
    },
  ];

  return (
    <section id="ecosystem" className="bg-section py-28 md:py-32 px-6 border-b border-subtle relative">
      <div className="max-w-7xl mx-auto">

        <ScrollReveal className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-accent-node"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// Ecosystem</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-primary tracking-tight leading-[1.05]">
            Connected to everything<br />
            <span className="text-ink-muted">you already run on.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="relative border border-subtle bg-surface">
          {/* Blueprint corner marks */}
          <span className="absolute -top-2 -left-2 text-accent/40 font-mono text-sm select-none">+</span>
          <span className="absolute -top-2 -right-2 text-accent/40 font-mono text-sm select-none">+</span>
          <span className="absolute -bottom-2 -left-2 text-accent/40 font-mono text-sm select-none">+</span>
          <span className="absolute -bottom-2 -right-2 text-accent/40 font-mono text-sm select-none">+</span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-subtle">
            {categories.map((category, index) => (
              <div key={index} className="p-8 group hover:bg-elevated transition-colors duration-300">
                <div className="flex items-center gap-3 mb-8 text-accent">
                  {category.icon}
                  <h3 className="font-display font-semibold tracking-tight text-ink-primary">{category.title}</h3>
                </div>
                <ul className="space-y-4">
                  {category.tools.map((tool, i) => (
                    <li key={i} className="flex items-center gap-3 font-mono text-sm text-ink-secondary group-hover:text-ink-primary transition-colors duration-200">
                      <span className="w-1.5 h-1.5 bg-ink-muted group-hover:bg-accent-node transition-colors duration-300"></span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Integrations;
