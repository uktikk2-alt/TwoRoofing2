import { motion } from 'motion/react';
import { Clock, Star, Award, Home } from 'lucide-react';
import { Counter } from './ui/Counter';

export const Stats = () => {
  const stats = [
    { label: 'Years Experience', value: '28+', icon: Clock },
    { label: 'Local Projects', value: '2,400+', icon: Home },
    { label: '5-Star Reviews', value: '950+', icon: Star },
    { label: 'Satisfaction Rate', value: '100%', icon: Award },
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative z-20 border-b border-zinc-100 overflow-hidden">
      {/* Decorative Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <div className="relative w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-6">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  className="absolute inset-0 bg-brand/10 rounded-lg md:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="relative w-full h-full bg-zinc-50 rounded-lg md:rounded-2xl flex items-center justify-center group-hover:bg-brand transition-all duration-500 group-hover:shadow-xl group-hover:shadow-brand/20"
                >
                  <stat.icon className="w-5 h-5 md:w-8 md:h-8 text-brand group-hover:text-white transition-colors duration-500" />
                </motion.div>
              </div>
              <div className="text-2xl md:text-5xl font-black text-zinc-900 mb-0.5 md:mb-2 font-display">
                <Counter value={stat.value} />
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="text-[10px] md:text-sm font-bold text-zinc-500 uppercase tracking-widest"
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
