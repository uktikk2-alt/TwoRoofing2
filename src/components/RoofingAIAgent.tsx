import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2, Calculator, ShieldCheck, Calendar } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function RoofingAIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am your Two22 Roofing assistant. How can I help you today? I can provide estimate guidance, answer FAQs about Michigan roofing, or help you book an inspection.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', content: userMessage }].map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: `You are the official TWO22ROOFING (Two22 Roofing) virtual assistant for customers in/around Macomb, Michigan.

KNOWLEDGE BASE:
- Company: TWO22ROOFING
- Location: Macomb, Michigan
- Owners: Wendell and Rhonda
- History: Family-owned business serving the community since 1996.
- Mission: To deliver top-quality roofing solutions that protect homes and businesses in Macomb, Michigan, while ensuring exceptional service and reliability.
- Services: New Roof Installation, Advanced Roof Inspections, Efficient Roof Repair Solutions, Comprehensive Roof Maintenance, Home Improvement (repairs/installations), Siding Installation, Gutters/Guards Installation, and Attic Insulation.
- Values: Integrity, Quality, Customer Focus, Innovation, Community Commitment.

RULES:
- Only answer exactly what the user is asking. 
- Do not add extra information, services, phone numbers, or details unless necessary or requested.
- If the user sends only a greeting (e.g., "hi", "hello", "hey"), respond ONLY with a short greeting and a simple offer to help. 
  Example: "Hi, how can I help you today?"
- Do not mention services, phone numbers, estimates, or emergency help unless the user specifically asks about them.
- Keep responses short, natural, and conversational.
- Expand only if the user asks for more details.

HARD RULES (ACCURACY / TRUST):
- Only state facts that appear in the Knowledge Base. If something is not in the KB, say: “I don’t have that detail available here, but I can help you get it—please call or request a quote.”
- Never invent promotions, prices, coupons, addresses, or timelines.
- If the user reports an active leak or urgent damage:
  1) Advise they contact TWO22ROOFING immediately by phone.
  2) Provide owner numbers: Wendell (Owner): (586) 265-6607 and Rhonda (Owner): (586) 307-2872.
- Don’t give dangerous DIY instructions. Favor safety and professional inspection.

STYLE / BRAND VOICE:
- Friendly, straightforward, “small business owner” vibe.
- Keep responses concise (2-6 lines) and easy to scan.
- Use short paragraphs and bullet points for lists.
- Never give cluttered “wall of text” responses.

CONTACT (ONLY IF ASKED OR URGENT):
- Wendell (Owner): (586) 265-6607
- Rhonda (Owner): (586) 307-2872`,
        }
      });

      const aiResponse = response.text || "I'm sorry, I couldn't process that. Please call us directly at (586) 265-6607.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting right now. Please call our team for immediate assistance!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-brand text-white p-3 md:p-4 rounded-full shadow-2xl shadow-brand/20 flex items-center justify-center group"
      >
        <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
        <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap font-medium">
          Chat with AI
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-0 right-0 md:bottom-24 md:right-6 z-50 w-full md:w-[400px] h-full md:h-[min(600px,80vh)] bg-white rounded-none md:rounded-3xl shadow-2xl border-none md:border md:border-zinc-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-zinc-900 p-4 md:p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-brand rounded-lg md:rounded-xl flex items-center justify-center">
                  <Bot className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base">Two22 AI Assistant</h3>
                  <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
                    Online & Ready
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-zinc-50/50">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "flex gap-2 md:gap-3 max-w-[90%] md:max-w-[85%]",
                    m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                    m.role === 'user' ? "bg-zinc-200" : "bg-brand/10 text-brand"
                  )}>
                    {m.role === 'user' ? <User className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <Bot className="w-3.5 h-3.5 md:w-4 md:h-4" />}
                  </div>
                  <div className={cn(
                    "p-2.5 md:p-3 rounded-2xl text-xs md:text-sm leading-relaxed",
                    m.role === 'user' 
                      ? "bg-brand text-white rounded-tr-none" 
                      : "bg-white text-zinc-800 shadow-sm border border-zinc-100 rounded-tl-none"
                  )}>
                    {m.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-2 md:gap-3 max-w-[85%]">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                    <Loader2 className="w-3.5 h-3.5 md:w-4 md:h-4 animate-spin" />
                  </div>
                  <div className="bg-white p-2.5 md:p-3 rounded-2xl rounded-tl-none shadow-sm border border-zinc-100">
                    <div className="flex gap-1">
                      <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-zinc-300 rounded-full animate-bounce" />
                      <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="px-4 md:px-6 py-2 md:py-3 flex gap-2 overflow-x-auto no-scrollbar border-t border-zinc-100">
              <button 
                onClick={() => setInput("How much does a new roof cost?")}
                className="whitespace-nowrap px-2.5 py-1 md:px-3 md:py-1.5 bg-white border border-zinc-200 rounded-full text-[10px] md:text-xs font-medium hover:border-brand hover:text-brand transition-all flex items-center gap-1 md:gap-1.5"
              >
                <Calculator className="w-2.5 h-2.5 md:w-3 md:h-3" /> Estimate Guide
              </button>
              <button 
                onClick={() => setInput("Book a free inspection")}
                className="whitespace-nowrap px-2.5 py-1 md:px-3 md:py-1.5 bg-white border border-zinc-200 rounded-full text-[10px] md:text-xs font-medium hover:border-brand hover:text-brand transition-all flex items-center gap-1 md:gap-1.5"
              >
                <Calendar className="w-2.5 h-2.5 md:w-3 md:h-3" /> Book Inspection
              </button>
              <button 
                onClick={() => setInput("What warranties do you offer?")}
                className="whitespace-nowrap px-2.5 py-1 md:px-3 md:py-1.5 bg-white border border-zinc-200 rounded-full text-[10px] md:text-xs font-medium hover:border-brand hover:text-brand transition-all flex items-center gap-1 md:gap-1.5"
              >
                <ShieldCheck className="w-2.5 h-2.5 md:w-3 md:h-3" /> Warranties
              </button>
            </div>

            {/* Input */}
            <div className="p-4 md:p-6 pt-0">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="w-full pl-3 md:pl-4 pr-10 md:pr-12 py-2.5 md:py-3 bg-zinc-100 border-none rounded-xl md:rounded-2xl text-xs md:text-sm focus:ring-2 focus:ring-brand/20 transition-all outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 md:right-2 p-1.5 md:p-2 bg-brand text-white rounded-lg md:rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-dark transition-colors"
                >
                  <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </button>
              </div>
              <p className="text-[9px] md:text-[10px] text-center text-zinc-400 mt-2 md:mt-3">
                Powered by Two22 AI • Professional Roofing Guidance
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { cn } from '../lib/utils';
