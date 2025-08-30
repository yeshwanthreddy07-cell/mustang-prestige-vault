import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Users, Zap } from "lucide-react";

const AboutPage = () => {
  const milestones = [
    {
      year: "1964",
      title: "The Legend Begins",
      description: "Ford introduces the Mustang at the World's Fair, creating an entirely new class of automobiles - the 'pony car'."
    },
    {
      year: "1965",
      title: "Shelby Partnership",
      description: "Carroll Shelby begins transforming Mustangs into high-performance racing machines, starting with the GT350."
    },
    {
      year: "1968",
      title: "Bullitt Fame",
      description: "The Mustang GT Fastback stars in the movie 'Bullitt', featuring one of cinema's most famous car chase scenes."
    },
    {
      year: "1969",
      title: "Boss Series",
      description: "Introduction of the Boss 302 and Boss 429, purpose-built for racing and street performance."
    },
    {
      year: "2005",
      title: "Modern Renaissance",
      description: "Fifth-generation Mustang debuts with retro-inspired design, bringing classic styling into the modern era."
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "First Mustang to be sold globally, with independent rear suspension and EcoBoost technology."
    },
    {
      year: "2020",
      title: "Shelby GT500",
      description: "Most powerful street-legal Ford ever, with 760 horsepower supercharged V8 engine."
    },
    {
      year: "2024",
      title: "Seventh Generation",
      description: "Latest evolution continues the legend with advanced technology and uncompromising performance."
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Racing Heritage",
      description: "Over 60 years of motorsports excellence from Trans-Am to NASCAR",
      stats: "500+ Race Wins"
    },
    {
      icon: Users,
      title: "Cultural Impact",
      description: "Featured in over 500 movies and TV shows, becoming an American icon",
      stats: "500+ Film Appearances"
    },
    {
      icon: Zap,
      title: "Performance Legacy",
      description: "Continuous innovation in performance engineering and technology",
      stats: "760 HP Peak Power"
    },
    {
      icon: Calendar,
      title: "Enduring Success",
      description: "Best-selling sports coupe in America for decades",
      stats: "10M+ Units Sold"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-background to-mustang-gray">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-glow">
              The Mustang Legacy
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              For over six decades, the Ford Mustang has embodied the spirit of American automotive excellence. 
              From its revolutionary debut in 1964 to today's cutting-edge performance machines, 
              the Mustang continues to define what it means to be an icon.
            </p>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl font-heading font-bold mb-6 text-gold-glow">
                  Born to Run Wild
                </h2>
                <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                  <p>
                    The Ford Mustang story begins with a vision: to create an affordable sports car that would 
                    capture the hearts of young Americans. When it debuted at the 1964 World's Fair, 
                    the Mustang exceeded all expectations, selling over 400,000 units in its first year.
                  </p>
                  <p>
                    Named after the P-51 Mustang fighter plane, this revolutionary automobile created an entirely 
                    new market segment - the "pony car." With its long hood, short deck proportions and 
                    aggressive stance, the Mustang established a design language that continues to this day.
                  </p>
                  <p>
                    From Carroll Shelby's racing modifications to the legendary Boss series, from the iconic 
                    Bullitt to the modern Shelby GT500, the Mustang has consistently pushed the boundaries 
                    of performance while remaining true to its rebellious spirit.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-mustang-gray rounded-2xl p-8 shadow-glow">
                  <h3 className="text-2xl font-heading font-bold mb-6 text-center text-gold-glow">
                    Mustang by the Numbers
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                      <div className="text-sm text-muted-foreground">Units Sold Worldwide</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">60+</div>
                      <div className="text-sm text-muted-foreground">Years of Excellence</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">7</div>
                      <div className="text-sm text-muted-foreground">Generations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Movie Appearances</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="mustang-card text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-bold mb-3 text-gold-glow">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {achievement.description}
                    </p>
                    <Badge className="bg-gradient-accent text-foreground">
                      {achievement.stats}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 bg-mustang-gray">
          <div className="container mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-16 text-glow">
              Mustang Through the Decades
            </h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full" />
              
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex-1 px-8">
                      <Card className="mustang-card">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <Badge className="bg-primary text-primary-foreground mr-3">
                              {milestone.year}
                            </Badge>
                            <h3 className="text-xl font-heading font-bold text-gold-glow">
                              {milestone.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-gradient-accent rounded-full border-4 border-background shadow-gold" />
                    </div>
                    
                    <div className="flex-1 px-8" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-8 text-glow">
              The Mustang Philosophy
            </h2>
            <div className="max-w-4xl mx-auto space-y-8 text-lg text-foreground/90 leading-relaxed">
              <p>
                The Mustang represents more than just automotive engineering - it embodies the American dream of 
                freedom, performance, and individual expression. Every Mustang is built with the understanding 
                that driving should be an emotional experience, not just transportation.
              </p>
              <p>
                From the naturally aspirated roar of the 5.0L Coyote V8 to the supercharged fury of the 
                Shelby GT500, each Mustang delivers authentic performance that connects driver to machine. 
                This is performance with purpose, engineering with emotion.
              </p>
              <p className="text-xl font-semibold text-primary">
                "The Mustang is America's heartbeat on wheels - a symbol of freedom, 
                performance, and the endless pursuit of automotive perfection."
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;