import { motion } from 'motion/react';

export const Logo = ({ isScrolled = false, isFooter = false }: { isScrolled?: boolean, isFooter?: boolean }) => {
  // Logic: Use white logo when on dark background (unscrolled hero OR dark footer/menu)
  const isWhite = !isScrolled || isFooter;
  
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
      <div className="flex items-center gap-3 relative">
        <motion.img 
          src="/logo.jpg" 
          alt="Two22 Roofing" 
          animate={{ 
            filter: isWhite ? "brightness(0) invert(1)" : "brightness(1) invert(0)",
            opacity: 1
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="h-12 md:h-14 lg:h-[3.75rem] w-auto object-contain rounded-xl drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500" 
        />
        {/* Subtle left-side brand anchor glow (only visible when scrolled or in footer) */}
        {!isWhite && <div className="absolute -inset-4 bg-brand/5 blur-xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />}
      </div>
    </motion.div>
  );
};
