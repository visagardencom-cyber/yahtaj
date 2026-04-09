"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: "0",
  role: "assistant",
  content:
    "👋 Hi! I'm Yahtaj's AI assistant. How can I help you today? I can answer questions about our services, pricing, or help you get started.",
  timestamp: new Date(),
};

const RESPONSES: Record<string, string> = {
  default:
    "Thanks for your message! Our team will get back to you shortly. For immediate assistance, please use our contact form or call us directly.",
  services:
    "We offer AI Solutions, Web Development, Process Automation, AI Consulting, Cloud Solutions, Cybersecurity, Software Development, Data Analytics, Workflow Optimization, and 24/7 Support. Which service are you interested in?",
  pricing:
    "Our pricing is customized based on your specific needs and project scope. Please fill out our contact form and we'll provide a free consultation and quote within 24 hours.",
  contact:
    "You can reach us at hello@yahtaj.com or call +1 (555) 123-4567. You can also use the contact form on this page!",
  ai: "Our AI solutions include custom chatbots, machine learning models, natural language processing, computer vision, and intelligent automation. We tailor every solution to your business goals.",
  web: "We build modern, responsive websites and web applications using Next.js, React, TypeScript, and other cutting-edge technologies with a focus on performance and UX.",
  automation:
    "We automate repetitive business tasks using RPA, AI workflows, and custom integrations — helping you save time and reduce operational costs significantly.",
};

function getResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("service") || lower.includes("offer") || lower.includes("what do you"))
    return RESPONSES.services;
  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much"))
    return RESPONSES.pricing;
  if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("reach"))
    return RESPONSES.contact;
  if (lower.includes("ai") || lower.includes("artificial") || lower.includes("machine learning") || lower.includes("chatbot"))
    return RESPONSES.ai;
  if (lower.includes("web") || lower.includes("website") || lower.includes("app"))
    return RESPONSES.web;
  if (lower.includes("automat") || lower.includes("workflow") || lower.includes("process"))
    return RESPONSES.automation;
  return RESPONSES.default;
}

export function AIChat() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 500));

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: getResponse(userMessage.content),
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, aiMessage]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg flex items-center justify-center text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl border bg-card shadow-2xl overflow-hidden flex flex-col"
            style={{ height: "480px" }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b bg-gradient-to-r from-primary to-secondary text-white">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm">Yahtaj AI Assistant</p>
                <p className="text-xs text-white/80">Always here to help</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/80">Online</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "assistant"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <Bot className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${
                      msg.role === "assistant"
                        ? "bg-muted text-foreground rounded-tl-none"
                        : "bg-primary text-white rounded-tr-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-none px-4 py-3 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t flex gap-2">
              <Input
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 text-sm"
              />
              <Button
                size="icon"
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                className="shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
