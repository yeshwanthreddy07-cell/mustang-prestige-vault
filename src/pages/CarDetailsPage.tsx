import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap, Gauge, Settings, DollarSign, Star, CheckCircle } from "lucide-react";
import mustangGT from "@/assets/mustang-gt.jpg";
import shelbyGT500 from "@/assets/shelby-gt500.jpg";
import mach1 from "@/assets/mach-1.jpg";

const carData = {
  "mustang-gt": {
    name: "Mustang GT",
    year: "2024",
    image: mustangGT,
    price: "$37,895",
    engine: "5.0L Ti-VCT V8",
    horsepower: "450 HP",
    torque: "410 lb-ft",
    topSpeed: "155 MPH",
    acceleration: "4.3s",
    transmission: "6-Speed Manual / 10-Speed Automatic",
    fuelEconomy: "15/25 MPG",
    description: "The 2024 Mustang GT delivers authentic American muscle car DNA with a naturally aspirated 5.0L Coyote V8 engine. This legendary powerplant produces 450 horsepower and 410 lb-ft of torque, providing exhilarating performance with that distinctive V8 soundtrack.",
    features: [
      "5.0L Ti-VCT V8 Engine",
      "6-Speed Manual or 10-Speed Automatic",
      "Selectable Drive Modes",
      "Track Apps Performance Timer",
      "Launch Control",
      "Line Lock Feature",
      "Brembo Brakes (Performance Package)",
      "MagneRide Dampers (Available)"
    ],
    specifications: {
      "Engine": "5.0L Ti-VCT V8",
      "Horsepower": "450 HP @ 7,000 RPM",
      "Torque": "410 lb-ft @ 4,600 RPM",
      "Transmission": "6-Speed Manual / 10-Speed Auto",
      "0-60 MPH": "4.3 seconds",
      "Quarter Mile": "12.8 seconds",
      "Top Speed": "155 MPH (electronically limited)",
      "Fuel Economy": "15 city / 25 highway MPG",
      "Curb Weight": "3,705 lbs",
      "Length": "188.3 inches",
      "Width": "75.4 inches",
      "Height": "54.4 inches"
    }
  },
  "shelby-gt500": {
    name: "Shelby GT500",
    year: "2024",
    image: shelbyGT500,
    price: "$80,795",
    engine: "5.2L Supercharged V8",
    horsepower: "760 HP",
    torque: "625 lb-ft",
    topSpeed: "180+ MPH",
    acceleration: "3.3s",
    transmission: "7-Speed Dual-Clutch",
    fuelEconomy: "12/18 MPG",
    description: "The apex predator of the Mustang lineup, the Shelby GT500 represents the pinnacle of American performance engineering. Its supercharged 5.2L V8 produces a staggering 760 horsepower, making it the most powerful street-legal Ford ever produced.",
    features: [
      "5.2L Supercharged V8 Engine",
      "7-Speed Dual-Clutch Transmission",
      "Carbon Fiber Track Package",
      "Michelin Pilot Sport Cup 2 Tires",
      "Brembo 6-Piston Front Brakes",
      "MagneRide Dampers",
      "Track-Tuned Aerodynamics",
      "Launch Control & Drag Mode"
    ],
    specifications: {
      "Engine": "5.2L Supercharged V8",
      "Horsepower": "760 HP @ 7,300 RPM",
      "Torque": "625 lb-ft @ 4,200 RPM",
      "Transmission": "7-Speed Dual-Clutch",
      "0-60 MPH": "3.3 seconds",
      "Quarter Mile": "10.7 seconds @ 134 MPH",
      "Top Speed": "180+ MPH",
      "Fuel Economy": "12 city / 18 highway MPG",
      "Curb Weight": "4,171 lbs",
      "Length": "188.3 inches",
      "Width": "82.3 inches",
      "Height": "54.2 inches"
    }
  },
  "mach-1": {
    name: "Mustang Mach 1",
    year: "2024",
    image: mach1,
    price: "$54,595",
    engine: "5.0L V8",
    horsepower: "480 HP",
    torque: "420 lb-ft",
    topSpeed: "163 MPH",
    acceleration: "4.0s",
    transmission: "6-Speed Tremec Manual",
    fuelEconomy: "14/23 MPG",
    description: "The Mustang Mach 1 bridges the gap between the GT and Shelby with carefully curated performance upgrades. This limited-edition model combines heritage styling cues with modern track-focused engineering.",
    features: [
      "5.0L Ti-VCT V8 with Intake Manifold",
      "Tremec 6-Speed Manual Transmission",
      "MagneRide Dampers",
      "Handling Package",
      "Unique Aero Package",
      "Michelin Pilot Sport Cup 2 Tires",
      "Brembo 6-Piston Front Brakes",
      "Track-Tuned Suspension"
    ],
    specifications: {
      "Engine": "5.0L Ti-VCT V8 (Enhanced)",
      "Horsepower": "480 HP @ 7,000 RPM",
      "Torque": "420 lb-ft @ 4,600 RPM",
      "Transmission": "Tremec 6-Speed Manual",
      "0-60 MPH": "4.0 seconds",
      "Quarter Mile": "12.4 seconds",
      "Top Speed": "163 MPH",
      "Fuel Economy": "14 city / 23 highway MPG",
      "Curb Weight": "3,814 lbs",
      "Length": "188.3 inches",
      "Width": "75.4 inches",
      "Height": "54.2 inches"
    }
  }
};

const CarDetailsPage = () => {
  const { model } = useParams();
  const car = model ? carData[model as keyof typeof carData] : null;

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
          <Link to="/cars" className="text-primary hover:underline">
            Back to Cars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={car.image}
              alt={`${car.year} ${car.name}`}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="mb-8">
              <Button asChild variant="ghost" className="mb-4">
                <Link to="/cars">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Cars
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  {car.year} Model
                </Badge>
                <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-glow">
                  {car.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {car.description}
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-accent">{car.horsepower}</div>
                    <div className="text-sm text-muted-foreground">Horsepower</div>
                  </div>
                  <div className="text-center">
                    <Gauge className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-accent">{car.acceleration}</div>
                    <div className="text-sm text-muted-foreground">0-60 MPH</div>
                  </div>
                  <div className="text-center">
                    <Settings className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-accent">{car.topSpeed}</div>
                    <div className="text-sm text-muted-foreground">Top Speed</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-accent">{car.price}</div>
                    <div className="text-sm text-muted-foreground">Starting MSRP</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="bg-gradient-accent hover:opacity-90">
                    Configure & Price
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">
                      Schedule Test Drive
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src={car.image}
                  alt={`${car.year} ${car.name}`}
                  className="w-full rounded-2xl shadow-glow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 px-4 bg-mustang-gray">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Detailed Specifications */}
              <Card className="mustang-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-heading font-bold mb-6 text-gold-glow">
                    Technical Specifications
                  </h2>
                  
                  <div className="space-y-4">
                    {Object.entries(car.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-border/30">
                        <span className="text-muted-foreground">{key}</span>
                        <span className="font-semibold text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="mustang-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-heading font-bold mb-6 text-gold-glow">
                    Key Features
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-mustang-light-gray rounded-lg">
                    <div className="flex items-center mb-3">
                      <Star className="h-5 w-5 text-accent mr-2" />
                      <span className="font-semibold">Performance Rating</span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex text-accent mr-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Exceptional Performance
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <h3 className="text-3xl font-heading font-bold mb-6 text-glow">
                Ready to Experience the {car.name}?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our team to schedule a test drive or learn more about financing options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-accent hover:opacity-90" asChild>
                  <Link to="/contact">
                    Schedule Test Drive
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/cars">
                    Compare Models
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CarDetailsPage;