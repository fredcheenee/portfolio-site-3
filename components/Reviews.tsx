import React from 'react';
import { Quote, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Sunny",
      role: "Marketing Lead",
      company: "MSP CAMP",
      content: "Fred handled a series of landing page builds for our campaigns. We needed custom layouts for each one, and he turned them around quicker than expected. It's rare to find someone who doesn't need constant revisions on the design details.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Marcus Chen",
      role: "Founder",
      company: "Basic Solutions Inc.",
      content: "The n8n workflows Fred built are solid. We process a lot of data, and stability is more important to us than complex features. He kept the logic clean and error-handling robust, so we haven't had any sync issues since launch.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Taher",
      role: "Operations",
      company: "MSP CAMP",
      content: "Fred set up our entire backend in GoHighLevel—forms, triggers, and the underlying automation. He actually suggested a different data structure than we planned, which ended up being much cleaner for reporting. Great technical partner.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "David Park",
      role: "E-commerce Director",
      company: "ModernRetail",
      content: "Our Shopify order processing was largely manual before. Fred bridged the gap to our ERP, so now data flows without anyone touching a spreadsheet. It’s just one less thing for the operations team to worry about every day.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Olivia Thompson",
      role: "Sales Manager",
      company: "PropertyFlow",
      content: "We brought Fred in to fix our lead follow-up sequences in GHL. The response times are much better now that the SMS and emails trigger reliably. It’s nice to have a system that just works in the background.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "James Wilson",
      role: "Founder",
      company: "SaaS Start",
      content: "Fred isn't just a developer; he understands business logic. He spotted flaws in our original scope and proposed a more efficient Make.com architecture.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <section className="bg-section py-32 px-6 border-b border-subtle relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
            <span className="inline-block py-1 px-2 border border-subtle bg-surface text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
              Trusted by <span className="text-green-600 dark:text-green-500">Industry Leaders</span>
            </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ScrollReveal key={index} delay={index * 0.1} className="h-full">
              <div className="bg-surface border border-subtle p-8 rounded-2xl h-full flex flex-col relative group hover:border-green-500/30 transition-colors duration-300">
                <Quote className="absolute top-8 right-8 text-gray-200 dark:text-gray-800 w-12 h-12 rotate-12 transition-colors duration-300 group-hover:text-green-500/10" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed relative z-10 flex-grow">
                  "{review.content}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-subtle mt-auto">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover border border-subtle"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{review.company}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;