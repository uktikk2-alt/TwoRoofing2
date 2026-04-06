import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const Guarantee = () => {
  const features = [
    "Lifetime Warranty",
    "No Hidden Fees",
    "Local References",
    "Fully Licensed"
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="bg-[#0a0510] rounded-[2.5rem] md:rounded-[3.5rem] p-10 sm:p-16 md:p-24 relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
              Our Zero-Risk <span className="text-brand">Guarantee</span>
            </h2>
            
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
              We stand behind every shingle and spike. If you're not 100% satisfied with our workmanship, we'll make it right. No questions asked.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-4">
              {features.map((feature, i) => (
                <motion.div 
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                  className="flex items-center justify-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full border border-brand/30 flex items-center justify-center bg-brand/10 group-hover:bg-brand/20 transition-colors duration-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                  </div>
                  <span className="text-white text-sm md:text-base font-bold whitespace-nowrap tracking-tight group-hover:text-brand transition-colors duration-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
