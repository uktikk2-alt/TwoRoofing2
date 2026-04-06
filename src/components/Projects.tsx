import { motion } from 'motion/react';

export const Projects = () => {
  const projects = [
    { title: 'Modern Metal Roof', location: 'Macomb, MI', image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Residential Shingle', location: 'Clinton Twp, MI', image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop' },
    { title: 'Commercial Flat Roof', location: 'Sterling Heights, MI', image: 'https://images.unsplash.com/photo-1628744448840-55bab13ecfbd?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <section id="projects" className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-14 md:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-brand font-black uppercase tracking-[0.3em] text-xs md:text-sm block mb-4"
          >
            Our Work
          </motion.span>
          <h2 className="text-3xl md:text-6xl font-black text-zinc-900">
            Recent Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="group relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-2xl transition-shadow duration-700"
            >
              <div className="absolute inset-0 bg-zinc-900" />
              <img 
                loading="lazy"
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-[0.25,1,0.5,1]">
                <div className="overflow-hidden mb-2">
                  <h3 className="text-white text-2xl md:text-3xl font-black translate-y-[120%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.25,1,0.5,1] delay-75">
                    {project.title}
                  </h3>
                </div>
                <div className="overflow-hidden">
                  <p className="text-brand-light font-bold text-sm uppercase tracking-[0.2em] translate-y-[120%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.25,1,0.5,1] delay-100">
                    {project.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
