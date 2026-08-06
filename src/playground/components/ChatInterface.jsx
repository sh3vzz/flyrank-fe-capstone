import React, { useEffect, useRef, useState } from "react";
import { useChat } from "ai/react";

export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "/api/chat",
    });

  const scrollContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  // Detect user scroll position
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } =
      scrollContainerRef.current;

    // Check if user is within 50px of the bottom
    const bottomThreshold = 50;
    const isBottom = scrollHeight - scrollTop - clientHeight <= bottomThreshold;
    setIsAtBottom(isBottom);
  };

  // Smart Auto-Scroll: only scroll down if user is pinned to bottom
  useEffect(() => {
    if (isAtBottom) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isAtBottom]);

  const scrollToBottom = () => {
    setIsAtBottom(true);
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex flex-col h-[600px] w-full max-w-2xl mx-auto border rounded-xl bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b bg-slate-50 font-semibold text-slate-700 flex justify-between items-center">
        <span>AI Assistant (Gemini)</span>
        {isLoading && (
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full animate-pulse">
            Streaming...
          </span>
        )}
      </div>

      {/* Message List */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-4 space-y-4 relative"
      >
        {messages.length === 0 && (
          <p className="text-center text-slate-400 my-auto">
            Ask anything to start the conversation...
          </p>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                m.role === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-slate-100 text-slate-800 rounded-bl-none"
              }`}
            >
              <span className="block text-xs opacity-75 mb-1">
                {m.role === "user" ? "You" : "Gemini"}
              </span>
              <p className="whitespace-pre-wrap">{m.content}</p>
            </div>
          </div>
        ))}

        {/* Thinking Indicator handoff */}
        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex justify-start">
            <div className="bg-slate-100 text-slate-500 rounded-2xl rounded-bl-none px-4 py-2 text-sm animate-pulse">
              Thinking...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* "Jump to Latest" affordance when user scrolls up */}
      {!isAtBottom && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-20 right-6 bg-slate-800 text-white text-xs px-3 py-2 rounded-full shadow-lg hover:bg-slate-700 transition-all z-10"
        >
          ↓ Jump to latest
        </button>
      )}

      {/* Form Controls */}
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t flex gap-2 bg-white"
      >
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {isLoading ? (
          <button
            type="button"
            onClick={stop}
            className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 font-medium"
          >
            Stop
          </button>
        ) : (
          <button
            type="submit"
            disabled={!input.trim()}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50 font-medium"
          >
            Send
          </button>
        )}
      </form>
    </div>
  );
}
