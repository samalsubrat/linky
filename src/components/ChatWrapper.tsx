"use client";

import { Message as MessageType, useChat } from "ai/react";
import { Messages } from "./Messages";
import { ChatInput } from "./ChatInput";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation"; // Use this if you're using the App directory
import { reconstructUrl } from "../lib/reconstructUrl"; // Import the utility

const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string;
  initialMessages: MessageType[];
}) => {
  const { url } = useParams(); // Extract URL params from Next.js client-side routing
  const [previewUrl, setPreviewUrl] = useState("https://example.com");

  const { messages, handleInputChange, handleSubmit, input, setInput } =
    useChat({
      api: "/api/chat-stream",
      body: { sessionId },
      initialMessages,
    });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (url && Array.isArray(url)) {
      const reconstructedUrl = reconstructUrl(url); // Use the utility to reconstruct the URL
      setPreviewUrl(reconstructedUrl); // Set the iframe URL
    }
  }, [url]);

  return (
    <div className="flex h-screen bg-zinc-900">
      <div className="w-3/5 flex flex-col">
        <div className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto px-4 py-6" id="chat-messages">
            <div className="max-w-3xl mx-auto space-y-4">
              <Messages messages={messages} />
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
        <div className="shrink-0 bg-zinc-900 py-4">
          <ChatInput
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            setInput={setInput}
          />
        </div>
      </div>
      <div className="w-2/5 border-l border-zinc-700">
        <div className="h-full flex flex-col">
          <div className="bg-zinc-800 p-2 text-white text-sm">
            Browser Preview
          </div>
          <div className="flex-1 bg-white">
            <iframe
              src={previewUrl}
              className="w-full h-full"
              title="Browser Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWrapper;
