import React from 'react';

const ToolsMarquee: React.FC = () => {
  const tools = [
    "GoHighLevel", "Zapier", "HubSpot", "Shopify", "WordPress", 
    "Make (Integromat)", "Monday.com", "Airtable", "n8n", 
    "ChatGPT", "Grok", "Claude", "Photoshop", "Canva"
  ];

  // Quadruple the array to ensure seamless looping on large screens (4k)
  const marqueeTools = [...tools, ...tools, ...tools, ...tools];

  return (
    <section className="bg-base py-24 border-b border-subtle relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em] text-gray-900 dark:text-white uppercase mb-4">
          Tools I Use
        </h2>
        <div className="w-24 h-1 bg-green-500 mx-auto rounded-full opacity-80"></div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden group">
        
        {/* Gradient Masks for smooth fade out at edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-base to-transparent z-10 pointer-events-none transition-colors duration-300"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-base to-transparent z-10 pointer-events-none transition-colors duration-300"></div>

        {/* Scrolling Content */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeTools.map((tool, index) => (
            <div key={index} className="px-4">
              <div className="
                px-8 py-4 
                rounded-2xl 
                bg-surface 
                border border-subtle 
                text-gray-600 dark:text-gray-300 
                font-semibold text-lg 
                whitespace-nowrap 
                transition-all duration-300 
                hover:border-green-500/50 hover:text-green-600 dark:hover:text-green-400 hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.15)]
                cursor-default
              ">
                {tool}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsMarquee;