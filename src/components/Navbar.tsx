import { useState } from 'react';

interface NavbarProps {
  currentSection: string;
}

export const Navbar = ({ currentSection }: NavbarProps) => {
  const sections = ['about', 'work', 'resume', 'connect'];

  return (
    <nav className="fixed left-12 top-1/2 -translate-y-1/2 z-50" style={{ transition: 'none' }}>
      <ul className="flex flex-col gap-4" style={{ transition: 'none' }}>
        {sections.map((section) => (
          <li key={section} className="relative" style={{ transition: 'none' }}>
            {currentSection === section && (
              <div 
                style={{ transition: 'none' }}
                className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
              />
            )}
            <button
              onClick={() => {
                document.getElementById(section)?.scrollIntoView();
              }}
              className={`
                px-8 py-3 
                rounded-full
                ${currentSection === section 
                  ? 'text-violet-500 dark:text-violet-400 font-medium' 
                  : 'text-neutral-600 hover:text-violet-500 dark:text-white dark:hover:text-violet-400'}
                transition-colors
                cursor-hover-target
              `}
              style={{ transition: 'none' }}
            >
              <span>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};