import { motion } from 'motion/react';
import { Counter } from './ui/Counter';
import { Award, CheckCircle2, Star, ThumbsUp } from 'lucide-react';

export const Stats = () => {
  const stats = [
    { label: 'Years Experience', value: '20+', icon: Award },
    { label: 'Local Projects', value: '800+', icon: CheckCircle2 },
    { label: '5-Star Reviews', value: '126+', icon: Star },
    { label: 'Satisfaction Rate', value: '100%', icon: ThumbsUp },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="text-center flex flex-col items-center"
              >
                <div className="text-3xl md:text-5xl font-black text-zinc-900 mb-1 md:mb-2 font-display">
                  <Counter value={stat.value} />
                </div>
                <div className="text-xs md:text-sm font-medium text-zinc-400 uppercase tracking-widest mb-4">
                  {stat.label}
                </div>
                {/* Animated Purple Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: (i * 0.1) + 0.3, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-brand/20 blur-lg rounded-full" />
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-brand relative z-10 animate-[pulse_3s_ease-in-out_infinite]" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
