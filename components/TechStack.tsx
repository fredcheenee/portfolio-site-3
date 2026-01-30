import React from 'react';
import { Database, Workflow, Bot, Share2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const TechStack: React.FC = () => {
  const stacks = [
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Orchestration",
      description: "Complex multi-step workflows utilizing n8n & Make."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Sync",
      description: "Real-time bidirectional sync between CRMs and Databases."
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Agents",
      description: "Custom GPTs and assistants integrated into Slack/Teams."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "API Integration",
      description: "Custom webhooks and endpoints for unsupported tools."
    }
  ];

  return (
    <section className="bg-section py-24 px-6 border-b border-subtle transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-subtle border border-subtle">
          {stacks.map((stack, index) => (
            <ScrollReveal 
              key={index} 
              className="bg-surface p-8 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors duration-300" 
              delay={index * 0.1}
            >
              <div className="text-gray-900 dark:text-white mb-4 opacity-80">{stack.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{stack.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed">{stack.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;