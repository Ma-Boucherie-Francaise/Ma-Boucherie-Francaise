import TitlePage from "../components/TitlePage";
import Image1 from "/ImageHistoire1.jpg";

export default function Histoire() {
  return (
    <>
      <TitlePage title="Histoire —" />
      <main id="Histoire" className="redColor">
        <FirstSection />
      </main>
    </>
  );
}

function FirstSection() {
  const texts = [
    {
      undertitle: "Un parcours ambitieux",
      text: "Nous visons à célébrer la gastronomie française en proposant une large gamme de produits artisanaux de qualité exceptionnelle, tout en garantissant des prix accessibles. Nous combinons excellence, diversité, et savoir-faire artisanal avec une expérience d’achat en ligne fluide, rapide et sécurisée. Offrir une livraison directe de produits frais ou raffinés exige une logistique rigoureuse, tandis que la promesse d’une expérience gustative unique engage à dépasser les attentes des clients en mariant qualité, tradition et modernité.",
    },
    {
      undertitle: "Une idée novatrice",
      text: "Nous réinventons la manière d’accéder à la gastronomie française en alliant tradition et modernité. En rendant des produits artisanaux et de qualité supérieure disponibles en ligne, en  démocratisant un savoir-faire culinaire souvent perçu comme élitiste. Nous répondons aux nouvelles attentes des consommateurs, en proposant une expérience digitale fluide et personnalisée, tout en intégrant des exigences de traçabilité, de fraîcheur et de durabilité. En outre, le modèle mêle la simplicité d’un panier en ligne à une offre gourmande et raffinée, livrée directement à domicile, ce qui redéfinit la notion de commerce alimentaire haut de gamme dans un contexte numérique.",
    },
  ];

  return (
    <section className="FirstSection">
      <h1>Un métier passion</h1>
      <div className="contentContainer">
        <img src={Image1} alt="image histoire1" />
        <div className="textsContainer">
          {texts.map(({ undertitle, text }, i) => {
            return (
              <div key={i} className="paragraph">
                <p>{undertitle}</p>
                <span>{text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
