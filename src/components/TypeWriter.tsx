import { useEffect, useState } from 'react';

export const TypeWriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 15); // Fast typing speed

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, text]);

  return (
    <p className="text-lg">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        {displayText}
      </span>
      {isTypingComplete && (
        <span className="inline-block w-[2px] h-5 ml-1 bg-purple-500 align-middle animate-cursor-blink" />
      )}
    </p>
  );
}; 