import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export const Team = () => {
  const team = [
    { name: 'Wendell', role: 'Owner', phone: '(586) 265-6607', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Rhonda', role: 'Owner', phone: '(586) 307-2872', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop' },
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Clean centered header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-xs font-semibold text-zinc-400">The Experts</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-5 tracking-tight"
          >
            Meet the Owners
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          >
            Meet the dedicated owners who bring decades of combined experience to every project we undertake.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-800">
                <img 
                  loading="lazy"
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <a href={`tel:${member.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2.5 hover:bg-brand/80 transition-all duration-300 group/phone">
                    <Phone className="w-4 h-4" />
                    <span className="font-semibold text-sm">{member.phone}</span>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 tracking-tight">{member.name}</h3>
                <p className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
