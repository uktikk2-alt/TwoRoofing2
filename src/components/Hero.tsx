import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, Zap } from 'lucide-react';

export const Hero = ({ onOpenEstimate }: { onOpenEstimate: () => void }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.15]);
  const imgOpacity = useTransform(scrollY, [0, 700], [0.4, 0.15]);

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
    hidden: { y: "120%", rotateX: 8 },
    show: { 
      y: "0%", 
      rotateX: 0,
      transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 py-16 md:py-0">
      {/* Background Image — cinematic scroll-linked animations */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
        style={{ y: y1 }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <motion.div style={{ scale }} className="w-full h-full will-change-transform">
          <motion.img 
            src="/Hero image.jpeg" 
            alt="Premium Roofing" 
            style={{ opacity: imgOpacity }}
            className="w-full h-[130%] object-cover object-center"
          />
        </motion.div>
        {/* Multi-layer darkening overlay for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/70 to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/30 via-transparent to-zinc-950/30" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center pt-24 md:pt-0 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-4 md:mb-8 mt-4 md:mt-0">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 md:px-5 py-2 md:py-2.5 rounded-full text-white/90 text-[10px] md:text-sm font-bold relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.25,1,0.5,1]" />
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-brand-accent animate-[pulse_3s_ease-in-out_infinite] relative z-10" />
              <span className="relative z-10 tracking-[0.2em] uppercase">#1 Rated Roofing in Macomb County</span>
            </div>
          </motion.div>

          {/* Heading with layered overflow reveal */}
          <div className="mb-4 md:mb-8 flex flex-col items-center">
            <div className="overflow-hidden pb-1 md:pb-2 w-full px-4">
              <motion.h1 
                variants={textReveal}
                className="text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] font-black text-white leading-[1.1] md:leading-[1.05] font-display tracking-tight text-wrap"
              >
                Macomb's Premier
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-4 w-full px-4">
              <motion.h1 
                variants={textReveal}
                className="text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] font-black leading-[1.1] md:leading-[1.05] font-display tracking-tight text-wrap"
              >
                <motion.span 
                  initial={{ backgroundPosition: "200% 0" }}
                  animate={{ backgroundPosition: "-200% 0" }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-accent to-brand-light bg-[length:200%_auto] pb-1 px-1 inline-block"
                >
                  Roof Specialists
                </motion.span>
              </motion.h1>
            </div>
          </div>

          {/* Subtext — Tier 3 with blur-in (Hero-exclusive treatment) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
              show: { 
                opacity: 1, y: 0, filter: "blur(0px)",
                transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } 
              }
            }}
          >
             <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2 md:px-0 font-medium">
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
              className="w-full sm:w-auto group relative overflow-hidden bg-brand text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-black text-base md:text-lg shadow-2xl shadow-brand/30 flex items-center justify-center gap-3 border border-brand-light/30 hover:-translate-y-0.5 active:scale-[0.98] transition-[transform] duration-300"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.25,1,0.5,1]" />
              <span className="relative z-10">Get a Free Estimate</span>
            </button>
            
            <button 
              className="w-full sm:w-auto group relative overflow-hidden bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-black text-base md:text-lg flex items-center justify-center gap-3 hover:-translate-y-0.5 active:scale-[0.98] transition-[transform,border-color] duration-300"
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
