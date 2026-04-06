import { motion } from 'motion/react';

export const Logo = ({ isScrolled = false, isFooter = false }: { isScrolled?: boolean, isFooter?: boolean }) => {
  // Logic: When it's not scrolled and not in the footer, it's on a dark hero background (transparent header)
  const isTransparentHero = !isScrolled && !isFooter;
  
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
      <div className="flex items-center gap-3">
        <motion.img 
          src="/logo.jpg" 
          alt="Two22 Roofing" 
          animate={{ 
            filter: isTransparentHero ? "brightness(0) invert(1)" : "brightness(1) invert(0)" 
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="h-10 md:h-12 w-auto object-contain rounded-lg" 
        />
      </div>
    </motion.div>
  );
};
