import { motion } from 'framer-motion';

export const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-neutral-100/50 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          left: '10%',
          top: '20%',
        }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-neutral-100/30 blur-3xl"
        animate={{
          x: [0, -70, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          right: '15%',
          top: '10%',
        }}
      />
    </div>
  );
}; 