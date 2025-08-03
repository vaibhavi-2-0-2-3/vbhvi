'use client';

import { motion } from 'framer-motion';

export default function DiagonalStreaks() {
  const streaks = new Array(40).fill(0).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 3,
    length: `${40 + Math.random() * 80}px`,
    opacity: 0.2 + Math.random() * 0.4,
  }));

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {streaks.map(({ id, top, left, delay, duration, length, opacity }) => (
        <motion.div
          key={id}
          className="absolute h-[2px] bg-gradient-to-r from-white/80 to-white/0 rounded-full blur-[1px]"
          style={{
            width: length,
            top,
            left,
            rotate: '45deg',
            opacity,
          }}
          initial={{ x: 0, y: 0 }}
          animate={{ x: 200, y: 200 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration,
            delay,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  );
}
