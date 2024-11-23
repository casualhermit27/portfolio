import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      }
    };

    const handleHover = () => {
      cursorRef.current?.classList.add('hovering');
    };

    const handleUnhover = () => {
      cursorRef.current?.classList.remove('hovering');
    };

    document.querySelectorAll('.cursor-hover-target').forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('.cursor-hover-target').forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      <svg 
        className="cursor-arrow" 
        width="12" 
        height="12" 
        viewBox="0 0 12 12" 
        fill="none"
      >
        <path 
          d="M1 11L11 1M11 1H3M11 1V9" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}; 