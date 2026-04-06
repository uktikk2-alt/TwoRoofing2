import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronDown, Home, Shield, Hammer, Clock, HardHat, Droplets, Thermometer } from 'lucide-react';

export const Services = ({ onOpenEstimate }: { onOpenEstimate: () => void }) => {
  const [showAll, setShowAll] = useState(false);
  
  const services = [
    {
      title: 'New Roof Installation',
      description: 'Experience state-of-the-art roofing solutions with our expert team. We deliver top-quality installations that protect and enhance your home\'s value.',
      image: '/new roof installation.jpg',
      icon: Home
    },
    {
      title: 'Advanced Roof Inspections',
      description: 'Our cutting-edge inspection services detect potential issues early, ensuring your roof remains in peak condition and saving you from costly repairs.',
      image: '/Advanced Roof Inspections.jpg',
      icon: Shield
    },
    {
      title: 'Efficient Roof Repair Solutions',
      description: 'From storm damage to minor leaks, our team provides swift and reliable repair services to safeguard your home against the elements.',
      image: '/Efficient Roof Repair Solutions.jpg',
      icon: Hammer
    },
    {
      title: 'Comprehensive Roof Maintenance',
      description: 'Proactive maintenance plans designed to extend the life of your roof and ensure ongoing reliability through every season.',
      image: '/Comprehensive Roof Maintenance.jpg',
      icon: Clock
    },
    {
      title: 'Home Improvement',
      description: 'Beyond roofing, we excel in home improvement projects, offering reliable repair and installation services that meet the highest standards.',
      image: '/Home Improvement.jpg',
      icon: HardHat
    },
    {
      title: 'Siding Installation',
      description: 'Professional siding installation that enhances your home\'s exterior durability and aesthetic appeal with high-quality materials.',
      image: '/Siding Installation.jpg',
      icon: Shield
    },
    {
      title: 'Gutters/Guards Installation',
      description: 'Expert gutter and guard installation to ensure proper drainage and protect your foundation from water-related damage.',
      image: '/GuttersGuards Installation.jpg',
      icon: Droplets
    },
    {
      title: 'Attic Insulation',
      description: 'Enhance energy efficiency and maintain a comfortable indoor climate with our professional attic insulation services.',
      image: '/Attic Insulation.jpg',
      icon: Thermometer
    }
  ];

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-end mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-brand font-black uppercase tracking-[0.3em] text-xs md:text-sm block mb-4"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-6xl font-black text-zinc-900 leading-tight"
            >
              Professional Roofing <br className="hidden md:block" /> Solutions for Every Need
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:pb-2"
          >
            <p className="text-zinc-500 max-w-md text-lg leading-relaxed">
              From routine maintenance to complete emergency replacements, our team delivers excellence in every shingle.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <AnimatePresence mode="popLayout">
              {displayedServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ 
                    delay: showAll && i >= 3 ? (i - 3) * 0.1 : i * 0.15, 
                    duration: 0.9, 
                    ease: [0.25, 1, 0.5, 1] 
                  }}
                  className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(121,31,120,0.1)] hover:-translate-y-2 transition-all duration-500 border border-zinc-100"
                >
                  <div className="h-64 md:h-80 overflow-hidden relative bg-zinc-100">
                    <motion.img 
                      src={service.image} 
                      alt={service.title} 
                      loading={i > 2 ? "lazy" : "eager"}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-700 ease-out" />
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-xl transition-transform duration-500">
                      <service.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 md:p-12 pb-10 sm:pb-14 md:pb-16">
                    <h3 className="text-xl md:text-3xl font-black text-zinc-900 mb-4 tracking-tight group-hover:text-brand transition-colors">{service.title}</h3>
                    <p className="text-zinc-500 mb-8 leading-relaxed text-sm md:text-base">{service.description}</p>
                    <motion.button 
                      whileHover={{ x: 5 }}
                      onClick={onOpenEstimate}
                      className="flex items-center gap-2 text-brand font-black transition-all text-base group/btn"
                    >
                      Get an Estimate <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Folded Gradient Overlay - Subtle hint that doesn't cover content */}
          {!showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-50 via-zinc-50/20 to-transparent pointer-events-none z-10" />
          )}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-center relative z-20"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 bg-white border border-zinc-200 rounded-full shadow-md hover:shadow-lg hover:border-brand/30 transition-all duration-500 -translate-y-4"
          >
            <span className="text-zinc-900 font-bold text-xs md:text-sm tracking-tight">
              {showAll ? 'Show Less Services' : 'Show More Services'}
            </span>
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-6 h-6 bg-brand/5 rounded-full flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
