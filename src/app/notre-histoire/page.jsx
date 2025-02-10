import AboutSection from "@/containers/about-page/AboutSection";
import QualitySection from "@/containers/about-page/QualitySection";

export const metadata = {
  title:
    "Notre Histoire - Ma Boucherie Française — Sublimez vos tables avec ma Boucherie Française.",
  description: "...",
};
export default function Page() {
  return (
    <>
      <main id="Histoire" className="redColor">
        <AboutSection />
        <QualitySection />
      </main>
    </>
  );
}
