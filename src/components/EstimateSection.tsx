import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const EstimateSection = ({ onOpenEstimate }: { onOpenEstimate: () => void }) => {
  return (
    <section id="estimate" className="py-20 md:py-28 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="bg-zinc-900 rounded-3xl md:rounded-[2.5rem] p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden"
        >
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="flex flex-col items-center text-center max-w-2xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-xs font-semibold text-zinc-400">Get Started</span>
            </div>

            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-5 tracking-tight text-white leading-[1.1]">
              Request Your <span className="text-brand">Free Estimate</span>
            </h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              Schedule your professional inspection today. Wendell or Rhonda will contact you within 24 hours.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
              {[
                "No-Obligation Inspection",
                "Detailed Damage Report",
                "Premium Materials"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-zinc-300 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenEstimate}
              className="group inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-lg shadow-brand/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
            >
              Request Your Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
