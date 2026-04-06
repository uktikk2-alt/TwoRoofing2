import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Services = ({ onOpenEstimate }: { onOpenEstimate: () => void }) => {
  const [showAll, setShowAll] = useState(false);
  
  const services = [
    {
      title: 'New Roof Installation',
      description: 'Experience state-of-the-art roofing solutions with our expert team. We deliver top-quality installations that protect and enhance your home\'s value.',
      image: '/new roof installation.jpg',
    },
    {
      title: 'Advanced Roof Inspections',
      description: 'Our cutting-edge inspection services detect potential issues early, ensuring your roof remains in peak condition and saving you from costly repairs.',
      image: '/Advanced Roof Inspections.jpg',
    },
    {
      title: 'Efficient Roof Repair Solutions',
      description: 'From storm damage to minor leaks, our team provides swift and reliable repair services to safeguard your home against the elements.',
      image: '/Efficient Roof Repair Solutions.jpg',
    },
    {
      title: 'Comprehensive Roof Maintenance',
      description: 'Proactive maintenance plans designed to extend the life of your roof and ensure ongoing reliability through every season.',
      image: '/Comprehensive Roof Maintenance.jpg',
    },
    {
      title: 'Home Improvement',
      description: 'Beyond roofing, we excel in home improvement projects, offering reliable repair and installation services that meet the highest standards.',
      image: '/Home Improvement.jpg',
    },
    {
      title: 'Siding Installation',
      description: 'Professional siding installation that enhances your home\'s exterior durability and aesthetic appeal with high-quality materials.',
      image: '/Siding Installation.jpg',
    },
    {
      title: 'Gutters/Guards Installation',
      description: 'Expert gutter and guard installation to ensure proper drainage and protect your foundation from water-related damage.',
      image: '/GuttersGuards Installation.jpg',
    },
    {
      title: 'Attic Insulation',
      description: 'Enhance energy efficiency and maintain a comfortable indoor climate with our professional attic insulation services.',
      image: '/Attic Insulation.jpg',
    }
  ];

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-20 md:py-28 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Clean centered header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-xs font-semibold text-zinc-600">Our Expertise</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-tight mb-5 tracking-tight"
          >
            Professional Roofing Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          >
            From routine maintenance to complete emergency replacements, our team delivers excellence in every shingle.
          </motion.p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            <AnimatePresence mode="popLayout">
              {displayedServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ 
                    delay: showAll && i >= 3 ? (i - 3) * 0.08 : i * 0.1, 
                    duration: 0.7, 
                    ease: [0.25, 1, 0.5, 1] 
                  }}
                  className="group bg-white rounded-2xl overflow-hidden border border-zinc-200/80 hover:border-zinc-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="h-56 md:h-64 overflow-hidden relative bg-zinc-100">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      loading={i > 2 ? "lazy" : "eager"}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-2.5 group-hover:text-brand transition-colors duration-300">{service.title}</h3>
                    <p className="text-zinc-500 mb-6 leading-relaxed text-sm">{service.description}</p>
                    <button 
                      onClick={onOpenEstimate}
                      className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 group/btn"
                    >
                      Get an Estimate
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {!showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-50/50 to-transparent pointer-events-none z-10" />
          )}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center relative z-20"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-zinc-200 rounded-full text-zinc-700 font-semibold text-sm hover:border-zinc-400 hover:shadow-sm transition-all duration-300"
          >
            {showAll ? 'Show Less' : 'Show All Services'}
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
