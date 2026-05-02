import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { AboutSection } from './components/sections/AboutSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="relative overflow-hidden">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <ProcessSection />
        <ContactSection />
        <Footer />
      </main>
      <WhatsAppButton phone="5511978305530" />
    </div>
  );
}

export default App;
