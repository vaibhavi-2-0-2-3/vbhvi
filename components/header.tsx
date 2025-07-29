'use client';
import { motion } from 'framer-motion';
import noise from '@/public/noise.svg';

export default function Header() {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: '220px' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full h-[220px] overflow-hidden z-0 pointer-events-none"
    >
      {/* Animated gradient background */}
      <motion.div
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '100% 50%' }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 opacity-60 bg-[length:200%_200%]"
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{ backgroundImage: `url(${noise.src})`, backgroundSize: 'cover' }}
      />
    </motion.div>
  );
}
