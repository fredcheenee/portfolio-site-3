import React from 'react';
import { Users, Filter, Cable, Monitor, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "CRM Automation",
      description: "Bi-directional syncs that keep your data pristine. Automatically route leads, update deal stages, and trigger follow-up sequences without lifting a finger.",
      tags: ["HubSpot", "Salesforce", "Pipedrive"]
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Lead Capture Funnels",
      description: "High-converting qualification logic. Capture intent, score prospects in real-time, and instantly route high-value opportunities to your sales team.",
      tags: ["Typeform", "GHL", "Enrichment"]
    },
    {
      icon: <Cable className="w-8 h-8" />,
      title: "Workflow Integrations",
      description: "Bridging the gap between isolated tools. If it has an API, I can build a robust, error-handled connection to the rest of your ecosystem.",
      tags: ["Stripe", "Slack", "Notion", "Airtable"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Landing Page Builds",
      description: "Performance-obsessed frontends built for conversion. Zero bloat, instant load times, and direct integration with your automation backend.",
      tags: ["Next.js", "Tailwind", "Vercel"]
    }
  ];

  return (
    <section id="services" className="bg-black py-32 px-6 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <ScrollReveal className="max-w-2xl">
            <span className="inline-block py-1 px-2 border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">
              Scope of Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Solutions for the <br />
              <span className="text-gray-500">modern enterprise.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="max-w-sm">
            <p className="text-gray-400 font-light text-lg leading-relaxed text-left">
              Bespoke automation infrastructure designed to scale with your revenue, not your headcount.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ScrollReveal 
              key={index} 
              className="group p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
              delay={index * 0.1}
            >
              {/* Hover Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/[0.05] transition-colors duration-500 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-white/5 border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      {service.icon}
                    </div>
                    <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-gray-500 group-hover:text-gray-400 uppercase tracking-wider">
                      [{tag}]
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;