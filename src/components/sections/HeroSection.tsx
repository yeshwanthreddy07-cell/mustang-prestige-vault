import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/mustang-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ford Mustang Shelby GT500 - The Ultimate Performance Machine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-glow animate-slide-up">
          The Legend Lives:
          <span className="block text-gold-glow">Ford Mustang</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in">
          Experience the ultimate in American muscle car performance. From the track-bred Shelby GT500 to the iconic Mustang GT - discover automotive excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button asChild size="lg" className="btn-hero text-lg px-8 py-6">
            <Link to="/cars">
              Explore Models
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
            <Play className="mr-2 h-5 w-5" />
            Watch Video
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">760+</div>
            <div className="text-sm md:text-base text-foreground/80">Horsepower</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">3.3s</div>
            <div className="text-sm md:text-base text-foreground/80">0-60 MPH</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">180+</div>
            <div className="text-sm md:text-base text-foreground/80">Top Speed</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;