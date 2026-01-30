import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import ToolsMarquee from './components/ToolsMarquee';
import Integrations from './components/Integrations';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

const App: React.FC = () => {
  const projects = [
    {
      title: "Enterprise CRM Sync",
      category: "HubSpot • SQL",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      desc: "Bi-directional sync handling 50k+ records daily with zero downtime."
    },
    {
      title: "AI Lead Qualification",
      category: "OpenAI • Slack",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      desc: "Custom GPT-4 assistant for real-time lead scoring and outreach."
    },
    {
      title: "Automated Invoicing",
      category: "Stripe • Xero",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      desc: "End-to-end finance operations with automated reconciliation."
    },
    {
      title: "Lead Capture Funnel",
      category: "Typeform • GHL",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      desc: "High-conversion intake system with instant routing logic."
    },
    {
      title: "Customer Onboarding",
      category: "Zapier • Mailchimp",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      desc: "Multi-stage welcome sequences personalized by user behavior."
    },
    {
      title: "Inventory Sync",
      category: "Shopify • Airtable",
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1974&auto=format&fit=crop",
      desc: "Real-time stock management across multiple sales channels."
    }
  ];

  return (
    <div className="min-h-screen bg-base text-gray-900 dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black font-sans transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Process />
        <About />
        <ToolsMarquee />
        <Integrations />
        
        {/* Work Section - Grid Layout */}
        <section id="work" className="py-32 px-6 border-b border-subtle bg-base transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <ScrollReveal>
                <span className="inline-block py-1 px-2 border border-subtle bg-surface text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">
                  Case Studies
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Selected Work
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2} width="auto">
                <a href="#" className="hidden md:inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white border-b border-black/30 dark:border-white/30 pb-1 hover:border-black dark:hover:border-white transition-colors">
                  View full portfolio
                </a>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ScrollReveal key={index} delay={index * 0.1} className="group cursor-pointer">
                  <div className="bg-surface border border-subtle h-full hover:border-black/20 dark:hover:border-white/20 transition-all duration-300">
                    <div className="aspect-[1.8/1] relative overflow-hidden bg-gray-200 dark:bg-black/50">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 dark:opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                    <div className="p-6">
                       <div className="text-xs font-mono text-green-600 dark:text-green-400 mb-3 uppercase tracking-wider">{project.category}</div>
                       <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{project.title}</h4>
                       <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">{project.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <div className="mt-12 md:hidden text-center">
                <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white border-b border-black/30 dark:border-white/30 pb-1 hover:border-black dark:hover:border-white transition-colors">
                    View full portfolio
                </a>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;