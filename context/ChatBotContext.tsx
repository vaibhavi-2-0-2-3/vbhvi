'use client';

import { createContext, useContext, useState } from 'react';

type ChatBotContextType = {
  isVisible: boolean;
  toggleBot: () => void;
};

const ChatBotContext = createContext<ChatBotContextType | undefined>(undefined);

export const ChatBotProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleBot = () => setIsVisible((prev) => !prev);

  return (
    <ChatBotContext.Provider value={{ isVisible, toggleBot }}>
      {children}
    </ChatBotContext.Provider>
  );
};

export const useChatBot = () => {
  const context = useContext(ChatBotContext);
  if (!context) throw new Error('useChatBot must be used within ChatBotProvider');
  return context;
};
