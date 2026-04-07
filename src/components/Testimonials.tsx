import { motion } from 'motion/react';
import { Star, ExternalLink, Quote } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'John Bennett',
      content: 'Two22 came out same day and fixed the shingles on my roof before it rained. Always responsive and good quality work at an affordable price.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'Tin Man',
      content: 'Excellent service! The crew showed up on time, worked efficiently, and cleaned up everything. The quality of their work is top-notch and professional.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'T Gurecki',
      content: 'Wendel is very professional, prompt, and honest. He addressed all my concerns and worked hard. I highly recommend him and his company.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1976&auto=format&fit=crop'
    }
  ];

  const googleReviewsUrl = "https://google.com/maps/place/222+Roofing+%26+Remodeling/@42.7462121,-85.9093664,8z/data=!4m7!3m6!1s0x882521e293ccf8ff:0xe0487b0636cb743f!8m2!3d42.64199!4d-82.8913337!15sChZ0d28yMiByb29maW5nIG1pY2hpZ2FuWhgiFnR3bzIyIHJvb2ZpbmcgbWljaGlnYW6SARJyb29maW5nX2NvbnRyYWN0b3KaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTlhkVGxJU2twUkVBReABAPoBBAgAEEs!16s%2Fg%2F11l3q55w_v?entry=tts&g_ep=EgoyMDI2MDQwMS4wIPu8ASoASAFQAw%3D%3D&skid=31b9f812-9fcb-4837-9d1d-e8c58373eae6";

  return (
    <section id="reviews" className="py-12 md:py-16 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Updated Header based on reference image */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-normal text-zinc-900 mb-6 tracking-tight"
          >
            Reviews from <span className="font-black">real people</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center gap-2 md:gap-3 text-zinc-600 text-sm md:text-base font-medium"
          >
            <span>4.9/5</span>
            <Star className="w-5 h-5 text-brand fill-brand" />
            <span className="text-zinc-400">|</span>
            <span>Based on 800+ reviews</span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ 
                duration: 0.7, 
                ease: [0.25, 1, 0.5, 1],
                delay: i * 0.1 
              }}
              className="relative flex flex-col pt-4 overflow-visible"
            >
              {/* Speech Bubble / Card */}
              <div className="relative bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl shadow-zinc-200/40 border border-zinc-100 flex flex-col h-full group/card">
                {/* Quote Icon */}
                <div className="absolute top-6 right-8 text-brand/10 group-hover/card:text-brand/20 transition-colors">
                  <Quote className="w-10 h-10 md:w-12 md:h-12 fill-current" />
                </div>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-brand fill-brand" />
                  ))}
                </div>

                <p className="text-zinc-600 text-base md:text-xl leading-relaxed mb-6 md:mb-10 flex-grow font-medium italic">
                  "{review.content}"
                </p>
                
                {/* Reviewer Integrated Bottom Section */}
                <div className="flex items-center gap-4 pt-6 mt-auto border-t border-zinc-50">
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1 bg-brand/20 rounded-full blur-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <img 
                      loading="lazy"
                      src={review.image} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover relative z-10 border-2 border-white shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-black text-zinc-900 text-base leading-tight">{review.name}</span>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Verified Customer</span>
                  </div>
                </div>

                {/* Speech Bubble Pointer */}
                <div className="absolute -bottom-3 left-12 w-6 h-6 bg-white border-r border-b border-zinc-100 transform rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 md:mt-8 flex justify-center"
        >
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-white border border-zinc-200 rounded-full pl-4 pr-8 py-3 md:py-4 hover:border-zinc-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex -space-x-3 items-center">
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover shadow-sm"
                alt="User Avatar"
              />
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover shadow-sm"
                alt="User Avatar"
              />
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-zinc-50 flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
            <span className="font-semibold text-zinc-900 text-sm md:text-base ml-2">See more reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-brand transition-colors duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
