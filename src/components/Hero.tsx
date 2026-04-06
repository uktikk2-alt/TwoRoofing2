import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Phone, Zap } from 'lucide-react';

export const Hero = ({ onOpenEstimate }: { onOpenEstimate: () => void }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.08]);

  // Premium Framer Motion Variants — opacity + translateY only (GPU-friendly)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4, ease: "easeOut" }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const textReveal = {
    hidden: { y: "120%" },
    show: { 
      y: "0%", 
      transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 py-20 md:py-0">
      {/* Background Image — no filter animation (was causing paint jitter) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
        style={{ y: y1 }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <motion.div style={{ scale }} className="w-full h-full will-change-transform">
          <img 
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop" 
            alt="Premium Roofing" 
            className="w-full h-[120%] object-cover object-top opacity-50"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/60 to-zinc-950" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center pt-24 md:pt-0 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-6 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 md:px-5 py-2 md:py-2.5 rounded-full text-white/90 text-[10px] md:text-sm font-bold relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.25,1,0.5,1]" />
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-brand-accent animate-[pulse_3s_ease-in-out_infinite] relative z-10" />
              <span className="relative z-10 tracking-[0.2em] uppercase">#1 Rated Roofing in Macomb County</span>
            </div>
          </motion.div>

          {/* Heading with layered overflow reveal */}
          <div className="mb-6 md:mb-12 flex flex-col items-center">
            <div className="overflow-hidden pb-1 md:pb-2">
              <motion.h1 
                variants={textReveal}
                className="text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] font-black text-white leading-[1.05] font-display tracking-tight"
              >
                Macomb's Premier
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-4">
              <motion.h1 
                variants={textReveal}
                className="text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] font-black leading-[1.05] font-display tracking-tight"
              >
                <motion.span 
                  initial={{ backgroundPosition: "200% 0" }}
                  animate={{ backgroundPosition: "-200% 0" }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-accent to-brand-light bg-[length:200%_auto] pb-2 px-2 inline-block"
                >
                  Roof Specialists
                </motion.span>
              </motion.h1>
            </div>
          </div>

          {/* Subtext */}
          <motion.div variants={item}>
             <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed px-2 md:px-0 font-medium">
              Protect what matters most with reliable solutions from TWO22ROOFING, Macomb's go-to experts in superior roofing care.
            </p>
          </motion.div>

          {/* Call to Actions — CSS hover only, no framer whileHover on buttons */}
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4 md:px-0 w-full sm:w-auto"
          >
            <button 
              onClick={onOpenEstimate}
              className="w-full sm:w-auto group relative overflow-hidden bg-brand text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-black text-base md:text-lg shadow-2xl shadow-brand/30 flex items-center justify-center gap-3 border border-brand-light/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.25,1,0.5,1]" />
              <span className="relative z-10">Book Free Inspection</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-500" />
            </button>
            
            <button 
              className="w-full sm:w-auto group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-black text-base md:text-lg flex items-center justify-center gap-3 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.25,1,0.5,1]" />
              <Phone className="w-5 h-5 text-brand-light relative z-10" />
              <a href="tel:5862656607" className="relative z-10">Call (586) 265-6607</a>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
