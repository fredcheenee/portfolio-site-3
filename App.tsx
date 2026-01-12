import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Process from './components/Process';
import Integrations from './components/Integrations';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Process />
        <Integrations />
        
        {/* Work Section */}
        <section id="work" className="py-32 px-6 border-b border-white/10 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <ScrollReveal>
                <span className="inline-block py-1 px-2 border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">
                  Case Studies
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Selected Work
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2} width="auto">
                <a href="#" className="hidden md:inline-flex items-center text-sm font-semibold text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                  View all projects
                </a>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Project 1 */}
              <ScrollReveal delay={0.1} className="group cursor-pointer">
                <div className="aspect-video bg-gray-900 border border-white/10 mb-6 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                    alt="Enterprise Workflow System" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                     <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">Enterprise CRM Sync</h4>
                     <p className="text-gray-500 text-sm leading-relaxed max-w-md">Bi-directional synchronization between HubSpot and PostgreSQL handling 50k+ records daily with zero downtime.</p>
                  </div>
                  <div className="p-2 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 2 */}
              <ScrollReveal delay={0.2} className="group cursor-pointer">
                <div className="aspect-video bg-gray-900 border border-white/10 mb-6 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                    alt="AI Lead Agent" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                     <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">AI Lead Qualification</h4>
                     <p className="text-gray-500 text-sm leading-relaxed max-w-md">Custom GPT-4 assistant integrated into Slack for real-time lead scoring and automated outreach sequences.</p>
                  </div>
                  <div className="p-2 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="mt-12 md:hidden text-center">
                <a href="#" className="inline-flex items-center text-sm font-semibold text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                    View all projects
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