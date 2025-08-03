'use client';

import { motion } from 'framer-motion';

export default function Nebula() {
  return (
    <motion.div
      className="absolute top-1/2 left-0 w-full h-64 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent blur-3xl"
      animate={{ scaleX: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
    />

  );
}
