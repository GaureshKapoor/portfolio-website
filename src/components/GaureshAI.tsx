import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, FormEvent } from "react";
import { Bot, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = { id: number; role: "assistant" | "user"; text: string };

const SEED_MESSAGE: Message = {
  id: 0,
  role: "assistant",
  text: "Hey! I'm Gauresh's AI — ask me about my work, projects, or background. (This is a demo; live answers coming soon.)",
};

const MOCK_REPLY =
  "Thanks for the message! Gauresh's live AI isn't connected yet — in the meantime, reach out via the form or links above.";

const GaureshAI = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([SEED_MESSAGE]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || thinking) return;

    const userMsg: Message = { id: Date.now(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setThinking(true);

    // TODO: replace this mocked reply with a real call to /api/chat (Vercel
    // serverless function -> Claude), with a system prompt built from content/*.md.
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "assistant", text: MOCK_REPLY }]);
      setThinking(false);
    }, 800);
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-center gap-3 p-4 border-b border-border">
        <div className="w-9 h-9 rounded-md border border-border bg-secondary flex items-center justify-center shrink-0">
          <Bot className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-foreground">Gauresh AI</p>
            <span className="text-[10px] uppercase tracking-wide font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary">
              Beta
            </span>
          </div>
          <p className="text-xs text-muted-foreground">Ask me anything — trained on Gauresh's background. (Demo)</p>
        </div>
      </div>

      <div ref={listRef} className="max-h-80 overflow-y-auto p-4 space-y-3">
        <AnimatePresence initial={false}>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] text-sm px-3 py-2 rounded-lg leading-relaxed ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-secondary text-foreground rounded-bl-sm"
                }`}
              >
                {m.text}
              </div>
            </motion.div>
          ))}
          {thinking && (
            <motion.div
              key="thinking"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-secondary text-muted-foreground text-sm px-3 py-2 rounded-lg rounded-bl-sm">
                Thinking...
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-border">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Gauresh AI..."
          className="flex-1"
          aria-label="Message Gauresh AI"
        />
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim() || thinking}
          aria-label="Send"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};

export default GaureshAI;
