'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bot, Sun, Moon, BotOff, Home, Notebook, Contact, Folder, Terminal } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useChatBot } from '@/context/ChatBotContext';

export default function BottomNav() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { isVisible, toggleBot } = useChatBot();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: '/', icon: <Home className="w-5 h-5" />, label: 'Home' },
    { href: '/blog', icon: <Notebook className="w-5 h-5" />, label: 'Blog' },
    { href: '/projects', icon: <Folder className="w-5 h-5" />, label: 'Projects' },
    { href: '/terminal', icon: <Terminal className="w-5 h-5" />, label: 'Terminal' },
    { href: '/contact', icon: <Contact className="w-5 h-5" />, label: 'Contact' }
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-3xl border border-border/20 bg-background/80 backdrop-blur-md shadow-xl px-4 py-3 flex items-center space-x-4 sm:space-x-6">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="relative group"
        >
          <div className="p-2 rounded-xl hover:bg-accent transition-colors text-muted-foreground hover:text-foreground">
            {link.icon}
          </div>
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-background text-xs text-foreground px-2 py-1 rounded-md transition-all duration-200">
            {link.label}
          </span>
        </Link>
      ))}

      {/* Chatbot Toggle */}
      <button
        onClick={toggleBot}
        className="p-2 rounded-xl hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
      >
        {isVisible ? <Bot className="w-5 h-5" /> : <BotOff className="w-5 h-5" />}
      </button>

      {/* Theme Toggle */}
      {mounted && (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-xl hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      )}
    </nav>
  );
}
