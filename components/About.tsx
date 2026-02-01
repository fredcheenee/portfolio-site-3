import React, { useLayoutEffect, useRef } from 'react';
import { Search, TrendingUp, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Animation (Sticky CSS + ScrollTrigger scrubbing)
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            // Removed pin: true in favor of CSS sticky for smoother behavior
          }
        });

        // 1. Initial State
        gsap.set(approachRef.current, { autoAlpha: 0, y: 50 });

        // 2. Animate: Fade out Text -> Fade in Approach
        // We time this to happen while scrolling through the tall section
        tl.to(textRef.current, {
          autoAlpha: 0,
          y: -20,
          duration: 0.4, // Faster exit
          ease: "power2.inOut"
        })
        .to(approachRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        }, ">-0.2"); 
        
        // Add a dummy tween to pad the end if needed, but 'scrub' distributes timeline over scroll distance
        tl.to({}, { duration: 0.2 }); 
      });

      // Mobile Animation (Simple Stack)
      mm.add("(max-width: 1023px)", () => {
        gsap.from(imageRef.current, {
          scrollTrigger: { trigger: imageRef.current, start: "top 80%" },
          y: 30, opacity: 0, duration: 0.8
        });
        gsap.from(textRef.current, {
          scrollTrigger: { trigger: textRef.current, start: "top 75%" },
          y: 30, opacity: 0, duration: 0.8, delay: 0.2
        });
        gsap.from(approachRef.current, {
          scrollTrigger: { trigger: approachRef.current, start: "top 80%" },
          y: 50, opacity: 0, duration: 0.8
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="bg-base relative border-b border-subtle transition-colors duration-300">
        {/* Background Texture - Fixed to section */}
        <div 
            className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(120, 120, 120, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 120, 120, 0.3) 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
            }}
        ></div>

      {/* 
        Container using CSS Sticky. 
        - h-screen: takes full height
        - sticky top-0: sticks to top
        - overflow-hidden: contains content
      */}
      <div className="hidden lg:block h-[200vh] w-full absolute top-0 left-0 pointer-events-none"></div> {/* Spacer for scroll distance */}
      
      {/* 
         We actually need the section itself to be tall. 
         Let's make the section min-h-[200vh] on desktop.
      */}
      <style>{`
        @media (min-width: 1024px) {
          #about { min-height: 250vh; }
        }
      `}</style>

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10 flex flex-col justify-center py-20 px-6 lg:h-screen lg:sticky lg:top-0 lg:overflow-hidden">
        
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16 relative z-30 shrink-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              ABOUT <span className="text-green-600 dark:text-green-500">ME</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Hi, I'm Fred! I am an Automation Specialist and Technical Virtual Assistant focused on building reliable systems, automation, and clean execution.
            </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative grow">
            
            {/* Left Column: Image */}
            <div ref={imageRef} className="relative z-20 w-full max-w-md mx-auto lg:max-w-none h-full flex flex-col justify-center">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-subtle bg-surface relative shadow-2xl shadow-green-900/10 group">
                    <img 
                        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" 
                        alt="Fred - Automation Specialist" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                     {/* Floating Badge */}
                     <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden lg:block">
                        <p className="text-white text-sm font-medium">
                            "Automating the mundane so you can focus on the magnificent."
                        </p>
                    </div>
                </div>
            </div>

             {/* Right Column: Text & Approach Swap */}
             <div className="relative z-20 flex flex-col justify-center min-h-[500px] lg:h-full">
                
                {/* 1. Journey Text */}
                <div ref={textRef} className="bg-surface border border-subtle p-8 md:p-10 rounded-3xl shadow-lg dark:shadow-green-900/5 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                         <span className="w-8 h-1 bg-green-500 rounded-full inline-block"></span>
                         My Journey
                    </h3>
                    <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                        <p>
                        It started when I saw how much time businesses were losing to repetitive tasks. I realized automation isn’t just about saving time — it’s about creating systems that scale and don’t break.
                        </p>
                        <p>
                        Now, I specialize in building workflows using GoHighLevel, Zapier, and CRM platforms that help businesses reduce manual work, respond faster, and operate with consistency.
                        </p>
                        <p>
                        I help service-based businesses and agencies replace manual work with smart automation that runs in the background.
                        </p>
                        <p className="font-medium text-gray-900 dark:text-white pt-4 border-t border-subtle">
                        Whether it’s lead capture, CRM setup, appointment booking, follow-ups, or integrations — I build systems that work even when things go wrong.
                        </p>
                    </div>
                </div>

                {/* 2. Unique Approach (Absolute on Desktop to swap position) */}
                <div ref={approachRef} className="mt-8 lg:mt-0 lg:absolute lg:inset-0 lg:z-20 flex flex-col justify-center pointer-events-none lg:pointer-events-auto">
                    {/* Header for Approach inside the swap container if needed, or just cards */}
                     <div className="bg-surface/50 backdrop-blur-sm border border-subtle p-2 rounded-3xl lg:bg-transparent lg:border-none lg:p-0">
                        <div className="lg:hidden text-center mb-6 pt-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Unique Approach</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4">
                            {/* Card 1 */}
                            <div className="bg-surface border border-subtle p-6 rounded-2xl flex items-start gap-4 hover:border-green-500/50 transition-colors duration-300 shadow-lg dark:shadow-green-900/5">
                                <div className="shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400">
                                    <Search size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Audit First</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        I don't automate broken processes — I analyze and fix them first to ensure a solid foundation.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-surface border border-subtle p-6 rounded-2xl flex items-start gap-4 hover:border-green-500/50 transition-colors duration-300 shadow-lg dark:shadow-green-900/5">
                                <div className="shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Scale Smart</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Every system I build is designed to grow with your business, handling increased load effortlessly.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-surface border border-subtle p-6 rounded-2xl flex items-start gap-4 hover:border-green-500/50 transition-colors duration-300 shadow-lg dark:shadow-green-900/5">
                                <div className="shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Results Focus</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Success is measured in hours saved, errors reduced, and revenue supported, not just complexity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

             </div>
        </div>
      </div>
    </section>
  );
};

export default About;