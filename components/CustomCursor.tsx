import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRefs = useRef<HTMLDivElement[]>([]);
  const count = 30; // Matches @iterations from snippet

  useEffect(() => {
    // Inject CSS to hide default cursor globally
    const style = document.createElement('style');
    style.innerHTML = `
      body, a, button, input, select, textarea, [role="button"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    // Initial setup for centering
    cursorRefs.current.forEach(el => {
      if (el) gsap.set(el, { xPercent: -50, yPercent: -50, autoAlpha: 0 });
    });

    const onMouseMove = (e: MouseEvent) => {
      cursorRefs.current.forEach((el, index) => {
        if (!el) return;
        
        // Logic from snippet:
        // TweenLite.to($(this), 0.05, { css: { left: e.pageX, top: e.pageY}, delay:0+(index/750)});
        // Adapted for GSAP 3:
        gsap.to(el, {
          duration: 0.05,
          x: e.clientX,
          y: e.clientY,
          delay: index / 750, // Preserving exact math from snippet
          overwrite: 'auto',
          autoAlpha: 1 // Ensure it becomes visible on move
        });
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) cursorRefs.current[i] = el; }}
          className="fixed top-0 left-0 w-[25px] h-[25px] rounded-full pointer-events-none z-[9999]"
        >
          {/* Inner circle with theme-aware color - slightly transparent white/black */}
          <div className="w-full h-full rounded-full bg-black/30 dark:bg-white/30" />
        </div>
      ))}
    </>
  );
};

export default CustomCursor;