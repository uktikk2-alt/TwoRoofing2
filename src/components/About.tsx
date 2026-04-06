import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop" 
                alt="Our Team at Work" 
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Shutter Reveal Overlay */}
              <motion.div 
                initial={{ x: "0%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                className="absolute inset-0 bg-brand z-20"
              />
            </div>
            {/* Floating Badge — clean, minimal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-20 bg-zinc-900 text-white px-5 md:px-8 py-4 md:py-6 rounded-2xl shadow-xl"
            >
              <div className="text-2xl md:text-4xl font-black">20+</div>
              <div className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-zinc-400">Years of Experience</div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span className="text-xs font-semibold text-zinc-600">Why Choose TWO22</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 leading-[1.1] tracking-tight mb-6">
                Roofing You Can Trust in Macomb County
              </h2>
            </div>
            <p className="text-base md:text-lg text-zinc-500 leading-relaxed">
              Since 1996, our family-owned business has helped countless customers achieve peace of mind within their homes. We pride ourselves on delivering state-of-the-art roofing services to the Macomb, Michigan community. With a dedication to quality craftsmanship and innovative solutions, our team ensures that every project is completed with precision and care.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
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
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.08) }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                  <span className="font-semibold text-zinc-700 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
