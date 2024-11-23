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
        className="inline-block px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
      >
        View Resume
      </button>
      
      <ResumeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={imageUrl}
      />
    </>
  );
};