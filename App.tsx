import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Process from './components/Process';
import Integrations from './components/Integrations';
import CTA from './components/CTA';
import Footer from './components/Footer';

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
        {/* Placeholder sections to show page structure */}
        <section id="work" className="py-24 px-6 border-b border-white/10 bg-black">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-light text-gray-400 mb-8">Selected Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-video bg-gray-900 border border-white/10 mb-4 group-hover:border-white/40 transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm">
                      [Project Preview {i}]
                    </div>
                  </div>
                  <h4 className="text-xl font-medium">Enterprise Workflow System</h4>
                  <p className="text-gray-500 mt-2 text-sm">Automating 500+ daily tasks using n8n and Postgres.</p>
                </div>
              ))}
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