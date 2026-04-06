import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Guarantee = () => {
  const features = [
    "Lifetime Warranty",
    "No Hidden Fees",
    "Local References",
    "Fully Licensed"
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-2 md:mb-3">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/20 bg-brand/5 text-brand font-bold text-sm tracking-wide shadow-sm"
            >
              <ShieldCheck className="w-4 h-4" />
              100% Ironclad Protection
            </motion.div>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-zinc-900 mb-3 md:mb-4 tracking-tight leading-[1.1] text-wrap">
            Our Zero-Risk <span className="text-brand animate-[brandGlow_4s_ease-in-out_infinite]">Guarantee</span>
          </h2>
          
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            We stand behind every shingle and spike. If you're not 100% satisfied with our workmanship, we'll make it right. No questions asked.
          </p>

          <div className="mt-8 md:mt-12 bg-zinc-50/80 backdrop-blur-sm border border-zinc-200/60 rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-zinc-200/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                className="flex flex-col items-center justify-center gap-3 md:gap-4 group text-center cursor-default"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-sm border border-zinc-100 flex items-center justify-center flex-shrink-0 group-hover:border-brand/40 group-hover:shadow-brand/10 transition-all duration-300 group-hover:-translate-y-1">
                  <CheckCircle2 className="w-6 h-6 text-brand" />
                </div>
                <span className="text-zinc-800 text-sm md:text-base font-bold tracking-tight group-hover:text-brand transition-colors duration-300">
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
