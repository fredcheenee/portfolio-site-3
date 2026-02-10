import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Integrations from './components/Integrations';
import Booking from './components/Booking';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import { ArrowUpRight } from 'lucide-react';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Zapier Automations",
      category: "Zapier • Integrations",
      image: "https://raw.githubusercontent.com/fredcheenee/portfolio-images/refs/heads/main/Zapier.png",
      desc: "Bi-directional sync handling 50k+ records daily with zero downtime."
    },
    {
      title: "Make.com Automations",
      category: "Make • OpenAI",
      image: "https://raw.githubusercontent.com/fredcheenee/portfolio-images/refs/heads/main/Make.png",
      desc: "Custom GPT-4 assistant for real-time lead scoring and outreach."
    },
    {
      title: "GoHighLevel Automations",
      category: "GoHighLevel • CRM",
      image: "https://raw.githubusercontent.com/fredcheenee/portfolio-images/refs/heads/main/GHL%20automation.jpg",
      desc: "End-to-end finance operations with automated reconciliation."
    },
    {
      title: "Landing Page Creations",
      category: "GoHighLevel • Design",
      image: "https://raw.githubusercontent.com/fredcheenee/portfolio-images/refs/heads/main/ladningpage.gif",
      desc: "High-conversion intake system with instant routing logic."
    },
    {
      title: "Customer Onboarding",
      category: "Zapier • Mailchimp",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      desc: "Multi-stage welcome sequences personalized by user behavior."
    },
    {
      title: "n8n Automation",
      category: "n8n • Shopify",
      image: "https://raw.githubusercontent.com/fredcheenee/portfolio-images/refs/heads/main/n8n.png",
      desc: "Real-time stock management across multiple sales channels."
    }
  ];

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen w-full bg-base text-gray-900 dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black font-sans transition-colors duration-300">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Process />
        <About />
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
                <a 
                  href="https://www.notion.so/Explore-My-Skills-1c0a08f522ca80f1bc92c7edc5d6cf4b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex group items-center justify-center gap-2 px-8 py-4 text-base font-bold tracking-wide text-white bg-black dark:text-black dark:bg-white rounded-lg transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  View Full Portfolio
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
                <a 
                  href="https://www.notion.so/Explore-My-Skills-1c0a08f522ca80f1bc92c7edc5d6cf4b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex group items-center justify-center gap-2 px-8 py-4 text-base font-bold tracking-wide text-white bg-black dark:text-black dark:bg-white rounded-lg transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg w-full sm:w-auto"
                >
                    View Full Portfolio
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
            </div>
          </div>
        </section>

        <Reviews />
        <Booking />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
