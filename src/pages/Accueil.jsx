import TitlePage from "../components/TitlePage";
import ImageAccueil from "/ImageAccueil.jpg";
import Pattern4Rouge from "/PatternRouge4.png";

export default function Accueil() {
  return (
    <>
      <TitlePage title="" />
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
      <div className="title">
        <h1>Le goût de l'excellence,</h1>
        <p>directement chez vous.</p>
      </div>
      <a href="#" className="button">
        Découvrez nos viandes
      </a>
      <div className="patternContainer">
        <img src={Pattern4Rouge} alt="patternRouge" />
        <img src={Pattern4Rouge} alt="patternRouge" />
      </div>
    </section>
  );
}

function SecondSection() {
  return (
    <section className="SecondSection">
      <h1>Nos Découpes</h1>
      <div className="carrousel"></div>
    </section>
  );
}
