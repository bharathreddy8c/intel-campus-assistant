import { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { QuickActions } from "./QuickActions";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! I'm your Smart Campus Assistant. I can help you with course information, campus events, administrative procedures, and more. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I'd be happy to help you with that! Let me provide you with the most up-to-date information about your request.",
        "Great question! Based on the latest campus information, here's what I can tell you...",
        "I understand you're looking for information about this. Here are the details you need to know:",
        "That's a common question from students. Let me walk you through the process step by step.",
        "I can definitely assist with that request. Here's the information you're looking for:",
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);

      toast({
        title: "Response received",
        description: "I've found the information you requested.",
        duration: 2000,
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1">
        <div className="space-y-1">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
          {isLoading && (
            <div className="flex gap-3 p-4">
              <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
              <div className="flex-1">
                <div className="h-4 bg-muted rounded animate-pulse mb-2" />
                <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      <QuickActions onQuickAction={handleSendMessage} />
      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  );
};