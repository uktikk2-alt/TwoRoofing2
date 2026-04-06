import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2, Minus, MoreHorizontal, Smile, Paperclip, ChevronRight } from 'lucide-react';
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
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-brand text-white p-4 rounded-full shadow-2xl shadow-brand/20 flex items-center justify-center group overflow-hidden"
      >
        <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />
        <motion.div 
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-0 right-0 md:bottom-28 md:right-8 z-50 w-full md:w-[420px] h-full md:h-[min(650px,85vh)] bg-white rounded-none md:rounded-[2.5rem] shadow-[0_30px_90px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-zinc-100"
          >
            {/* Header: Gradient + Profile */}
            <div className="bg-gradient-to-br from-brand via-brand-accent to-[#4f46e5] px-6 py-8 text-white relative">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-lg transform -rotate-3">
                    <Bot className="w-9 h-9 text-brand" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">Two22 Assistant</h3>
                  <p className="text-white/70 text-sm font-medium">You can ask me anything</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-1">
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors" onClick={() => setIsOpen(false)}><Minus className="w-5 h-5" /></button>
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
                      m.role === 'user' ? "bg-white border border-zinc-100 p-1" : "bg-gradient-to-br from-brand to-brand-accent text-white"
                    )}>
                      {m.role === 'user' ? <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop" className="w-full h-full rounded-lg object-cover" /> : <Bot className="w-5 h-5" />}
                    </div>
                    
                    <div className={cn(
                      "p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                      m.role === 'user' 
                        ? "bg-gradient-to-r from-brand to-[#4f46e5] text-white rounded-tr-none" 
                        : "bg-white text-zinc-800 border border-zinc-100 rounded-tl-none"
                    )}>
                      <div className="whitespace-pre-line">{m.content}</div>
                    </div>
                  </motion.div>

                  {/* Options List (like the refernce image) */}
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

                  {/* Service Selection List (like the reference image) */}
                  {m.role === 'assistant' && i === 0 && (
                    <div className="ml-11 mt-4 bg-white rounded-2xl border border-zinc-100 shadow-xl overflow-hidden divide-y divide-zinc-50 max-w-[90%]">
                      {[
                        { title: 'New Roof Installation', icon: '🏠' },
                        { title: 'Emergency Repair', icon: '🛠️' },
                        { title: 'Inspection Booking', icon: '📝' }
                      ].map((item) => (
                        <button
                          key={item.title}
                          onClick={() => handleSend(item.title)}
                          className="w-full px-5 py-4 flex items-center justify-between hover:bg-zinc-50 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-sm font-bold text-zinc-900 group-hover:text-brand transition-colors">{item.title}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-brand group-hover:translate-x-0.5 transition-all" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand to-brand-accent text-white flex items-center justify-center">
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

            {/* Input: Redesigned like reference */}
            <div className="p-6 bg-white border-t border-zinc-100">
              <div className="flex items-center gap-3">
                <div className="relative flex-1 group">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type and press [enter]"
                    className="w-full pl-5 pr-20 py-4 bg-zinc-50 border border-transparent rounded-2xl text-sm focus:bg-white focus:border-brand/20 transition-all outline-none font-medium placeholder:text-zinc-400"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-zinc-400 pr-1 border-l border-zinc-200 ml-2 pl-3">
                    <button className="hover:text-brand transition-colors"><Smile className="w-5 h-5" /></button>
                    <button className="hover:text-brand transition-colors md:block hidden"><Paperclip className="w-5 h-5" /></button>
                  </div>
                </div>
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="p-3.5 bg-zinc-100 hover:bg-brand text-zinc-400 hover:text-white rounded-full transition-all duration-300 disabled:opacity-50 shadow-sm"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
