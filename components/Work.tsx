import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: "Zapier CRM Sync",
    category: "Zapier · Integrations",
    image: "https://raw.githubusercontent.com/fredcheenee/portfolio-images/refs/heads/main/Zapier.png",
    desc: "Bi-directional sync that keeps contacts and deal stages consistent across the CRM and connected tools.",
  },
  {
    title: "Make.com Lead Engine",
    category: "Make · OpenAI",
    image: "https://raw.githubusercontent.com/fredcheenee/portfolio-images/refs/heads/main/Make.png",
    desc: "GPT-powered scenario that scores inbound leads and triggers personalised outreach in real time.",
  },
  {
    title: "GoHighLevel Operations",
    category: "GoHighLevel · CRM",
    image: "https://raw.githubusercontent.com/fredcheenee/portfolio-images/refs/heads/main/GHL%20automation.jpg",
    desc: "End-to-end CRM build: lead capture, routing, and automated SMS + email follow-up sequences.",
  },
  {
    title: "High-Converting Funnels",
    category: "GoHighLevel · Design",
    image: "https://raw.githubusercontent.com/fredcheenee/portfolio-images/refs/heads/main/ladningpage.gif",
    desc: "Custom landing pages wired directly to the backend with instant lead routing on submit.",
  },
  {
    title: "Customer Onboarding",
    category: "Zapier · Mailchimp",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    desc: "Multi-stage welcome sequences that adapt to user behaviour across email and SMS.",
  },
  {
    title: "n8n Inventory Sync",
    category: "n8n · Shopify",
    image: "https://raw.githubusercontent.com/fredcheenee/portfolio-images/refs/heads/main/n8n.png",
    desc: "Real-time stock management keeping inventory aligned across multiple sales channels.",
  },
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-28 md:py-32 px-6 border-b border-subtle bg-section relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-accent-node"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// Selected work</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-primary tracking-tight">
              Systems I've shipped.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} width="auto">
            <a
              href="https://www.notion.so/Explore-My-Skills-1c0a08f522ca80f1bc92c7edc5d6cf4b"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex group items-center justify-center gap-2 px-8 py-4 text-sm font-mono uppercase tracking-[0.15em] text-white bg-accent hover:bg-accent-bright transition-all duration-300"
            >
              View full portfolio
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-subtle border border-subtle">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.08} className="group cursor-pointer">
              <div className="bg-surface h-full hover:bg-elevated transition-colors duration-300">
                <div className="aspect-[1.7/1] relative overflow-hidden border-b border-subtle">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-6">
                  <div className="font-mono text-xs text-accent mb-3 uppercase tracking-wider">{project.category}</div>
                  <h4 className="font-display text-lg font-bold text-ink-primary mb-2">{project.title}</h4>
                  <p className="text-ink-secondary text-sm leading-relaxed">{project.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <a
            href="https://www.notion.so/Explore-My-Skills-1c0a08f522ca80f1bc92c7edc5d6cf4b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex group items-center justify-center gap-2 px-8 py-4 text-sm font-mono uppercase tracking-[0.15em] text-white bg-accent w-full"
          >
            View full portfolio
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
