import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export const Team = () => {
  const team = [
    { name: 'Wendell', role: 'Owner & Founder', phone: '(586) 265-6607', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Rhonda', role: 'Owner & Operations', phone: '(586) 307-2872', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop' },
    { name: 'Our Crew', role: 'Expert Installers', phone: '(586) 265-6607', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <section id="team" className="py-24 md:py-32 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-black uppercase tracking-[0.3em] text-xs md:text-sm block mb-4"
          >
            The Experts
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-6xl font-black mb-6"
          >
            Skilled Roofing Professionals
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            Meet the dedicated experts who bring decades of combined experience to every project we undertake.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden mb-8 md:mb-10 bg-zinc-800">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  loading="lazy"
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale md:grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:left-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <a href={`tel:${member.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 mb-2 group/phone">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      className="w-10 h-10 md:w-12 md:h-12 bg-brand rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand/20 group-hover/phone:bg-brand-dark transition-colors"
                    >
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </motion.div>
                    <span className="font-bold text-base md:text-xl text-white group-hover/phone:text-brand transition-colors">{member.phone}</span>
                  </a>
                </div>
              </div>
              <div className="px-2 transform group-hover:translate-x-2 transition-transform duration-500">
                <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tight group-hover:text-brand transition-colors">{member.name}</h3>
                <p className="text-brand font-bold uppercase tracking-[0.2em] text-xs md:text-sm group-hover:text-white transition-colors">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
