'use client';

import { useState } from 'react';
import { useChatBot } from '@/context/ChatBotContext';
import { Bot, Trash2 } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatBot() {
  const { isVisible } = useChatBot();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

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
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: '⚠️ Something went wrong.' }]);
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 w-80 h-[400px] rounded-xl border border-border shadow-lg bg-card text-card-foreground z-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-4 py-2 border-b border-border bg-card text-card-foreground">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-muted-foreground">
            Chat with
          </span>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 inline-block" />
            <span className="text-lg font-semibold">V Support</span>
          </div>
        </div>
      </div>


      {/* Chat Area (scrollable) */}
      <div className="flex-1 px-4 py-3 text-sm bg-muted overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-center text-muted-foreground text-xs mt-10 flex flex-col items-center space-y-3">
            <Bot className="w-6 h-6 text-foreground" />
            <p className="font-semibold text-foreground">Send a message to start the chat!</p>
            <p>You can ask the bot anything about me and it will help to find the relevant information!</p>
          </div>

        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 p-2 rounded-md w-fit max-w-[80%] break-words ${msg.role === 'user'
                ? 'ml-auto bg-primary text-primary-foreground'
                : 'mr-auto bg-accent text-accent-foreground'
                }`}
            >
              {msg.content}
            </div>
          ))
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2 p-3 border-t border-border bg-background">
        <button
          onClick={clearMessages}
          className="text-muted-foreground hover:text-destructive transition"
          title="Clear chat"
        >
          <Trash2 size={16} />
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask something..."
          className="flex-1 rounded-md border border-input px-2 py-1 text-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button
          onClick={sendMessage}
          className="bg-primary text-primary-foreground px-3 py-1 text-sm rounded-md hover:opacity-90 transition"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
