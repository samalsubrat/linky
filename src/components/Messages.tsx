import { type Message as TMessage } from "ai"
import { Message } from "./Message"
import { MessageSquare } from "lucide-react"

interface MessageProps {
    messages: TMessage[]
}

export const Messages = ({messages}:MessageProps) => {
    return(
        <div className="flex max-h[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
            {messages.length ? messages.map((message, index) =>(
                <Message key={index} content={message.content} isUserMessage={message.role==="user"}/>
            )) : (<div className="flex-1 flex flex-col items-center justify-center gap-2">
                <MessageSquare className="size-8 text-blue-500"/>
                <h3 className="font-semibold text-xl text-white">You&apos;re all set!</h3>
                <p>Ask your first question to get started.</p>
            </div>)}
        </div>
    )
}