import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Tools from './components/Tools';
import Services from './components/Services';
import Work from './components/Work';
import Process from './components/Process';
import About from './components/About';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-base text-ink font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Tools />
        <Services />
        <Work />
        <Process />
        <About />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
