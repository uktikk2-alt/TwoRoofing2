import { motion } from 'motion/react';
import { Star, ExternalLink } from 'lucide-react';

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

  const googleReviewsUrl = "https://google.com/maps/place/222+Roofing+%26+Remodeling/@42.7462121,-85.9093664,8z/data=!4m7!3m6!1s0x882521e293ccf8ff:0xe0487b0636cb743f!8m2!3d42.64199!4d-82.8913337!15sChZ0d28yMiByb29maW5nIG1pY2hpZ2FuWhgiFnR3bzIyIHJvb2ZpbmcgbWljaGlnYW6SARJyb29maW5nX2NvbnRyYWN0b3KaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTlhkVGxJU2twUkVBReABAPoBBAgAEEs!16s%2Fg%2F11l3q55w_v?entry=tts&g_ep=EgoyMDI2MDQwMS4wIPu8ASoASAFQAw%3D%3D&skid=31b9f812-9fcb-4837-9d1d-e8c58373eae6";

  return (
    <section id="reviews" className="py-20 md:py-28 bg-zinc-50/50">
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
            <span className="text-xs font-semibold text-zinc-600">Client Stories</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-5 tracking-tight"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          >
            Rated 4.9/5 based on 800+ local reviews
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                ease: [0.25, 1, 0.5, 1],
                delay: i * 0.1 
              }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200/80 hover:border-zinc-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6">"{review.content}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <img 
                  loading="lazy"
                  src={review.image} 
                  alt={review.name} 
                  className="w-10 h-10 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-zinc-900 text-sm">{review.name}</div>
                  <div className="text-xs text-zinc-400 font-medium">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white border border-zinc-200 rounded-full px-6 md:px-8 py-3 md:py-4 hover:border-zinc-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* Google "G" Icon */}
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <span className="font-semibold text-zinc-900 text-sm md:text-base">See more reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-brand transition-colors duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
