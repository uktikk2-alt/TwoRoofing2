import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { cn } from '../lib/utils';

export const Navbar = ({ onOpenEstimate, isMobileMenuOpen, setIsMobileMenuOpen }: { onOpenEstimate: () => void, isMobileMenuOpen: boolean, setIsMobileMenuOpen: (open: boolean) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.classList.add('no-scroll');
      document.body.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Projects', href: '#projects' },
    { name: 'Estimate', href: '#estimate' },
  ];

  const mobileNavLinks = navLinks.filter(link => link.name !== 'Estimate');

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow] duration-300 px-4 py-4 md:px-6",
      isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "bg-transparent"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between w-full",
        !isScrolled && "bg-zinc-900/60 border border-white/10 rounded-2xl md:rounded-none md:bg-transparent md:border-none px-4 md:px-6 py-3 md:p-0"
      )}>
        <Logo isScrolled={isScrolled} />

        {/* Desktop Nav */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 0.2 }
            }
          }}
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } } }}
              className={cn(
                "text-sm font-bold transition-colors hover:text-brand relative group",
                isScrolled ? "text-zinc-600" : "text-white/80"
              )}
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.button 
            variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenEstimate}
            className="group relative overflow-hidden bg-brand text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-brand/20 transition-all border border-brand-light/30"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10">Get a Free Estimate</span>
          </motion.button>
        </motion.div>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden p-2 rounded-lg relative", isScrolled ? "text-zinc-900" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
            animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-zinc-950 md:hidden flex flex-col overflow-hidden"
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950 pointer-events-none" />

            {/* Header inside overlay */}
            <div className="flex items-center justify-between p-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Logo isScrolled={false} isFooter={true} />
              </motion.div>
              <motion.button 
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative text-white p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10 backdrop-blur-md overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <X className="w-6 h-6 relative z-10" />
              </motion.button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center relative z-10 -mt-10">
              <div className="flex flex-col w-full items-center">
                {mobileNavLinks.map((link, i) => (
                  <div key={link.name} className="relative py-10 w-full flex justify-center group overflow-hidden">
                    <motion.a 
                      initial={{ y: "150%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{ 
                        delay: 0.3 + (i * 0.08), 
                        duration: 1, 
                        ease: [0.25, 1, 0.5, 1] 
                      }}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-4 group"
                    >
                      <span className="absolute right-[calc(100%+1.25rem)] bottom-1 md:bottom-2 text-brand-light font-display font-black text-xs md:text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="text-3xl sm:text-5xl font-black text-white group-hover:text-brand transition-colors duration-500 tracking-tighter">
                        {link.name}
                      </span>
                    </motion.a>

                    {/* Cinematic Gradient Line */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-brand/20 to-transparent opacity-50" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1.5px] bg-gradient-to-r from-brand-dark/20 via-brand/40 to-brand-dark/20 blur-[0.5px]" />
                  </div>
                ))}
              </div>
            </div>


          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
