import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base">
      <svg viewBox="0 0 120 120" width="96" height="96" role="img" aria-label="Loading" className="mb-8">
        <g stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.5">
          <line x1="20" y1="30" x2="60" y2="60"><animate attributeName="opacity" values="0.1;0.6;0.1" dur="1.8s" repeatCount="indefinite" /></line>
          <line x1="100" y1="25" x2="60" y2="60"><animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.8s" repeatCount="indefinite" /></line>
          <line x1="25" y1="95" x2="60" y2="60"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.2s" repeatCount="indefinite" /></line>
          <line x1="95" y1="98" x2="60" y2="60"><animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" /></line>
        </g>
        <g fill="var(--node)">
          <circle cx="20" cy="30" r="3"><animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" /></circle>
          <circle cx="100" cy="25" r="3"><animate attributeName="r" values="4;2;4" dur="1.7s" repeatCount="indefinite" /></circle>
          <circle cx="25" cy="95" r="3"><animate attributeName="r" values="2;4;2" dur="1.9s" repeatCount="indefinite" /></circle>
          <circle cx="95" cy="98" r="3"><animate attributeName="r" values="4;2;4" dur="1.6s" repeatCount="indefinite" /></circle>
        </g>
        <circle cx="60" cy="60" r="6" fill="var(--accent)">
          <animate attributeName="r" values="5;8;5" dur="1.2s" repeatCount="indefinite" />
        </circle>
      </svg>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-secondary">
        Initializing systems<span className="animate-blink">_</span>
      </p>
    </div>
  );
};

export default Preloader;
