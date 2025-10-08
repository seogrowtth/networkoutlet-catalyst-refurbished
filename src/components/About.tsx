import infrastructureImage from "@/assets/infrastructure.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Network Outlet
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Network Outlet is a leading provider of high-quality refurbished Cisco networking equipment in the USA. With over 15 years of experience in the industry, we specialize in delivering enterprise-grade solutions that combine exceptional performance with unbeatable value.
              </p>
              <p>
                Our mission is to make premium networking infrastructure accessible to businesses of all sizes. We understand that modern organizations require robust, reliable networks to support their operations, but budget constraints can make new equipment purchases challenging.
              </p>
              <p>
                Every Cisco Catalyst switch we offer has been carefully inspected, tested, and certified by our team of experienced network engineers. We maintain strict quality standards to ensure that our refurbished equipment performs at the same level as new hardware.
              </p>
              <p>
                The Cisco Catalyst 9300L-48UXG-4X switch represents the pinnacle of access layer switching technology. With support for Multi-Gigabit Ethernet, advanced security features, and seamless integration with Cisco DNA Center, these switches provide the foundation for modern intent-based networks.
              </p>
              <p>
                Whether you're upgrading your existing infrastructure, building a new network, or expanding to accommodate growth, our refurbished Cisco Catalyst 9300L switches offer the perfect balance of capability and cost-effectiveness. Our extensive inventory ensures quick delivery, and our technical support team is always ready to assist with your deployment.
              </p>
            </div>
          </div>
          <div>
            <img 
              src={infrastructureImage} 
              alt="Modern enterprise network infrastructure" 
              className="rounded-lg shadow-xl border border-border"
            />
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Satisfied Customers</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Devices Deployed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
