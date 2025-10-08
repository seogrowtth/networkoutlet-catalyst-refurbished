import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyChoose from "@/components/WhyChoose";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <WhyChoose />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
