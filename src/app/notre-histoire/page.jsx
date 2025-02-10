import AboutSection from "@/containers/about-page/AboutSection";
import QualitySection from "@/containers/about-page/QualitySection";

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
