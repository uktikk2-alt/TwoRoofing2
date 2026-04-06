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
    <section id="reviews" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="text-4xl md:text-6xl font-black text-zinc-900 mb-6"
          >
            Client Stories
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-1 text-brand mb-6"
          >
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-zinc-500 text-lg font-medium"
          >
            Rated 4.9/5 based on 800+ local reviews
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 1, 0.5, 1],
                delay: i * 0.12 
              }}
              className="bg-zinc-50/80 p-8 sm:p-10 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-zinc-100 relative group hover:bg-white hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute -top-7 left-12 w-14 h-14 bg-brand rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand/20 transition-transform duration-500">
                <Star className="w-7 h-7 fill-current" />
              </div>
              <p className="text-zinc-700 text-lg md:text-xl leading-relaxed mb-10 italic font-medium">"{review.content}"</p>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <img 
                    loading="lazy"
                    src={review.image} 
                    alt={review.name} 
                    className="w-16 h-16 rounded-2xl object-cover shadow-lg relative z-10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
                <div>
                  <div className="font-black text-zinc-900 text-lg">{review.name}</div>
                  <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="mt-16 md:mt-20 flex justify-center"
        >
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 bg-white border-2 border-zinc-200 hover:border-brand/30 rounded-2xl md:rounded-3xl px-8 md:px-12 py-5 md:py-7 shadow-lg hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.25,1,0.5,1]" />
            {/* Google "G" Icon */}
            <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-md flex items-center justify-center border border-zinc-100 group-hover:scale-110 transition-transform duration-500">
              <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" />)}
                <span className="text-zinc-900 font-black text-sm ml-1">4.9</span>
              </div>
              <span className="text-zinc-900 font-black text-base md:text-lg">See more reviews on Google</span>
            </div>
            <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-brand relative z-10 transition-colors duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
