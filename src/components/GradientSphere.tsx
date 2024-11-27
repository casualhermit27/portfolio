import { useEffect, useState } from 'react';

export const GradientSphere = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[1000px] h-[1000px] // Increased size to contain all planets
                    rounded-full
                    bg-gradient-to-r from-violet-50/20 to-blue-50/20
                    blur-3xl" 
      />
    </div>
  );
};