import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import PriceSection from "@/components/PriceSection";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background dark">
      <Hero />
      <Benefits />
      <PriceSection />
      <Footer />
    </div>
  );
}