'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import planetImg from '@/public/blackhole.png';

export default function PurplePlanet() {
  return (
    <motion.div
      className="absolute top-[5%] left-[5%] w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 z-20"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 120, ease: 'linear' }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Image
        src={planetImg}
        alt="Purple Planet"
        className="w-full h-full object-contain"
        priority
      />
    </motion.div>
  );
}
