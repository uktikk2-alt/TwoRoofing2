import { useState } from 'react';
import { useScroll, useSpring, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { About } from './components/About';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Projects } from './components/Projects';
import { EstimateSection } from './components/EstimateSection';
import { Footer } from './components/Footer';
import RoofingAIAgent from './components/RoofingAIAgent';
import EstimateModal from './components/EstimateModal';
import { LenisProvider } from './components/ui/LenisProvider';

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
    <LenisProvider>
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
    </LenisProvider>
  );
}
