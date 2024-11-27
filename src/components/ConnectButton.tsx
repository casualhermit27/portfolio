import { FiArrowUpRight } from 'react-icons/fi';

interface ConnectButtonProps {
  className?: string;
}

export const ConnectButton = ({ className }: ConnectButtonProps) => {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <button 
        className="connect-btn cursor-hover-target group flex items-center justify-center bg-black text-white rounded-full w-48 h-16 hover:scale-110 transition-transform duration-300"
        onClick={() => {
          const connectSection = document.getElementById('connect');
          connectSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <span className="flex items-center font-cabinet-grotesk whitespace-nowrap">
            <span className="mr-2">Let's Connect</span>
            <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform duration-300" />
          </span>
        </div>
      </button>
    </div>
  );
};
