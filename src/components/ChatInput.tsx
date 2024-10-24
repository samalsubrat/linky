"use client";

import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { type useChat } from "ai/react";
import { Textarea } from "./ui/textarea";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];

interface ChatInputProps {
  input: string;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  setInput: SetInput;
}

export const ChatInput = ({
  handleInputChange,
  handleSubmit,
  input,
  setInput,
}: ChatInputProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto py-4 pr-4">
      <form onSubmit={handleSubmit} className="relative w-full">
        <Textarea
          autoFocus
          onChange={handleInputChange}
          value={input}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
              setInput("");
            }
          }}
          placeholder="Enter your question..."
          className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base p-4 pr-12"
          rows={1}
        />

        <Button
          variant="default"
          size="sm"
          type="submit"
          className="absolute z-10 border border-border bg-zinc-900 right-2 bottom-2"
        >
          <Send className="size-4 text-white" />
        </Button>
      </form>
    </div>
  );
};