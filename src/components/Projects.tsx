import { motion } from 'motion/react';

export const Projects = () => {
  const projects = [
    { title: 'Modern Metal Roof', location: 'Macomb, MI', image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Residential Shingle', location: 'Clinton Twp, MI', image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop' },
    { title: 'Commercial Flat Roof', location: 'Sterling Heights, MI', image: 'https://images.unsplash.com/photo-1628744448840-55bab13ecfbd?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-brand font-black uppercase tracking-[0.3em] text-xs md:text-sm block mb-4"
          >
            Our Work
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-6xl font-black text-zinc-900"
          >
            Recent Projects
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl"
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                loading="lazy"
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <motion.h3 
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  className="text-white text-xl md:text-2xl font-black mb-1"
                >
                  {project.title}
                </motion.h3>
                <p className="text-brand font-bold text-sm uppercase tracking-widest">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
