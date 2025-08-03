'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Bot,
  Sun,
  Moon,
  BotOff,
  Home,
  Notebook,
  Contact,
  Folder,
  Terminal,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { useChatBot } from '@/context/ChatBotContext';

export default function BottomNav() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { isVisible, toggleBot } = useChatBot();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: '/', icon: <Home className="w-5 h-5" />, label: 'Home' },
    { href: '/blog', icon: <Notebook className="w-5 h-5" />, label: 'Blog' },
    { href: '/projects', icon: <Folder className="w-5 h-5" />, label: 'Projects' },
    { href: '/cli', icon: <Terminal className="w-5 h-5" />, label: 'CLI Mode' },
    { href: '/contact', icon: <Contact className="w-5 h-5" />, label: 'Contact' },
  ];

  return (
    <motion.nav
      drag
      dragConstraints={{ top: 0, bottom: 0 }} // optional constraints
      dragElastic={0.2}
      dragSnapToOrigin={false}
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 ...`}>
      <nav
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-3xl
  border border-white/20
  bg-[rgba(255,255,255,0.1)] dark:bg-[rgba(255,255,255,0.05)]
  backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]
  ring-1 ring-white/10 will-change-transform
  flex items-center transition-all duration-300 ease-in-out py-3 px-1
  ${hoveredIndex !== null ? 'gap-8 scale-105 px-6' : 'gap-4 sm:gap-6'}`}
      >


        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`flex items-center justify-center size-10 rounded-xl cursor-pointer transition-all duration-300 ease-in-out
            text-muted-foreground hover:text-[hsl(var(--brandred))]
            ${hoveredIndex === index ? 'scale-125 -translate-y-1 bg-white/20 dark:bg-white/10 shadow-lg' : hoveredIndex !== null ? 'scale-90 opacity-80' : 'scale-100'}
            hover:bg-white/20 dark:hover:bg-white/10`}
            >
              {link.icon}
            </div>
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-background text-xs text-foreground px-2 py-1 rounded-md transition-all duration-200 whitespace-nowrap">
              {link.label}
            </span>
          </Link>
        ))}

        {/* Chatbot Toggle */}
        <button
          onClick={toggleBot}
          onMouseEnter={() => setHoveredIndex(navLinks.length)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`flex items-center justify-center size-10 rounded-xl cursor-pointer transition-all duration-300 ease-in-out
        text-muted-foreground hover:text-[hsl(var(--brandred))]
        ${hoveredIndex === navLinks.length ? 'scale-125 -translate-y-1 bg-white/20 dark:bg-white/10 shadow-lg' : hoveredIndex !== null ? 'scale-90 opacity-80' : 'scale-100'}
        hover:bg-white/20 dark:hover:bg-white/10`}
        >
          {isVisible ? <Bot className="w-5 h-5" /> : <BotOff className="w-5 h-5" />}
        </button>

        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            onMouseEnter={() => setHoveredIndex(navLinks.length + 1)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex items-center justify-center size-10 rounded-xl cursor-pointer transition-all duration-300 ease-in-out
          text-muted-foreground hover:text-[hsl(var(--brandred))]
          ${hoveredIndex === navLinks.length + 1 ? 'scale-125 -translate-y-1 bg-white/20 dark:bg-white/10 shadow-lg' : hoveredIndex !== null ? 'scale-90 opacity-80' : 'scale-100'}
          hover:bg-white/20 dark:hover:bg-white/10`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        )}
      </nav>
    </motion.nav>
  );
}
