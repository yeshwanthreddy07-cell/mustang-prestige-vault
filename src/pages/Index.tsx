import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CarsSection from "@/components/sections/CarsSection";
import PartsSection from "@/components/sections/PartsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <CarsSection />
        <PartsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;