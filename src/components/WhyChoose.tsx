import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Award, Wrench, Clock, ShieldCheck, Truck } from "lucide-react";

const WhyChoose = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Significant Cost Savings",
      description: "Save up to 70% compared to new equipment while getting the same enterprise-grade performance. Our refurbished Cisco Catalyst 9300L switches offer exceptional value without compromising quality or reliability."
    },
    {
      icon: ShieldCheck,
      title: "Rigorous Quality Testing",
      description: "Every switch undergoes comprehensive testing and certification. We verify all ports, validate PoE functionality, test uplinks, and ensure firmware is current. Only equipment meeting strict standards earns our certification."
    },
    {
      icon: Award,
      title: "Full Warranty Coverage",
      description: "All refurbished equipment includes comprehensive warranty protection. We stand behind our products with repair or replacement guarantees, giving you peace of mind for your critical network infrastructure."
    },
    {
      icon: Wrench,
      title: "Expert Technical Support",
      description: "Access our team of certified network engineers for installation assistance, configuration guidance, and troubleshooting. We provide the same level of support you'd expect from purchasing new equipment."
    },
    {
      icon: Clock,
      title: "Fast Deployment",
      description: "Extensive inventory means faster delivery times compared to ordering new equipment. Get your network infrastructure up and running quickly to meet project deadlines and business requirements."
    },
    {
      icon: Truck,
      title: "Environmentally Responsible",
      description: "Choosing refurbished equipment reduces electronic waste and supports sustainability initiatives. Extend the lifecycle of quality hardware while reducing your organization's environmental impact."
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Network Outlet?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to delivering premium refurbished networking equipment that meets the highest standards of quality, reliability, and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
