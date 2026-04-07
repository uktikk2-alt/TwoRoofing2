import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const EstimateSection = ({ onOpenEstimate }: { onOpenEstimate: () => void }) => {
  return (
    <section id="estimate" className="py-12 md:py-16 bg-gradient-to-b from-white via-brand/[0.02] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="bg-zinc-900 rounded-3xl md:rounded-[2.5rem] p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden"
        >
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="flex flex-col items-center text-center max-w-2xl mx-auto relative z-10">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-20px" }}
               className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-2 md:mb-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-xs font-semibold text-zinc-400">Get Started</span>
            </motion.div>

            <motion.h3 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-20px" }}
               transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
               className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 tracking-tight text-white leading-tight md:leading-[1.05] max-w-[90%]"
            >
              Request Your <span className="text-brand animate-[brandGlow_4s_ease-in-out_infinite] opacity-90 drop-shadow-sm">Free Estimate</span>
            </motion.h3>
            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true, margin: "-20px" }}
               transition={{ delay: 0.2 }}
               className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg"
            >
              Schedule your professional inspection today. Wendell or Rhonda will contact you within 24 hours.
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-10 md:mb-14">
              {[
                "No-Obligation Inspection",
                "Detailed Damage Report",
                "Premium Materials"
              ].map((item, i) => (
                <motion.div 
                  key={item} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-2.5 text-zinc-300 text-sm md:text-base font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: 0.5 }}
              onClick={onOpenEstimate}
              className="group inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-lg shadow-brand/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
            >
              Get a Free Estimate
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
