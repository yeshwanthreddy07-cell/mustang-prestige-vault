import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    model: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      model: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dealership Location",
      details: [
        "Mustang Prestige Vault",
        "1455 Performance Drive",
        "Dearborn, MI 48124"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Sales: (555) 123-FORD",
        "Service: (555) 456-PART",
        "Parts: (555) 789-MUST"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "sales@mustangprestige.com",
        "service@mustangprestige.com",
        "parts@mustangprestige.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 8:00 PM",
        "Saturday: 9:00 AM - 6:00 PM",
        "Sunday: 12:00 PM - 5:00 PM"
      ]
    }
  ];

  const subjects = [
    "General Inquiry",
    "Schedule Test Drive",
    "Vehicle Purchase",
    "Parts & Accessories",
    "Service Appointment",
    "Financing Information",
    "Trade-In Evaluation",
    "Special Orders"
  ];

  const models = [
    "Mustang GT",
    "Shelby GT500",
    "Mustang Mach 1",
    "Mustang EcoBoost",
    "Mustang Bullitt",
    "Shelby GT350",
    "Not Sure / Need Guidance"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 px-4 bg-gradient-to-r from-background to-mustang-gray">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-glow">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to experience the thrill of Mustang ownership? Our expert team is here to help you 
              find the perfect vehicle or answer any questions about our premium parts and services.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="mustang-card">
                  <CardHeader>
                    <CardTitle className="text-3xl font-heading text-gold-glow flex items-center">
                      <MessageSquare className="mr-3 h-8 w-8 text-primary" />
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              {subjects.map(subject => (
                                <SelectItem key={subject} value={subject}>
                                  {subject}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="model">Interested Model</Label>
                        <Select value={formData.model} onValueChange={(value) => handleInputChange("model", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Mustang model" />
                          </SelectTrigger>
                          <SelectContent>
                            {models.map(model => (
                              <SelectItem key={model} value={model}>
                                {model}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-accent hover:opacity-90"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="mustang-card animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <info.icon className="h-6 w-6 text-primary mr-3" />
                        <h3 className="text-lg font-heading font-bold text-gold-glow">
                          {info.title}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Quick Actions */}
                <Card className="mustang-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-bold mb-4 text-gold-glow">
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Sales Team
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Parts Dept
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <MapPin className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-16">
              <Card className="mustang-card">
                <CardContent className="p-0">
                  <div className="bg-mustang-gray h-96 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-heading font-bold mb-2 text-gold-glow">
                        Visit Our Showroom
                      </h3>
                      <p className="text-muted-foreground">
                        Interactive map would be integrated here showing our dealership location
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;