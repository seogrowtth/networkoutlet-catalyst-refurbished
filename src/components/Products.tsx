import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Zap, Shield, CheckCircle } from "lucide-react";
import switchImage from "@/assets/switch-closeup.jpg";

const Products = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Cisco Catalyst 9300L-48UXG-4X Switches
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The industry's leading stackable access switch, forming the foundation of intent-based networks. Perfect for bandwidth-intensive environments with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={switchImage} 
              alt="Cisco Catalyst switch ports closeup" 
              className="rounded-lg shadow-xl border border-border"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Network className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">48 PoE+ Multi-Gigabit Ports</h3>
                <p className="text-muted-foreground">
                  Features 48 PoE+ ports supporting 1G/2.5G/5G Multi-Gigabit Ethernet, ideal for high-density Wi-Fi 6/6E deployments, IP telephony, and IoT devices.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Four 10G SFP+ Uplinks</h3>
                <p className="text-muted-foreground">
                  Built-in 10G SFP+ uplinks provide high-speed connectivity to core infrastructure, ensuring seamless data flow across your enterprise network.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Advanced Security Features</h3>
                <p className="text-muted-foreground">
                  Includes MACsec encryption, TrustSec segmentation, and encrypted traffic analytics for comprehensive network security and threat detection.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-card border-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Technical Specifications</CardTitle>
            <CardDescription>Complete details of the Cisco Catalyst C9300L-48UXG-4X-A</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Model:</span>
                    <span className="text-muted-foreground ml-2">C9300L-48UXG-4X-A</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Ports:</span>
                    <span className="text-muted-foreground ml-2">48x Multi-Gigabit PoE+ + 4x 10G SFP+</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Power Budget:</span>
                    <span className="text-muted-foreground ml-2">1125W PoE+ budget</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Switching Capacity:</span>
                    <span className="text-muted-foreground ml-2">440 Gbps</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Software:</span>
                    <span className="text-muted-foreground ml-2">Network Advantage License</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Stack Bandwidth:</span>
                    <span className="text-muted-foreground ml-2">480 Gbps StackWise-480</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Redundancy:</span>
                    <span className="text-muted-foreground ml-2">Dual power supply support</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Management:</span>
                    <span className="text-muted-foreground ml-2">Cisco DNA Center, CLI, Web UI</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Products;
