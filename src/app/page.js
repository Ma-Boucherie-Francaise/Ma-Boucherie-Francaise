import HeroSection from "@/containers/home-page/HeroSection";
import CuttingSection from "@/containers/home-page/CuttingSection";
import ShippingSection from "@/containers/home-page/ShippingSection";

export default function Home() {
  return (
    <main id="Accueil">
      <HeroSection />
      <CuttingSection />
      <ShippingSection />
    </main>
  );
}
