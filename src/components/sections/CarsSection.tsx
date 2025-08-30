import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Gauge, DollarSign } from "lucide-react";
import mustangGT from "@/assets/mustang-gt.jpg";
import shelbyGT500 from "@/assets/shelby-gt500.jpg";
import mach1 from "@/assets/mach-1.jpg";

const cars = [
  {
    id: "mustang-gt",
    name: "Mustang GT",
    image: mustangGT,
    price: "$37,895",
    engine: "5.0L V8",
    horsepower: "450 HP",
    topSpeed: "155 MPH",
    description: "The quintessential American muscle car with naturally aspirated V8 power.",
    features: ["Manual or Automatic", "Track Apps", "Launch Control"]
  },
  {
    id: "shelby-gt500",
    name: "Shelby GT500",
    image: shelbyGT500,
    price: "$80,795",
    engine: "5.2L Supercharged V8",
    horsepower: "760 HP",
    topSpeed: "180+ MPH",
    description: "The most powerful street-legal Ford ever built. Track-bred performance.",
    features: ["Carbon Fiber Track Package", "Michelin Pilot Sport Cup 2", "Brembo Brakes"]
  },
  {
    id: "mach-1",
    name: "Mustang Mach 1",
    image: mach1,
    price: "$54,595",
    engine: "5.0L V8",
    horsepower: "480 HP",
    topSpeed: "163 MPH",
    description: "Heritage-inspired design meets modern performance technology.",
    features: ["Tremec Manual", "MagneRide Dampers", "Handling Package"]
  }
];

const CarsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-glow">
            Premium Mustang Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our curated selection of high-performance Ford Mustang vehicles. Each model represents decades of American automotive engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <Card 
              key={car.id} 
              className="mustang-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={car.image}
                    alt={`${car.name} - Premium Ford Mustang`}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {car.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-gold-glow">
                    {car.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {car.description}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Engine</div>
                      <div className="text-sm font-semibold">{car.engine}</div>
                    </div>
                    <div className="text-center">
                      <Gauge className="h-5 w-5 text-accent mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Power</div>
                      <div className="text-sm font-semibold">{car.horsepower}</div>
                    </div>
                    <div className="text-center">
                      <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Top Speed</div>
                      <div className="text-sm font-semibold">{car.topSpeed}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {car.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full bg-gradient-accent hover:opacity-90">
                    <Link to={`/cars/${car.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/cars">
              View All Mustang Models
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarsSection;