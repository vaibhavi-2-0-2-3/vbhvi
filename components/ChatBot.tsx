'use client';

import { useState, useEffect, useRef } from 'react';
import { useChatBot } from '@/context/ChatBotContext';
type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatBot() {
  const { isVisible } = useChatBot();

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const reply = data.reply;

      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: '⚠️ Something went wrong.' }]);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 👇 Don't render anything if chatbot is toggled off
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 w-80 max-h-[90vh] rounded-xl border shadow-lg bg-background text-foreground z-50 flex flex-col animate-fade-in">
      <div className="px-4 pt-3 pb-2 border-b text-sm font-semibold bg-card text-card-foreground rounded-t-xl">
        💬 Ask me about Vaibhavi
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 text-sm bg-muted scrollbar-thin">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-md w-fit max-w-full break-words ${msg.role === 'user'
              ? 'ml-auto bg-primary text-primary-foreground'
              : 'mr-auto bg-accent text-accent-foreground'
              }`}
          >
            {msg.content}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="flex gap-2 p-3 border-t bg-background">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a question..."
          className="flex-1 rounded-md border px-2 py-1 text-sm bg-background text-foreground placeholder-muted-foreground"
        />
        <button
          onClick={sendMessage}
          className="bg-primary text-primary-foreground px-3 py-1 text-sm rounded-md hover:opacity-90 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
