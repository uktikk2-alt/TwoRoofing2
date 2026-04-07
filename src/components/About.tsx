import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-gradient-to-b from-white via-brand/[0.02] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Subtitle & Heading - Order 1 on mobile, Column 2 on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="text-center lg:text-left order-1 lg:col-start-2 lg:row-start-1"
          >
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-full px-4 py-1.5 mb-2 md:mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span className="text-xs font-semibold text-zinc-600">Why Choose TWO22</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-900 leading-[1.1] tracking-tight mb-3 md:mb-4">
              Roofing You Can Trust in Macomb County
            </h2>
          </motion.div>

          {/* Body Text - Order 2 on mobile, Column 2 on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col gap-4 text-base md:text-xl text-zinc-500 leading-relaxed font-medium order-2 lg:col-start-2 lg:row-start-2"
          >
            <p>
              Since 1996, our family-owned business has delivered state-of-the-art roofing to the Macomb community.
            </p>
            <p>
              Dedicated to quality craftsmanship, we ensure every project provides lasting peace of mind and protection.
            </p>
          </motion.div>

          {/* Image - Order 3 on mobile, Column 1 on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative order-3 lg:col-start-1 lg:row-start-1 lg:row-span-3"
          >
            <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200/50">
              <img 
                src="/Why Choose TWO22.jpeg" 
                alt="Our Team at Work" 
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Shutter Reveal Overlay */}
              <motion.div 
                initial={{ x: "0%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                className="absolute inset-0 bg-brand z-20"
              />
            </div>
          </motion.div>
          
          {/* Benefits List - Order 4 on mobile, Column 2 on desktop */}
          <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8 pt-4 md:pt-6 order-4 lg:col-start-2 lg:row-start-3">
            {[
              'Certified Master Craftsmen',
              'Lifetime Material Warranty',
              'Fully Licensed & Insured',
              '24/7 Emergency Support'
            ].map((item, i) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: 0.2 + (i * 0.08) }}
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-300">
                  <CheckCircle2 className="w-4 h-4 text-brand group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-bold text-zinc-900 text-sm md:text-base tracking-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
