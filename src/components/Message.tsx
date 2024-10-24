import { cn } from "@/app/lib/utils"
import { Bot, User } from "lucide-react"

interface MessageProps {
  content: string
  isUserMessage: boolean
}

export const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <div      
      className={cn(
        "mb-4 last:mb-0 overflow-hidden",
        isUserMessage ? "items-end" : "items-start"
      )}
    >
      <div
        className={cn(
          "flex max-w-3xl mx-auto items-start gap-3 rounded-lg p-4 shadow-md transition-colors",
          isUserMessage
            ? "bg-zinc-900 text-white"
            : "bg-zinc-800/50 "
        )}
      >
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
            isUserMessage
              ? "bg-blue-600"
              : "bg-gradient-to-br from-purple-500 to-pink-500"
          )}
        >
          {isUserMessage ? (
            <User className="h-5 w-5 text-white" />
          ) : (
            <Bot className="h-5 w-5 text-white" />
          )}
        </div>
        <div className="flex flex-col">
          <span
            className={cn(
              "text-sm font-semibold",
              isUserMessage ? "text-blue-100" : "text-gray-900 dark:text-gray-100"
            )}
          >
            {isUserMessage ? "You" : "Linky"}
          </span>
          <p
            className={cn(
              "mt-1 text-sm",
              isUserMessage ? "text-white" : "text-gray-700 dark:text-gray-300"
            )}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}