import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Phone, Zap } from 'lucide-react';

export const Hero = ({ onOpenEstimate }: { onOpenEstimate: () => void }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.15]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-900 py-20 md:py-0">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img 
          src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop" 
          alt="Premium Roofing" 
          className="w-full h-[120%] object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-zinc-900/60 to-zinc-900" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center pt-24 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 backdrop-blur-md px-4 md:px-5 py-2 md:py-2.5 rounded-full text-brand text-[10px] md:text-sm font-bold mb-6 md:mb-12"
        >
          <Zap className="w-3 h-3 md:w-4 md:h-4 animate-pulse" />
          <span>#1 Rated Roofing in Macomb County</span>
        </motion.div>

        <div className="overflow-hidden mb-6 md:mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1.1] font-display tracking-tight"
          >
            Macomb's Premier <br />
            <motion.span 
              initial={{ backgroundPosition: "200% 0" }}
              animate={{ backgroundPosition: "-200% 0" }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-accent to-brand-light bg-[length:200%_auto]"
            >
              Roof Specialists
            </motion.span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 md:mb-20 leading-relaxed px-2 md:px-0"
        >
          Protect what matters most with reliable solutions from TWO22ROOFING, Macomb's go-to experts in superior roofing care.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4 md:px-0"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenEstimate}
            className="w-full sm:w-auto group bg-brand hover:bg-brand-dark text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-base md:text-lg transition-all shadow-2xl shadow-brand/30 flex items-center justify-center gap-3"
          >
            Book Free Inspection
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-base md:text-lg transition-all flex items-center justify-center gap-3"
          >
            <Phone className="w-5 h-5 text-brand" />
            <a href="tel:5862656607">Call (586) 265-6607</a>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30"
      >
        <span className="text-[10px] font-black tracking-[0.3em] uppercase">Scroll to Explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
};
