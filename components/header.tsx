'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bot, Sun, Moon, BotOff } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useChatBot } from '@/context/ChatBotContext';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { isVisible, toggleBot } = useChatBot();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6">
      <div className="mx-auto max-w-2xl py-4">
        <nav className="flex items-center justify-between rounded-2xl bg-background/80 backdrop-blur-md border border-border/50 px-6 py-3 shadow-lg">
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-9 w-9" onClick={toggleBot}>
              {isVisible ? <Bot className="size-5" /> : <BotOff className="size-5" />}
              <span className="sr-only">Chat Toggle</span>
            </Button>

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
