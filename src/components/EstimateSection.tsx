import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import EstimateForm from './EstimateForm';

export const EstimateSection = () => {
  return (
    <section id="estimate" className="py-24 md:py-40 bg-zinc-50 overflow-hidden relative">
      {/* Premium Background Accents */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none will-change-transform"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-200/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-zinc-900 shadow-2xl shadow-zinc-900/20 rounded-[3rem] md:rounded-[5rem] p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Inner Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
            <div className="relative z-10">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 max-w-md"
              >
                Fill out the form to schedule your professional inspection. Wendell or Rhonda will contact you within 24 hours.
              </motion.p>
              
              <div className="space-y-6">
                {[
                  "No-Obligation Inspection",
                  "Detailed Damage Report",
                  "Premium Material Options"
                ].map((item, i) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center gap-5 text-white/90 font-bold text-lg"
                  >
                    <div className="w-8 h-8 bg-brand/20 rounded-lg flex items-center justify-center text-brand">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full"
            >
              <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-zinc-800/50 backdrop-blur-xl border border-white/10 p-5 sm:p-6 md:p-8 lg:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl">
                <EstimateForm />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
