'use client';
import { motion } from 'framer-motion';
import noise from '@/public/noise.svg';

export default function Header() {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: '220px' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full h-[400px] overflow-hidden z-0 pointer-events-none"
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-900 to-black opacity-70"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '100% 50%' }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ backgroundSize: '200% 200%' }}
      />


      {/* Falling Stars / Rain */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-px h-8 bg-white/40"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            animate={{
              y: ['0%', '120%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{ backgroundImage: `url(${noise.src})`, backgroundSize: 'cover' }}
      />
    </motion.div>
  );
}
