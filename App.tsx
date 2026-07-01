import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Process from './components/Process';
import About from './components/About';
import Integrations from './components/Integrations';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Brief branded boot — no artificial padding beyond first paint settling.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => setIsLoading(false), reduce ? 0 : 900);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen w-full bg-base text-ink-primary font-sans">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <About />
        <Integrations />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
