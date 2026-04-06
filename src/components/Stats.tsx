import { motion } from 'motion/react';
import { Counter } from './ui/Counter';

export const Stats = () => {
  const stats = [
    { label: 'Years Experience', value: '20+' },
    { label: 'Local Projects', value: '2,400+' },
    { label: '5-Star Reviews', value: '950+' },
    { label: 'Satisfaction Rate', value: '100%' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-black text-zinc-900 mb-1 md:mb-2 font-display">
                <Counter value={stat.value} />
              </div>
              <div className="text-xs md:text-sm font-medium text-zinc-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
