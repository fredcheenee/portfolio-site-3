import React from 'react';
import { Layers, Database, MessageSquare, CreditCard } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Integrations: React.FC = () => {
  const categories = [
    {
      title: "Orchestration",
      icon: <Layers className="w-5 h-5" />,
      tools: ["n8n", "Make.com", "Zapier", "Retool", "Custom Webhooks"]
    },
    {
      title: "CRM & Growth",
      icon: <Database className="w-5 h-5" />,
      tools: ["HighLevel (GHL)", "HubSpot", "Salesforce", "Pipedrive", "ActiveCampaign"]
    },
    {
      title: "Communication",
      icon: <MessageSquare className="w-5 h-5" />,
      tools: ["Slack", "Microsoft Teams", "OpenAI (GPT-4)", "Gmail / Outlook", "Intercom"]
    },
    {
      title: "Tools & Payments",
      icon: <CreditCard className="w-5 h-5" />,
      tools: ["Stripe", "Typeform", "Calendly", "DocuSign", "Notion"]
    }
  ];

  return (
    <section id="integrations" className="bg-section py-32 px-6 border-b border-subtle relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <ScrollReveal className="mb-20">
           <span className="inline-block py-1 px-2 border border-subtle bg-surface text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">
              Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
              Connected to <br />
              <span className="text-gray-500">everything you use.</span>
            </h2>
        </ScrollReveal>

        {/* Tech Grid */}
        <ScrollReveal delay={0.2} className="relative border border-subtle bg-surface">
          
          {/* Decorative Intersections (Plus signs at corners) */}
          <div className="absolute -top-1 -left-1 text-black/20 dark:text-white/20 text-xs">+</div>
          <div className="absolute -top-1 -right-1 text-black/20 dark:text-white/20 text-xs">+</div>
          <div className="absolute -bottom-1 -left-1 text-black/20 dark:text-white/20 text-xs">+</div>
          <div className="absolute -bottom-1 -right-1 text-black/20 dark:text-white/20 text-xs">+</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-subtle">
            {categories.map((category, index) => (
              <div key={index} className="p-8 group hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-8 text-gray-900 dark:text-white opacity-80 group-hover:opacity-100 transition-opacity">
                  {category.icon}
                  <h3 className="font-semibold tracking-tight">{category.title}</h3>
                </div>
                
                <ul className="space-y-4">
                  {category.tools.map((tool, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors duration-200">
                      <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-700 rounded-sm group-hover:bg-green-500 transition-colors duration-300"></div>
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