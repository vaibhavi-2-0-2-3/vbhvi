'use client';

import { motion } from 'framer-motion';

export default function Starfield() {
  // Generate 100 stars with random positions
  const stars = new Array(100).fill(0).map((_, index) => ({
    id: index,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 z-0">
      {stars.map(({ id, top, left, delay, duration }) => (
        <motion.div
          key={id}
          className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-20"
          style={{ top, left }}
          animate={{ opacity: [0.1, 1, 0.1] }}
          transition={{
            repeat: Infinity,
            duration,
            ease: 'easeInOut',
            delay,
          }}
        />
      ))}
    </div>
  );
}
