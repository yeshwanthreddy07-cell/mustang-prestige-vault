import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import partsImage from "@/assets/mustang-parts.jpg";

const premiumParts = [
  {
    id: 1,
    name: "Shelby Performance Supercharger Kit",
    price: "$8,995",
    category: "Engine",
    rating: 5,
    description: "Add 200+ horsepower with this professional-grade supercharger system.",
    features: ["Bolt-on Installation", "ECU Tune Included", "3-Year Warranty"],
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Carbon Fiber Track Wing",
    price: "$2,495",
    category: "Aerodynamics",
    rating: 5,
    description: "Lightweight carbon fiber rear spoiler for maximum downforce.",
    features: ["Real Carbon Fiber", "Track-Tested", "Professional Install"]
  },
  {
    id: 3,
    name: "Brembo Racing Brake Kit",
    price: "$3,895",
    category: "Brakes",
    rating: 5,
    description: "6-piston front calipers with 15-inch slotted rotors.",
    features: ["Track-Ready", "Reduced Fade", "Premium Pads Included"]
  },
  {
    id: 4,
    name: "Forged Wheel Set - 20\"",
    price: "$4,200",
    category: "Wheels",
    rating: 5,
    description: "Lightweight forged aluminum wheels in multiple finishes.",
    features: ["Forged Construction", "Multiple Colors", "Tire Package Available"]
  },
  {
    id: 5,
    name: "Cold Air Intake System",
    price: "$695",
    category: "Engine",
    rating: 4,
    description: "High-flow air intake for improved throttle response and sound.",
    features: ["+15 HP Gain", "Easy Installation", "Washable Filter"]
  },
  {
    id: 6,
    name: "Recaro Racing Seats",
    price: "$2,800",
    category: "Interior",
    rating: 5,
    description: "Professional racing seats with premium Alcantara upholstery.",
    features: ["FIA Approved", "Custom Colors", "Harness Compatible"],
    badge: "Premium"
  }
];

const PartsSection = () => {
  return (
    <section className="py-20 px-4 bg-mustang-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-glow">
            Premium Performance Parts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your Mustang with our curated selection of high-performance parts and accessories. 
            From engine upgrades to aesthetic enhancements.
          </p>
        </div>

        {/* Featured Parts Image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden">
          <img
            src={partsImage}
            alt="Premium Mustang Performance Parts Collection"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent flex items-center">
            <div className="p-8 max-w-lg">
              <h3 className="text-3xl font-heading font-bold mb-4 text-gold-glow">
                Professional Installation Available
              </h3>
              <p className="text-muted-foreground mb-6">
                All parts come with professional installation services and comprehensive warranties.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Schedule Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Parts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {premiumParts.map((part, index) => (
            <Card 
              key={part.id} 
              className="mustang-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="bg-mustang-light-gray">
                    {part.category}
                  </Badge>
                  {part.badge && (
                    <Badge className="bg-primary text-primary-foreground">
                      {part.badge}
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-heading font-bold mb-2 text-foreground">
                  {part.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex text-accent mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < part.rating ? "fill-current" : "stroke-current opacity-30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({part.rating}.0)</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {part.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {part.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-heading font-bold text-accent">
                    {part.price}
                  </span>
                  <Button size="sm" className="bg-gradient-accent hover:opacity-90">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/parts">
              View All Parts & Accessories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartsSection;