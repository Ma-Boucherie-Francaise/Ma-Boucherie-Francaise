import TitlePage from "../components/TitlePage";
import ImageAccueil from "/ImageAccueil.jpg";

export default function Accueil() {
  return (
    <>
      <TitlePage title="Accueil" />
      <main id="Accueil">
        <FirstSection />
      </main>
    </>
  );
}

function FirstSection() {
  return (
    <section className="FirstSection">
      <div className="image">
        <img src={ImageAccueil} alt="image accueil" />
      </div>
    </section>
  );
}
