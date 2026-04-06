import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const EstimateSection = ({ onOpenEstimate }: { onOpenEstimate: () => void }) => {
  return (
    <section id="estimate" className="py-20 md:py-32 bg-zinc-50 overflow-hidden relative">
      {/* Premium Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-200/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-zinc-900 shadow-2xl shadow-zinc-900/20 rounded-[3rem] md:rounded-[5rem] p-8 sm:p-12 md:p-16 lg:p-24 relative overflow-hidden"
        >
          {/* Inner Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>

          <div className="flex flex-col items-center text-center max-w-3xl mx-auto relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand font-black uppercase tracking-[0.4em] text-xs md:text-sm block mb-6"
            >
              Get Started
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-7xl font-black mb-8 tracking-tight text-white leading-[1.1]"
            >
              Request Your <br /> <span className="text-brand">Free Estimate</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 max-w-xl"
            >
              Schedule your professional inspection today. Wendell or Rhonda will contact you within 24 hours.
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-14">
              {[
                "No-Obligation Inspection",
                "Detailed Damage Report",
                "Premium Material Options"
              ].map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-3 text-white/80 font-bold text-sm md:text-base"
                >
                  <div className="w-6 h-6 bg-brand/20 rounded-lg flex items-center justify-center text-brand flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Premium CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={onOpenEstimate}
              className="group relative overflow-hidden bg-brand text-white px-12 md:px-16 py-5 md:py-7 rounded-full font-black text-lg md:text-xl shadow-2xl shadow-brand/40 flex items-center gap-4 border border-brand-light/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              {/* Sparkle animation */}
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 relative z-10 animate-[pulse_2s_ease-in-out_infinite]" />
              <span className="relative z-10">Request Your Estimate</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
