import { motion } from 'motion/react';
import { ShieldCheck, Shield, BadgeDollarSign, Users, FileCheck } from 'lucide-react';

export const Guarantee = () => {
  const features = [
    { title: "Lifetime Warranty", icon: Shield },
    { title: "No Hidden Fees", icon: BadgeDollarSign },
    { title: "Local References", icon: Users },
    { title: "Fully Licensed", icon: FileCheck }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-4xl mx-auto text-center gpu-promote"
        >
          <div className="flex justify-center mb-4 md:mb-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-brand/20 bg-brand/5 text-brand font-black text-xs uppercase tracking-[0.2em] shadow-sm"
            >
              <ShieldCheck className="w-4 h-4" />
              100% Ironclad Protection
            </motion.div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-900 mb-4 md:mb-6 tracking-tight leading-tight text-wrap">
            Our Zero-Risk <span className="text-brand animate-[brandGlow_4s_ease-in-out_infinite]">Guarantee</span>
          </h2>
          
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium mb-12 md:mb-16">
            We stand behind every shingle and spike. If you're not 100% satisfied with our workmanship, we'll make it right. No questions asked.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.7 }}
                  className="group relative flex flex-col items-center p-6 md:p-8 rounded-[2rem] bg-zinc-50/50 border border-zinc-100 hover:border-brand/30 hover:bg-white hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 hover:-translate-y-1 gpu-promote"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-brand/5 border border-zinc-100 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-brand" />
                  </div>
                  <span className="text-zinc-900 text-sm md:text-base font-black tracking-tight leading-none">
                    {feature.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
