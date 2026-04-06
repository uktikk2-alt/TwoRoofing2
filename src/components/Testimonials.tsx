import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Peter',
      role: 'Homeowner',
      content: 'In my opinion this is the MOST trusted family owned Roofing company I know! TWO22 - Everything they promised was done to perfection. I can not say enough how satisfied I am with their professionalism, work ethic, knowledge and their installation crew.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'Walter Motte',
      role: 'Homeowner',
      content: 'Wendell replaced a flashing boot in my roof. Excellent job, good price. I found him and his wife Rhonda on the internet, great reviews. I recommend Two 22 roofing to anyone!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'Local Neighbor',
      role: 'Homeowner',
      content: 'Wendell was awesome, went above the call and took great care in doing my roof, quality work at a reasonable price and clean up all the scrap. Not much more you could ask for, extra effort and all around good guy.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1976&auto=format&fit=crop'
    }
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black text-zinc-900 mb-6"
          >
            Client Stories
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex items-center justify-center gap-1 text-brand mb-6"
          >
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-zinc-500 text-lg font-medium"
          >
            Rated 4.9/5 based on 800+ local reviews
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                bounce: 0.4, 
                duration: 1, 
                delay: i * 0.15 
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                backgroundColor: "#ffffff",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)"
              }}
              className="bg-zinc-50/80 p-8 sm:p-10 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-zinc-100 relative group"
            >
              <div className="absolute -top-7 left-12 w-14 h-14 bg-brand rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand/20 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                <Star className="w-7 h-7 fill-current" />
              </div>
              <p className="text-zinc-700 text-lg md:text-xl leading-relaxed mb-10 italic font-medium">"{review.content}"</p>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    loading="lazy"
                    src={review.image} 
                    alt={review.name} 
                    className="w-16 h-16 rounded-2xl object-cover shadow-lg relative z-10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
                </div>
                <div>
                  <div className="font-black text-zinc-900 text-lg">{review.name}</div>
                  <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
