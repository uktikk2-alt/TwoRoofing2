

export const Logo = ({ isScrolled = false, isFooter = false }: { isScrolled?: boolean, isFooter?: boolean }) => {
  // Logic: Use white logo when on dark background (unscrolled hero OR dark footer/menu)
  const isWhite = !isScrolled || isFooter;
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      onClick={scrollToTop}
      className="flex flex-col leading-none group cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform"
    >
      <div className="flex items-center gap-3 relative">
        <img 
          src="/logo.jpg" 
          alt="Two22 Roofing" 
          className={`h-12 md:h-14 lg:h-[3.75rem] w-auto object-contain rounded-xl transition-[filter] duration-300 ${
            isWhite ? 'brightness-0 invert' : 'brightness-100 invert-0'
          }`}
        />
      </div>
    </div>
  );
};
