import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, FormEvent } from "react";
import { Sparkles, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = { id: number; role: "assistant" | "user"; text: string };

const SEED_MESSAGE: Message = {
  id: 0,
  role: "assistant",
  text: "Hey! I'm Gauresh's AI. Ask me about his work, projects, or background. (This is a demo; live answers coming soon.)",
};

const MOCK_REPLY =
  "Thanks for the message! Gauresh's live AI isn't connected yet. In the meantime, reach out via the form or the contact links above.";

const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-3 py-2.5">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-violet-400"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </div>
);

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
    <div className="flex flex-col overflow-hidden rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-500/10 via-card to-card backdrop-blur shadow-[0_8px_40px_-12px_rgba(139,92,246,0.35)]">
      <div className="flex items-center gap-3 px-4 py-3.5 border-b border-violet-500/20">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-md shadow-violet-500/25">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-foreground">Gauresh AI</p>
            <span className="text-[10px] uppercase tracking-wide font-mono px-1.5 py-0.5 rounded bg-violet-500/15 text-violet-400 border border-violet-500/20">
              Beta
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_1px_rgba(52,211,153,0.6)]" />
            <p className="text-xs text-muted-foreground">Online (Demo)</p>
          </div>
        </div>
      </div>

      <div ref={listRef} className="max-h-80 overflow-y-auto px-4 py-4 space-y-3">
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
                className={`max-w-[85%] text-sm px-3 py-2 rounded-xl leading-relaxed ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-violet-500/10 text-foreground rounded-bl-sm border border-violet-500/15"
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
              <div className="bg-violet-500/10 rounded-xl rounded-bl-sm border border-violet-500/15">
                <TypingIndicator />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-3 border-t border-violet-500/20">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Gauresh AI..."
          className="flex-1 border-violet-500/20 focus-visible:ring-violet-500/40 bg-violet-500/5"
          aria-label="Message Gauresh AI"
        />
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim() || thinking}
          aria-label="Send"
          className="bg-gradient-to-br from-violet-500 to-indigo-600 text-white hover:from-violet-400 hover:to-indigo-500 border-0 shadow-md shadow-violet-500/25 disabled:opacity-40"
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};

export default GaureshAI;
