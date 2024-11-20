import { useEffect, useState } from 'react';

export const GradientSphere = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setPosition({
        x: Math.sin(scrolled * 0.002) * 10,
        y: Math.cos(scrolled * 0.002) * 10,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] opacity-70"
        style={{
          transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-[100px] animate-slow-spin" />
      </div>
    </div>
  );
};