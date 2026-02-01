import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyAutoFix from "@/components/WhyAutoFix";
import TechStack from "@/components/TechStack";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyAutoFix />
        <TechStack />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
