import { useState } from 'react';
import { ResumeModal } from './ResumeModal';

interface ResumeButtonProps {
  imageUrl: string;
}

export const ResumeButton = ({ imageUrl }: ResumeButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-violet-500 rounded-full shadow-md cursor-pointer"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-blue-500 to-violet-500 group-hover:translate-x-0 ease">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            >
            </path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-violet-500 transition-all duration-300 transform group-hover:translate-x-full ease">
          View Resume
        </span>
        <span className="relative invisible">View Resume</span>
      </button>
      
      <ResumeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={imageUrl}
      />
    </>
  );
};