import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group text-zinc-100">
              <motion.div 
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                className="w-full h-full bg-zinc-200"
              >
                <img 
                  src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop" 
                  alt="Our Team at Work" 
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              {/* Shutter Reveal Overlay */}
              <motion.div 
                initial={{ x: "0%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                className="absolute inset-0 bg-brand z-20"
              />
              <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Floating Badge — CSS animation only, no framer loop */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="absolute -bottom-2 -right-2 md:-bottom-10 md:-right-10 z-20 bg-brand-accent text-white p-4 md:p-10 rounded-xl md:rounded-[2rem] shadow-2xl animate-[float_6s_ease-in-out_infinite]"
            >
              <div className="text-xl md:text-5xl font-black mb-1">28+</div>
              <div className="text-[8px] md:text-sm font-bold uppercase tracking-widest opacity-80">Years of Trust</div>
            </motion.div>
            {/* Decorative Element — static, no animation */}
            <div className="absolute -top-10 -left-10 w-48 md:w-64 h-48 md:h-64 bg-brand/5 rounded-full blur-3xl hidden md:block" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="space-y-8 md:space-y-10 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <div className="overflow-hidden pb-1">
                <motion.span 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="inline-block text-brand font-black uppercase tracking-[0.3em] text-xs md:text-sm"
                >
                  Why Choose TWO22
                </motion.span>
              </div>
              <div className="overflow-hidden pb-4">
                <motion.h2 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                  className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-[1.1] tracking-tight font-display"
                >
                  Roofing You Can Trust in Macomb County
                </motion.h2>
              </div>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-zinc-500 leading-relaxed"
            >
              Since 1996, our family-owned business has helped countless customers achieve peace of mind within their homes. We pride ourselves on delivering state-of-the-art roofing services to the Macomb, Michigan community. With a dedication to quality craftsmanship and innovative solutions, our team ensures that every project is completed with precision and care.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 pt-4">
              {[
                'Certified Master Craftsmen',
                'Lifetime Material Warranty',
                'Fully Licensed & Insured',
                '24/7 Emergency Support'
              ].map((item, i) => (
                <div key={item} className="overflow-hidden">
                  <motion.div 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 + (i * 0.08), ease: [0.25, 1, 0.5, 1] }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-brand/10 rounded-full flex items-center justify-center text-brand flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                    <span className="font-bold text-zinc-700 text-sm md:text-base">{item}</span>
                  </motion.div>
                </div>
              ))}
            </div>

            <button 
              className="w-full sm:w-auto bg-zinc-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-base md:text-lg shadow-xl hover:bg-zinc-800 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
            >
              Learn Our Story
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
