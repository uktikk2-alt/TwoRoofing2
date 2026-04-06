import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-32 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-24"
        >
          <div className="space-y-10">
            <Logo isFooter />
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 leading-relaxed text-base"
            >
              Premium roofing services with over two decades of experience. We deliver quality, durability, and peace of mind to every home we touch.
            </motion.p>
            <div className="flex gap-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  whileHover={{ y: -5, backgroundColor: "#EAB308" }}
                  className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400">
              {[
                { name: 'Home', href: '#' },
                { name: 'Services', href: '#services' },
                { name: 'Projects', href: '#projects' },
                { name: 'About', href: '#about' },
                { name: 'Team', href: '#team' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'Estimate', href: '#estimate' },
              ].map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => {
                      if (link.href === '#') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-brand transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8">Our Services</h4>
            <ul className="space-y-4 text-zinc-400">
              {['Roof Inspection', 'Roof Repair', 'Roof Replacement', 'Emergency Services', 'Maintenance Plans'].map(service => (
                <li key={service}><a href="#" className="hover:text-brand transition-colors font-medium">{service}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-zinc-400">
                <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-brand-accent flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold">Call Us</div>
                  <div className="text-sm">(586) 265-6607</div>
                </div>
              </li>
              <li className="flex items-start gap-4 text-zinc-400">
                <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-brand-accent flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold">Email Us</div>
                  <div className="text-sm">info@two22roofing.com</div>
                </div>
              </li>
              <li className="flex items-start gap-4 text-zinc-400">
                <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-brand-accent flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold">Visit Us</div>
                  <div className="text-sm">Serving Macomb, Michigan & Surrounding Areas</div>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-sm font-bold">
          <p>© 2026 TWO22ROOFING. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
