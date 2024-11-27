import { useState } from 'react';

interface CopyToClipboardProps {
  text: string;
}

export const CopyToClipboard = ({ text }: CopyToClipboardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <button 
      onClick={handleCopy}
      className="text-sm text-neutral-600 hover:text-violet-500 transition-colors cursor-hover-target
                 flex items-center gap-2 px-3 py-1 relative"
    >
      <span>{text}</span>
      {copied ? (
        // Checkmark icon when copied
        <svg 
          className="w-4 h-4 text-green-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        // Copy icon by default
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
          />
        </svg>
      )}
      
      {/* Optional: Floating "Copied!" message */}
      {copied && (
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                        bg-black/80 text-white px-2 py-1 rounded text-xs
                        animate-fade-in">
          Copied!
        </span>
      )}
    </button>
  );
};