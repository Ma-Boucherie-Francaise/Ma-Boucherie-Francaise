import HeroSection from "@/containers/home-page/HeroSection";
import CuttingSection from "@/containers/home-page/CuttingSection";
import ShippingSection from "@/containers/home-page/ShippingSection";

export const metadata = {
  title:
    "Accueil - Ma Boucherie Française — Sublimez vos tables avec ma Boucherie Française.",
  description: "...",
};

export default function Home() {
  return (
    <main id="Accueil">
      <HeroSection />
      <CuttingSection />
      <ShippingSection />
    </main>
  );
}
