import { Button } from "@/components/ui/button";
import { ShieldCheck, Award, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Enterprise network infrastructure" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Refurbished Cisco Catalyst 9300L-48UXG-4X Switches
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Discover enterprise-grade networking solutions at a fraction of the cost. Our certified refurbished Cisco Catalyst switches deliver unmatched performance and reliability.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="bg-card p-6 rounded-lg border border-border shadow-md">
              <div className="flex items-center justify-center mb-3">
                <DollarSign className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">70%</div>
              <div className="text-sm text-muted-foreground">Cost Savings</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-md">
              <div className="flex items-center justify-center mb-3">
                <ShieldCheck className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Quality Tested</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-md">
              <div className="flex items-center justify-center mb-3">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            onClick={scrollToContact}
          >
            Get a Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
