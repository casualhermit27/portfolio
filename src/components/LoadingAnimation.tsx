import { motion } from 'framer-motion';

export const LoadingAnimation = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3 }}
      onAnimationComplete={onComplete}
    >
      {/* Prompt Text with Shimmer */}
      <motion.div 
        className="prompt-container mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="prompt-label">Prompt</span>
        <span className="shine-effect relative z-10 font-mono italic">
          Give me a Portfolio of Harsha Chaganti
        </span>
      </motion.div>

      {/* Loading Circle */}
      <div className="relative">
        <motion.div
          className="w-12 h-12 rounded-full border-2 border-neutral-200"
          animate={{
            scale: [1, 1.2, 1],
            borderColor: ['#e5e5e5', '#3b82f6', '#e5e5e5']
          }}
          transition={{
            duration: 1.5,
            repeat: 1,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 border-2 border-transparent border-t-blue-500"
          animate={{ rotate: 360 }}
          transition={{
            duration: 0.75,
            repeat: 3,
            ease: "linear"
          }}
          style={{ borderRadius: '50%' }}
        />
      </div>
    </motion.div>
  );
};