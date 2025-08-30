import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Gauge, DollarSign, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import mustangGT from "@/assets/mustang-gt.jpg";
import shelbyGT500 from "@/assets/shelby-gt500.jpg";
import mach1 from "@/assets/mach-1.jpg";

const allCars = [
  {
    id: "mustang-gt",
    name: "Mustang GT",
    year: "2024",
    image: mustangGT,
    price: "$37,895",
    engine: "5.0L V8",
    horsepower: "450 HP",
    topSpeed: "155 MPH",
    acceleration: "4.3s",
    transmission: "Manual/Auto",
    description: "The quintessential American muscle car with naturally aspirated V8 power and iconic styling.",
    features: ["Manual or 10-Speed Automatic", "Track Apps", "Launch Control", "Line Lock"],
    category: "Performance"
  },
  {
    id: "shelby-gt500",
    name: "Shelby GT500",
    year: "2024",
    image: shelbyGT500,
    price: "$80,795",
    engine: "5.2L Supercharged V8",
    horsepower: "760 HP",
    topSpeed: "180+ MPH",
    acceleration: "3.3s",
    transmission: "7-Speed DCT",
    description: "The most powerful street-legal Ford ever built. Track-bred performance meets everyday usability.",
    features: ["Carbon Fiber Track Package", "Michelin Pilot Sport Cup 2", "Brembo Brakes", "MagneRide"],
    category: "Supercar"
  },
  {
    id: "mach-1",
    name: "Mustang Mach 1",
    year: "2024",
    image: mach1,
    price: "$54,595",
    engine: "5.0L V8",
    horsepower: "480 HP",
    topSpeed: "163 MPH",
    acceleration: "4.0s",
    transmission: "6-Speed Manual",
    description: "Heritage-inspired design meets modern performance technology in this limited-edition masterpiece.",
    features: ["Tremec Manual", "MagneRide Dampers", "Handling Package", "Intake Manifold"],
    category: "Limited Edition"
  }
];

const CarsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 px-4 bg-gradient-to-r from-background to-mustang-gray">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-glow">
              Mustang Car Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our complete lineup of Ford Mustang vehicles. From the track-focused Shelby GT500 
              to the heritage-inspired Mach 1, find your perfect American muscle car.
            </p>
          </div>
        </section>

        {/* Cars Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {allCars.map((car, index) => (
                <Card 
                  key={car.id} 
                  className="mustang-card border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={car.image}
                        alt={`${car.year} ${car.name} - Premium Ford Mustang`}
                        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-mustang-light-gray text-foreground">
                          {car.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {car.price}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-heading font-bold text-gold-glow">
                          {car.name}
                        </h3>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {car.year}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 text-sm">
                        {car.description}
                      </p>

                      {/* Performance Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-mustang-gray rounded-lg">
                          <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                          <div className="text-xs text-muted-foreground">Engine</div>
                          <div className="text-sm font-semibold">{car.engine}</div>
                        </div>
                        <div className="text-center p-3 bg-mustang-gray rounded-lg">
                          <Gauge className="h-5 w-5 text-accent mx-auto mb-1" />
                          <div className="text-xs text-muted-foreground">Power</div>
                          <div className="text-sm font-semibold">{car.horsepower}</div>
                        </div>
                        <div className="text-center p-3 bg-mustang-gray rounded-lg">
                          <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                          <div className="text-xs text-muted-foreground">0-60 MPH</div>
                          <div className="text-sm font-semibold">{car.acceleration}</div>
                        </div>
                        <div className="text-center p-3 bg-mustang-gray rounded-lg">
                          <Gauge className="h-5 w-5 text-accent mx-auto mb-1" />
                          <div className="text-xs text-muted-foreground">Top Speed</div>
                          <div className="text-sm font-semibold">{car.topSpeed}</div>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-3 text-foreground">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {car.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-muted-foreground">
                              <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button asChild className="flex-1 bg-gradient-accent hover:opacity-90">
                          <Link to={`/cars/${car.id}`}>
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link to="/contact">
                            Contact
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CarsPage;