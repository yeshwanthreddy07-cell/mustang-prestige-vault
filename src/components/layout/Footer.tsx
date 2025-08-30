import { Link } from "react-router-dom";
import { Car, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mustang-gray border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-xl font-heading font-bold">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-gold-glow">Mustang</span>
              <span className="text-primary">Prestige</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your premier destination for luxury Ford Mustang vehicles and high-performance parts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/cars" className="block text-muted-foreground hover:text-primary transition-colors">
                Mustang Cars
              </Link>
              <Link to="/parts" className="block text-muted-foreground hover:text-primary transition-colors">
                Mustang Parts
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Mustang
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Car Models */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Popular Models</h3>
            <div className="space-y-2 text-sm">
              <Link to="/cars/mustang-gt" className="block text-muted-foreground hover:text-primary transition-colors">
                Mustang GT
              </Link>
              <Link to="/cars/shelby-gt500" className="block text-muted-foreground hover:text-primary transition-colors">
                Shelby GT500
              </Link>
              <Link to="/cars/mach-1" className="block text-muted-foreground hover:text-primary transition-colors">
                Mustang Mach 1
              </Link>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Phone: (555) 123-FORD</p>
              <p>Email: info@mustangprestige.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Mustang Prestige Vault. All rights reserved. | Ford and Mustang are trademarks of Ford Motor Company.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;