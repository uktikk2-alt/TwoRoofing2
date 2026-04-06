import { motion } from 'motion/react';

export const Projects = () => {
  const projects = [
    { title: 'Modern Metal Roof', location: 'Macomb, MI', image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Residential Shingle', location: 'Clinton Twp, MI', image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop' },
    { title: 'Commercial Flat Roof', location: 'Sterling Heights, MI', image: 'https://images.unsplash.com/photo-1628744448840-55bab13ecfbd?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-white via-brand/[0.02] to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Clean centered header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-xs font-semibold text-zinc-600">Our Work</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-zinc-900 tracking-tight"
          >
            Recent Projects
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200/80 hover:shadow-lg transition-all duration-500"
            >
              <img 
                loading="lazy"
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/10 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                  {project.title}
                </h3>
                <p className="text-white/60 font-medium text-sm">
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
