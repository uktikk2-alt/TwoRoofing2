import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-12 mb-16">
          <div className="space-y-6 lg:col-span-2 lg:pr-12">
            <Logo isFooter />
            <p className="text-zinc-400 leading-loose text-sm lg:text-[15px] max-w-sm">
              Premium roofing services with over two decades of experience. We deliver quality, durability, and peace of mind to every home we touch.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-zinc-300">Quick Links</h4>
            <ul className="space-y-3 text-zinc-400">
              {[
                { name: 'Home', href: '#' },
                { name: 'Services', href: '#services' },
                { name: 'Projects', href: '#projects' },
                { name: 'About', href: '#about' },
                { name: 'Team', href: '#team' },
                { name: 'Reviews', href: '#reviews' },
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
                    className="hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-zinc-300">Our Services</h4>
            <ul className="space-y-3 text-zinc-400">
              {['Roof Inspection', 'Roof Repair', 'Roof Replacement', 'Emergency Services', 'Maintenance Plans'].map(service => (
                <li key={service}><a href="#services" className="hover:text-white transition-colors text-sm font-medium">{service}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-zinc-300">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-zinc-400">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/5">
                  <Phone className="w-3.5 h-3.5 text-brand" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">Call Us</div>
                  <div className="text-sm">(586) 265-6607</div>
                </div>
              </li>
              <li className="flex items-start gap-4 text-zinc-400">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/5">
                  <Mail className="w-3.5 h-3.5 text-brand" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">Email Us</div>
                  <div className="text-sm">info@two22roofing.com</div>
                </div>
              </li>
              <li className="flex items-start gap-4 text-zinc-400">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/5">
                  <MapPin className="w-3.5 h-3.5 text-brand" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">Visit Us</div>
                  <div className="text-sm leading-relaxed">Serving Macomb, Michigan<br/>& Surrounding Areas</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-xs font-medium">
          <p>© 2026 TWO22ROOFING. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
