import React, { createContext, useContext, useMemo, useState } from "react";

// Estado global y API para abrir/cerrar el panel de chat y
// seleccionar el chat activo (por publicación o general)
const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeChat, setActiveChat] = useState(null);

  const openChat = (chat = null) => {
    if (chat) setActiveChat(chat);
    setIsOpen(true);
  };

  const toggleChat = (chat = null) => {
    if (chat) setActiveChat(chat);
    setIsOpen((prev) => !prev);
  };

  const openChatForPublication = ({ publicationId, postTitle, counterpartUsername }) => {
    setActiveChat({ publicationId, postTitle, counterpartUsername });
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const value = useMemo(
    () => ({ isOpen, activeChat, openChat, toggleChat, openChatForPublication, closeChat }),
    [isOpen, activeChat]
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
}