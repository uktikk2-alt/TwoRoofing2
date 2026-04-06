import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, SendHorizontal, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { cn } from '../lib/utils';

// Safely handle API key. If missing, the agent will show an error message instead of crashing.
const getApiKey = () => {
  try {
    return (process.env && process.env.GEMINI_API_KEY) || '';
  } catch {
    return '';
  }
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

interface Message {
  role: 'user' | 'assistant';
  content: string;
  type?: 'text' | 'options' | 'pills';
  options?: string[];
}

export default function RoofingAIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'Hi There, \nHow can I help you today?',
      type: 'pills',
      options: ['New Roof', 'Roof Repair', 'Inspection', 'Gutter/Siding']
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input.trim();
    if (!textToSend || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: textToSend }]);
    setIsLoading(true);

    try {
      if (!getApiKey()) {
        throw new Error("API Key missing");
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', content: textToSend }].map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: `You are the official TWO22ROOFING assistant. 
          Respond to user queries about roofing in Macomb, Michigan.
          - Offer: New Roof Installation, Repairs, Inspections, Maintenance, Siding, Gutters, Attic Insulation.
          - Style: Professional, friendly, helpful.
          - Owners: Wendell and Rhonda.
          - Phone: (586) 265-6607 (Wendell), (586) 307-2872 (Rhonda).
          - Be extremely concise.`,
        }
      });

      const aiResponse = response.text || "I'm sorry, I couldn't process that. Please call us directly at (586) 265-6607.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse, type: 'text' }]);
    } catch (error) {
      console.error('AI Error:', error);
      const errorMsg = !getApiKey() 
        ? "The AI is currently in 'View Only' mode. Please call our team at (586) 265-6607 for assistance!" 
        : "I'm having trouble connecting right now. Please call our team for immediate assistance!";
      setMessages(prev => [...prev, { role: 'assistant', content: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 2.5, duration: 0.8, ease: [0.25, 1, 0.5, 1] } }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3 } }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[80] bg-white/90 backdrop-blur-sm border border-brand/10 text-brand p-3.5 md:p-4 rounded-full shadow-xl shadow-brand/15 hover:shadow-2xl hover:shadow-brand/25 flex items-center justify-center group transition-[transform,box-shadow] duration-300"
          >
            <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-brand rounded-full border-2 border-white" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-brand rounded-full animate-ping opacity-75" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-0 right-0 md:bottom-28 md:right-8 z-50 w-full md:w-[420px] h-full md:h-[min(650px,85vh)] bg-white rounded-none md:rounded-[2.5rem] shadow-[0_30px_90px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-zinc-100"
          >
            {/* Header: Brand Purple */}
            <div className="bg-brand px-6 py-8 text-white relative">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-lg transform -rotate-3">
                    <Bot className="w-9 h-9 text-brand" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full border-4 border-brand animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">Two22 Assistant</h3>
                  <p className="text-white/70 text-sm font-medium">You can ask me anything</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-1">
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-50/30">
              {messages.map((m, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={cn(
                      "flex gap-3 max-w-[85%]",
                      m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm",
                      m.role === 'user' ? "bg-white border border-zinc-100 p-1" : "bg-brand text-white"
                    )}>
                      {m.role === 'user' ? (
                        <User className="w-4 h-4 text-zinc-500" />
                      ) : (
                        <Bot className="w-5 h-5" />
                      )}
                    </div>
                    
                    <div className={cn(
                      "p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                      m.role === 'user' 
                        ? "bg-brand text-white rounded-tr-none" 
                        : "bg-white text-zinc-800 border border-zinc-100 rounded-tl-none"
                    )}>
                      <div className="whitespace-pre-line">{m.content}</div>
                    </div>
                  </motion.div>

                  {/* Options Pills */}
                  {m.type === 'pills' && m.options && (
                    <div className="flex flex-wrap gap-2 ml-11">
                      {m.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSend(opt)}
                          className="px-4 py-2 bg-white border border-brand/20 hover:border-brand hover:bg-brand/[0.02] text-brand text-xs font-bold rounded-full transition-all duration-300 shadow-sm shadow-brand/5"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-xl bg-brand text-white flex items-center justify-center">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-zinc-100">
                    <span className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 bg-brand/30 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-brand/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-brand/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input: Pure Brand Purple Send Button + Visible Typeform */}
            <div className="p-6 bg-white border-t border-zinc-100">
              <div className="flex items-center gap-3">
                <div className="relative flex-1 group">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="type here"
                    className="w-full px-5 py-4 bg-zinc-100 border border-zinc-200 rounded-2xl text-sm focus:bg-white focus:border-brand/40 transition-all outline-none font-medium placeholder:text-zinc-400"
                  />
                </div>
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="p-4 bg-brand text-white border-none rounded-full transition-all duration-300 disabled:opacity-50 shadow-lg shadow-brand/20 flex items-center justify-center"
                >
                  <SendHorizontal className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
