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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4 md:px-6",
      isScrolled ? "bg-white/80 backdrop-blur-xl shadow-sm py-3" : "bg-transparent"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500",
        !isScrolled && "bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-none md:bg-transparent md:border-none px-6 py-4 md:p-0"
      )}>
        <Logo isScrolled={isScrolled} />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-brand",
                isScrolled ? "text-zinc-600" : "text-white/80"
              )}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOpenEstimate}
            className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-brand/20 active:scale-95"
          >
            Get Free Estimate
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden p-2 rounded-lg", isScrolled ? "text-zinc-900" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-zinc-950 md:hidden flex flex-col overflow-hidden"
          >
            {/* Premium Noise Texture & Gradient */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950 pointer-events-none" />

            {/* Subtle Animated Background Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.25, 0.15]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#e41fe1]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"
            />

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
            
            <div className="flex-1 flex flex-col justify-center items-center px-8 relative z-10">
              <div className="space-y-6 flex flex-col items-center w-full max-w-sm">
                {mobileNavLinks.map((link, i) => (
                  <div key={link.name} className="overflow-hidden py-2 w-full flex justify-center">
                    <motion.a 
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{ 
                        delay: 0.3 + (i * 0.08), 
                        duration: 0.8, 
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group relative flex items-center justify-center text-4xl sm:text-5xl font-black text-white/50 hover:text-white transition-colors duration-500 tracking-tighter"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand rounded-full transition-all duration-500 ease-out group-hover:w-full group-active:w-full" />
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.a>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer inside overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 relative z-10 border-t border-white/10 bg-zinc-950/80 backdrop-blur-xl"
            >
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Get in touch</p>
                  <a href="tel:5862656607" className="text-2xl font-black text-white hover:text-brand transition-colors tracking-tight">
                    (586) 265-6607
                  </a>
                </div>
                
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenEstimate();
                  }}
                  className="w-full max-w-sm group relative overflow-hidden bg-brand text-white py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-brand/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10">Get Free Estimate</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
