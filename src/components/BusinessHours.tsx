import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
import { cn } from '../lib/utils';

export const BusinessHours = () => {
  const hours = [
    { day: 'Monday', time: '08:00 AM – 08:00 PM' },
    { day: 'Tuesday', time: '08:00 AM – 08:00 PM' },
    { day: 'Wednesday', time: '08:00 AM – 08:00 PM' },
    { day: 'Thursday', time: '08:00 AM – 08:00 PM' },
    { day: 'Friday', time: '08:00 AM – 08:00 PM' },
    { day: 'Saturday', time: '08:00 AM – 06:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <section className="py-16 md:py-20 bg-zinc-50/50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="bg-white rounded-[2rem] border border-zinc-200 shadow-lg shadow-zinc-200/30 overflow-hidden gpu-promote"
        >
          {/* Header */}
          <div className="p-8 md:p-10 border-b border-zinc-100 bg-zinc-50/30">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                <Clock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight">Business Hours</h2>
            </div>
            <p className="text-zinc-500 font-medium text-sm md:text-base ml-14">
              Our team is ready to assist you during the following operating times.
            </p>
          </div>

          {/* Hours List */}
          <div className="divide-y divide-zinc-100">
            {hours.map((item, i) => (
              <div 
                key={item.day}
                className="flex items-center justify-between p-6 md:p-8 hover:bg-zinc-50/50 transition-colors group"
              >
                <div className="flex flex-col">
                  <span className="font-black text-zinc-900 text-lg md:text-xl tracking-tight group-hover:text-brand transition-colors duration-300">
                    {item.day}
                  </span>
                </div>
                
                <div className="text-right">
                  <span className={cn(
                    "font-medium text-base md:text-lg tracking-tight",
                    item.day === 'Sunday' ? "text-zinc-400 italic" : "text-zinc-600"
                  )}>
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer-like note */}
          <div className="p-6 bg-zinc-50/50 border-t border-zinc-100 text-center">
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">
              Emergency Services available 24/7
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
