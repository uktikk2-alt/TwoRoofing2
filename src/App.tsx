import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useInView, animate } from 'motion/react';
import { 
  Shield, 
  Hammer, 
  Home, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Users, 
  Clock, 
  Award, 
  ChevronRight, 
  ChevronDown,
  Menu, 
  X,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Zap,
  HardHat,
  Droplets,
  Thermometer
} from 'lucide-react';
import RoofingAIAgent from './components/RoofingAIAgent';
import { cn } from './lib/utils';
import EstimateModal from './components/EstimateModal';
import EstimateForm from './components/EstimateForm';

// --- Components ---

const Logo = ({ isScrolled = false, isFooter = false }: { isScrolled?: boolean, isFooter?: boolean }) => {
  const isDark = isScrolled || isFooter;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <motion.div 
      onClick={scrollToTop}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-col leading-none group cursor-pointer"
    >
      <div className="flex items-baseline relative">
        <span className="text-brand font-black text-3xl md:text-5xl tracking-tighter transition-transform group-hover:scale-105 duration-500">TWO</span>
        <div className="relative">
          {/* House Roof Icon - matching the logo image */}
          <div className="absolute -top-[1.1em] -right-[0.1em] w-[1.4em] h-[1.4em] pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className={cn("transition-colors duration-700", isDark ? "text-zinc-900" : "text-white")}>
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M5 85 L50 15 L95 85 L80 85 L50 40 L20 85 Z" 
              />
              <motion.rect 
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                x="68" y="25" width="12" height="30" 
              />
            </svg>
          </div>
          <span className={cn("font-black text-3xl md:text-5xl tracking-tighter transition-colors duration-700", isDark ? "text-zinc-900" : "text-white")}>22</span>
        </div>
      </div>
      <motion.span 
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className={cn("text-[6px] md:text-[8px] font-bold tracking-[0.18em] uppercase mt-1 whitespace-nowrap transition-colors duration-700", isDark ? "text-zinc-900" : "text-white")}
      >
        The Best Roofs Aren't All We Do
      </motion.span>
    </motion.div>
  );
};

const Counter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      const suffix = value.replace(/[0-9.,]/g, '');
      const hasComma = value.includes(',');
      const decimals = value.includes('.') ? value.split('.')[1].length : 0;

      const controls = animate(0, numericValue, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1], // Custom easeOutExpo
        onUpdate(latest) {
          let formatted = latest.toFixed(decimals);
          if (hasComma) {
            const parts = formatted.split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            formatted = parts.join('.');
          }
          setDisplayValue(formatted + suffix);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

const Navbar = ({ onOpenEstimate, isMobileMenuOpen, setIsMobileMenuOpen }: { onOpenEstimate: () => void, isMobileMenuOpen: boolean, setIsMobileMenuOpen: (open: boolean) => void }) => {
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
                <Logo isScrolled={false} />
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

const Hero = ({ onOpenEstimate }: { onOpenEstimate: () => void }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.15]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-900 py-20 md:py-0">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img 
          src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop" 
          alt="Premium Roofing" 
          className="w-full h-[120%] object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-zinc-900/60 to-zinc-900" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center pt-24 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 backdrop-blur-md px-4 md:px-5 py-2 md:py-2.5 rounded-full text-brand text-[10px] md:text-sm font-bold mb-6 md:mb-12"
        >
          <Zap className="w-3 h-3 md:w-4 md:h-4 animate-pulse" />
          <span>#1 Rated Roofing in Macomb County</span>
        </motion.div>

        <div className="overflow-hidden mb-6 md:mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1.1] font-display tracking-tight"
          >
            Macomb's Premier <br />
            <motion.span 
              initial={{ backgroundPosition: "200% 0" }}
              animate={{ backgroundPosition: "-200% 0" }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-accent to-brand-light bg-[length:200%_auto]"
            >
              Roof Specialists
            </motion.span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 md:mb-20 leading-relaxed px-2 md:px-0"
        >
          Protect what matters most with reliable solutions from TWO22ROOFING, Macomb's go-to experts in superior roofing care.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4 md:px-0"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenEstimate}
            className="w-full sm:w-auto group bg-brand hover:bg-brand-dark text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-base md:text-lg transition-all shadow-2xl shadow-brand/30 flex items-center justify-center gap-3"
          >
            Book Free Inspection
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-base md:text-lg transition-all flex items-center justify-center gap-3"
          >
            <Phone className="w-5 h-5 text-brand" />
            Call (586) 265-6607
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30"
      >
        <span className="text-[10px] font-black tracking-[0.3em] uppercase">Scroll to Explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Years Experience', value: '28+', icon: Clock },
    { label: 'Local Projects', value: '2,400+', icon: Home },
    { label: '5-Star Reviews', value: '950+', icon: Star },
    { label: 'Satisfaction Rate', value: '100%', icon: Award },
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative z-20 border-b border-zinc-100 overflow-hidden">
      {/* Decorative Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <div className="relative w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-6">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  className="absolute inset-0 bg-brand/10 rounded-lg md:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="relative w-full h-full bg-zinc-50 rounded-lg md:rounded-2xl flex items-center justify-center group-hover:bg-brand transition-all duration-500 group-hover:shadow-xl group-hover:shadow-brand/20"
                >
                  <stat.icon className="w-5 h-5 md:w-8 md:h-8 text-brand group-hover:text-white transition-colors duration-500" />
                </motion.div>
              </div>
              <div className="text-2xl md:text-5xl font-black text-zinc-900 mb-0.5 md:mb-2 font-display">
                <Counter value={stat.value} />
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="text-[10px] md:text-sm font-bold text-zinc-500 uppercase tracking-widest"
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = ({ onOpenEstimate }: { onOpenEstimate: () => void }) => {
  const [showAll, setShowAll] = useState(false);
  
  const services = [
    {
      title: 'New Roof Installation',
      description: 'Experience state-of-the-art roofing solutions with our expert team. We deliver top-quality installations that protect and enhance your home\'s value.',
      image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop',
      icon: Home
    },
    {
      title: 'Advanced Roof Inspections',
      description: 'Our cutting-edge inspection services detect potential issues early, ensuring your roof remains in peak condition and saving you from costly repairs.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
      icon: Shield
    },
    {
      title: 'Efficient Roof Repair Solutions',
      description: 'From storm damage to minor leaks, our team provides swift and reliable repair services to safeguard your home against the elements.',
      image: 'https://images.unsplash.com/photo-1628744448840-55bab13ecfbd?q=80&w=2070&auto=format&fit=crop',
      icon: Hammer
    },
    {
      title: 'Comprehensive Roof Maintenance',
      description: 'Proactive maintenance plans designed to extend the life of your roof and ensure ongoing reliability through every season.',
      image: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=2070&auto=format&fit=crop',
      icon: Clock
    },
    {
      title: 'Home Improvement',
      description: 'Beyond roofing, we excel in home improvement projects, offering reliable repair and installation services that meet the highest standards.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
      icon: HardHat
    },
    {
      title: 'Siding Installation',
      description: 'Professional siding installation that enhances your home\'s exterior durability and aesthetic appeal with high-quality materials.',
      image: 'https://images.unsplash.com/photo-1595841055312-535191ef35ba?q=80&w=2070&auto=format&fit=crop',
      icon: Shield
    },
    {
      title: 'Gutters/Guards Installation',
      description: 'Expert gutter and guard installation to ensure proper drainage and protect your foundation from water-related damage.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
      icon: Droplets
    },
    {
      title: 'Attic Insulation',
      description: 'Enhance energy efficiency and maintain a comfortable indoor climate with our professional attic insulation services.',
      image: 'https://images.unsplash.com/photo-1503387762-592dec5832f2?q=80&w=2070&auto=format&fit=crop',
      icon: Thermometer
    }
  ];

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-end mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-brand font-black uppercase tracking-[0.3em] text-xs md:text-sm block mb-4"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-6xl font-black text-zinc-900 leading-tight"
            >
              Professional Roofing <br className="hidden md:block" /> Solutions for Every Need
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:pb-2"
          >
            <p className="text-zinc-500 max-w-md text-lg leading-relaxed">
              From routine maintenance to complete emergency replacements, our team delivers excellence in every shingle.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <AnimatePresence mode="popLayout">
              {displayedServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: showAll && i >= 3 ? (i - 3) * 0.1 : i * 0.2, 
                    duration: 1, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -15, rotateX: 2, rotateY: 2 }}
                  className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-zinc-100 perspective-1000"
                >
                  <div className="h-64 md:h-80 overflow-hidden relative">
                    <motion.img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-500" />
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-xl group-hover:rotate-12 transition-transform">
                      <service.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 md:p-12 pb-10 sm:pb-14 md:pb-16">
                    <h3 className="text-xl md:text-3xl font-black text-zinc-900 mb-4 tracking-tight group-hover:text-brand transition-colors">{service.title}</h3>
                    <p className="text-zinc-500 mb-8 leading-relaxed text-sm md:text-base">{service.description}</p>
                    <motion.button 
                      whileHover={{ x: 5 }}
                      onClick={onOpenEstimate}
                      className="flex items-center gap-2 text-brand font-black transition-all text-base group/btn"
                    >
                      Get an Estimate <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Folded Gradient Overlay - Subtle hint that doesn't cover content */}
          {!showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-50 via-zinc-50/20 to-transparent pointer-events-none z-10" />
          )}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-center relative z-20"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 bg-white border border-zinc-200 rounded-full shadow-md hover:shadow-lg hover:border-brand/30 transition-all duration-500 -translate-y-4"
          >
            <span className="text-zinc-900 font-bold text-xs md:text-sm tracking-tight">
              {showAll ? 'Show Less Services' : 'Show More Services'}
            </span>
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-6 h-6 bg-brand/5 rounded-full flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
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

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group">
              <motion.div 
                initial={{ scale: 1.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop" 
                  alt="Our Team at Work" 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              {/* Shutter Reveal Overlay */}
              <motion.div 
                initial={{ x: "0%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute inset-0 bg-brand z-20"
              />
              <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Floating Badge */}
              <motion.div 
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  scale: { type: "spring", stiffness: 100, delay: 0.5 },
                  rotate: { type: "spring", stiffness: 100, delay: 0.5 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                animate={{ y: [0, -10, 0] }}
                className="absolute -bottom-2 -right-2 md:-bottom-10 md:-right-10 z-20 bg-brand-accent text-white p-4 md:p-10 rounded-xl md:rounded-[2rem] shadow-2xl"
              >
                <div className="text-xl md:text-5xl font-black mb-1">28+</div>
                <div className="text-[8px] md:text-sm font-bold uppercase tracking-widest opacity-80">Years of Trust</div>
              </motion.div>
            {/* Decorative Elements */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-10 -left-10 w-48 md:w-64 h-48 md:h-64 bg-brand/5 rounded-full blur-3xl will-change-transform" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 md:space-y-10 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-brand font-black uppercase tracking-[0.3em] text-xs md:text-sm"
              >
                Why Choose TWO22
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-6xl font-black text-zinc-900 leading-tight tracking-tight"
              >
                Roofing You Can Trust in Macomb County
              </motion.h2>
            </div>
            <motion.p 
              className="text-lg md:text-xl text-zinc-500 leading-relaxed"
            >
              Since 1996, our family-owned business has helped countless customers achieve peace of mind within their homes. We pride ourselves on delivering state-of-the-art roofing services to the Macomb, Michigan community. With a dedication to quality craftsmanship and innovative solutions, our team ensures that every project is completed with precision and care.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 pt-4">
              {[
                'Certified Master Craftsmen',
                'Lifetime Material Warranty',
                'Fully Licensed & Insured',
                '24/7 Emergency Support'
              ].map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-brand/10 rounded-full flex items-center justify-center text-brand flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span className="font-bold text-zinc-700 text-sm md:text-base">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-zinc-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-base md:text-lg shadow-xl hover:bg-zinc-800 transition-all"
            >
              Learn Our Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const team = [
    { name: 'Wendell', role: 'Owner & Founder', phone: '(586) 265-6607', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Rhonda', role: 'Owner & Operations', phone: '(586) 307-2872', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop' },
    { name: 'Our Crew', role: 'Expert Installers', phone: '(586) 265-6607', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <section id="team" className="py-24 md:py-32 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-black uppercase tracking-[0.3em] text-xs md:text-sm block mb-4"
          >
            The Experts
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-6xl font-black mb-6"
          >
            Skilled Roofing Professionals
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            Meet the dedicated experts who bring decades of combined experience to every project we undertake.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden mb-8 md:mb-10">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale md:grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:left-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <a href={`tel:${member.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 mb-2 group/phone">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      className="w-10 h-10 md:w-12 md:h-12 bg-brand rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand/20 group-hover/phone:bg-brand-dark transition-colors"
                    >
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </motion.div>
                    <span className="font-bold text-base md:text-xl text-white group-hover/phone:text-brand transition-colors">{member.phone}</span>
                  </a>
                </div>
              </div>
              <div className="px-2 transform group-hover:translate-x-2 transition-transform duration-500">
                <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tight group-hover:text-brand transition-colors">{member.name}</h3>
                <p className="text-brand font-bold uppercase tracking-[0.2em] text-xs md:text-sm group-hover:text-white transition-colors">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
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

  return (
    <section id="reviews" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black text-zinc-900 mb-6"
          >
            Client Stories
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex items-center justify-center gap-1 text-brand mb-6"
          >
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-zinc-500 text-lg font-medium"
          >
            Rated 4.9/5 based on 800+ local reviews
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                bounce: 0.4, 
                duration: 1, 
                delay: i * 0.15 
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                backgroundColor: "#ffffff",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)"
              }}
              className="bg-zinc-50/80 p-8 sm:p-10 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-zinc-100 relative group"
            >
              <div className="absolute -top-7 left-12 w-14 h-14 bg-brand rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand/20 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                <Star className="w-7 h-7 fill-current" />
              </div>
              <p className="text-zinc-700 text-lg md:text-xl leading-relaxed mb-10 italic font-medium">"{review.content}"</p>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src={review.image} 
                    alt={review.name} 
                    className="w-16 h-16 rounded-2xl object-cover shadow-lg relative z-10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
                </div>
                <div>
                  <div className="font-black text-zinc-900 text-lg">{review.name}</div>
                  <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EstimateSection = () => {
  return (
    <section id="estimate" className="py-24 md:py-40 bg-zinc-50 overflow-hidden relative">
      {/* Premium Background Accents */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none will-change-transform"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-200/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-zinc-900 shadow-2xl shadow-zinc-900/20 rounded-[3rem] md:rounded-[5rem] p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Inner Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
            <div className="relative z-10">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-brand font-black uppercase tracking-[0.4em] text-xs md:text-sm block mb-6"
              >
                Get Started
              </motion.span>
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-7xl font-black mb-8 tracking-tight text-white leading-[1.1]"
              >
                Request Your <br /> <span className="text-brand">Free Estimate</span>
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 max-w-md"
              >
                Fill out the form to schedule your professional inspection. Wendell or Rhonda will contact you within 24 hours.
              </motion.p>
              
              <div className="space-y-6">
                {[
                  "No-Obligation Inspection",
                  "Detailed Damage Report",
                  "Premium Material Options"
                ].map((item, i) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center gap-5 text-white/90 font-bold text-lg"
                  >
                    <div className="w-8 h-8 bg-brand/20 rounded-lg flex items-center justify-center text-brand">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full"
            >
              <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-zinc-800/50 backdrop-blur-xl border border-white/10 p-5 sm:p-6 md:p-8 lg:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl">
                <EstimateForm />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
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

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const openEstimate = () => setIsEstimateModalOpen(true);
  const closeEstimate = () => setIsEstimateModalOpen(false);

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar 
        onOpenEstimate={openEstimate} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Hero onOpenEstimate={openEstimate} />
      <Stats />
      <Services onOpenEstimate={openEstimate} />
      <About />
      <Team />
      <Testimonials />
      <Projects />
      <EstimateSection />
      <Footer />
      {!isMobileMenuOpen && <RoofingAIAgent />}
      <EstimateModal isOpen={isEstimateModalOpen} onClose={closeEstimate} />
    </div>
  );
}
