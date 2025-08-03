'use client';

import { motion } from 'framer-motion';

export default function AccretionDisk() {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-purple-300 opacity-60 blur-sm z-10"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
    />
  );
}
