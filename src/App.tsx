import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { About } from './components/About';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Projects } from './components/Projects';
import { EstimateSection } from './components/EstimateSection';
import { Guarantee } from './components/Guarantee';
import { BusinessHours } from './components/BusinessHours';
import { Footer } from './components/Footer';
import RoofingAIAgent from './components/RoofingAIAgent';
import EstimateModal from './components/EstimateModal';
import { LenisProvider } from './components/ui/LenisProvider';

const SectionDivider = () => (
  <div className="w-full h-px relative z-10 flex justify-center overflow-hidden">
    <div className="w-full h-full bg-gradient-to-r from-transparent via-brand/[0.16] to-transparent" />
  </div>
);

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openEstimate = () => setIsEstimateModalOpen(true);
  const closeEstimate = () => setIsEstimateModalOpen(false);

  return (
    <LenisProvider>
      <div className="relative flex min-h-screen flex-col overflow-x-clip w-full">
        <Navbar 
          onOpenEstimate={openEstimate} 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <Hero onOpenEstimate={openEstimate} />
        <SectionDivider />
        <Stats />
        <SectionDivider />
        <Services onOpenEstimate={openEstimate} />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Team />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <EstimateSection onOpenEstimate={openEstimate} />
        <SectionDivider />
        <Guarantee />
        <SectionDivider />
        <BusinessHours />
        <Footer />
        {!isMobileMenuOpen && <RoofingAIAgent />}
        <EstimateModal isOpen={isEstimateModalOpen} onClose={closeEstimate} />
      </div>
    </LenisProvider>
  );
}
