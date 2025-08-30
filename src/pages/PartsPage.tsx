import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Star, Search, ShoppingCart, Filter } from "lucide-react";

const allParts = [
  {
    id: 1,
    name: "Shelby Performance Supercharger Kit",
    price: "$8,995",
    category: "Engine",
    rating: 5,
    image: "/api/placeholder/400/300",
    description: "Add 200+ horsepower with this professional-grade supercharger system designed for 5.0L V8 engines.",
    features: ["Bolt-on Installation", "ECU Tune Included", "3-Year Warranty", "Professional Support"],
    badge: "Best Seller",
    compatibility: ["Mustang GT", "Mustang Bullitt"]
  },
  {
    id: 2,
    name: "Carbon Fiber Track Wing",
    price: "$2,495",
    category: "Aerodynamics",
    rating: 5,
    image: "/api/placeholder/400/300",
    description: "Lightweight carbon fiber rear spoiler engineered for maximum downforce and aggressive styling.",
    features: ["Real Carbon Fiber", "Track-Tested Design", "Professional Installation", "Wind Tunnel Tested"],
    compatibility: ["All Mustang Models"]
  },
  {
    id: 3,
    name: "Brembo Racing Brake Kit",
    price: "$3,895",
    category: "Brakes",
    rating: 5,
    image: "/api/placeholder/400/300",
    description: "6-piston front calipers with 15-inch slotted rotors for ultimate stopping power.",
    features: ["6-Piston Calipers", "Slotted Rotors", "Racing Brake Pads", "Stainless Steel Lines"],
    compatibility: ["Mustang GT", "Shelby GT500"]
  },
  {
    id: 4,
    name: "Forged Wheel Set - 20\"",
    price: "$4,200",
    category: "Wheels",
    rating: 5,
    image: "/api/placeholder/400/300",
    description: "Lightweight forged aluminum wheels available in multiple finishes for enhanced performance.",
    features: ["Forged Construction", "Multiple Finishes", "Lightweight Design", "Hub-Centric"],
    compatibility: ["All Mustang Models"]
  },
  {
    id: 5,
    name: "Cold Air Intake System",
    price: "$695",
    category: "Engine",
    rating: 4,
    image: "/api/placeholder/400/300",
    description: "High-flow air intake system for improved throttle response and enhanced engine sound.",
    features: ["+15 HP Gain", "Easy Installation", "Washable Filter", "Improved Sound"],
    badge: "Popular",
    compatibility: ["Mustang GT", "EcoBoost"]
  },
  {
    id: 6,
    name: "Recaro Racing Seats",
    price: "$2,800",
    category: "Interior",
    rating: 5,
    image: "/api/placeholder/400/300",
    description: "Professional racing seats with premium Alcantara upholstery and FIA approval.",
    features: ["FIA Approved", "Alcantara Upholstery", "Multiple Colors", "Harness Compatible"],
    badge: "Premium",
    compatibility: ["All Mustang Models"]
  },
  {
    id: 7,
    name: "Performance Exhaust System",
    price: "$1,895",
    category: "Exhaust",
    rating: 5,
    image: "/api/placeholder/400/300",
    description: "Cat-back exhaust system with aggressive sound and improved flow characteristics.",
    features: ["304 Stainless Steel", "Aggressive Sound", "Improved Flow", "Lifetime Warranty"],
    compatibility: ["Mustang GT", "Mustang Bullitt"]
  },
  {
    id: 8,
    name: "Coilover Suspension Kit",
    price: "$2,195",
    category: "Suspension",
    rating: 4,
    image: "/api/placeholder/400/300",
    description: "Adjustable coilover suspension for improved handling and customizable ride height.",
    features: ["32-Way Adjustable", "Height Adjustable", "Track Tuned", "Street Comfortable"],
    compatibility: ["Mustang GT", "EcoBoost"]
  },
  {
    id: 9,
    name: "Strut Tower Brace",
    price: "$295",
    category: "Suspension",
    rating: 4,
    image: "/api/placeholder/400/300",
    description: "Aluminum strut tower brace for improved chassis rigidity and handling precision.",
    features: ["6061 Aluminum", "TIG Welded", "Powder Coated", "Easy Installation"],
    compatibility: ["All Mustang Models"]
  }
];

const categories = ["All", "Engine", "Exhaust", "Suspension", "Brakes", "Wheels", "Aerodynamics", "Interior"];

const PartsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const filteredParts = allParts
    .filter(part => {
      const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           part.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || part.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return parseInt(a.price.replace(/[$,]/g, "")) - parseInt(b.price.replace(/[$,]/g, ""));
        case "price-high":
          return parseInt(b.price.replace(/[$,]/g, "")) - parseInt(a.price.replace(/[$,]/g, ""));
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 px-4 bg-gradient-to-r from-background to-mustang-gray">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-glow">
              Mustang Performance Parts
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your Mustang with our premium selection of performance parts and accessories. 
              From engine upgrades to suspension components, we have everything you need.
            </p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 bg-mustang-gray border-b border-border">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search parts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredParts.length} of {allParts.length} parts
            </div>
          </div>
        </section>

        {/* Parts Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredParts.map((part, index) => (
                <Card 
                  key={part.id} 
                  className="mustang-card border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <div className="w-full h-48 bg-mustang-light-gray flex items-center justify-center">
                        <span className="text-muted-foreground">Product Image</span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-mustang-light-gray">
                          {part.category}
                        </Badge>
                      </div>
                      {part.badge && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-primary-foreground">
                            {part.badge}
                          </Badge>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
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

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Features:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {part.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Compatibility */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Compatible with:</h4>
                        <div className="flex flex-wrap gap-1">
                          {part.compatibility.map((model, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {model}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-heading font-bold text-accent">
                          {part.price}
                        </span>
                        <Button size="sm" className="bg-gradient-accent hover:opacity-90">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredParts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-heading font-bold mb-4">No parts found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PartsPage;