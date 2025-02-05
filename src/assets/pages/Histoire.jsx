import TitlePage from "../components/TitlePage";
import Image1 from "/ImageHistoire1.jpg";
import PictoCircuit from "/PictoCircuitCourt.svg";
import PictoFraicheur from "/PictoFraicheur.svg";
import PictoSavoirFaire from "/PictoSavoirFaire.svg";
import PictoEleveurs from "/PictoEleveurs.svg";

export default function Histoire() {
  return (
    <>
      <TitlePage title="Histoire —" />
      <main id="Histoire" className="redColor">
        <FirstSection />
        <SecondSection />
      </main>
    </>
  );
}

function FirstSection() {
  const texts = [
    {
      undertitle: "Description entreprise",
      text: "Maboucheriefrançaise.com, votre boucherie traditionnelle vous propose de découvrir des viandes, charcuterie et fromage de pays en direct de l'élevage.",
    },
    {
      undertitle: "Histoire de la maison",
      text: "Amoureuse des traditions et du savoir-faire français, la maison décide de vouloir rendre dynamique l'héritage artisanal légué en apprentissage. S’engageant a partagé les valeurs au cœur de la tradition bouchère française tout en permettant son accessibilité en garantissant la qualité de ses produits.",
    },
    {
      undertitle: "Service proposé",
      text: "Nous nous engageons à apporter tout le soin et la diligence nécessaire pour vous satisfaire. Pour chaque produit, la maison propose des options de découpe, de conditionnement et de grammage tout en garantissant une qualité de service conforme aux normes alimentaires.",
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

function SecondSection() {
  const cards = [
    {
      image: PictoEleveurs,
      text: "Nous garantissons la provenance de nos viandes uniquement française et nous fournissons la traçabilité de tous nos produits. (100% de nos produits sont porteurs des logos viande de France*)",
    },
    {
      image: PictoCircuit,
      text: "LE RESPECT DU BIEN ÊTRE ANIMAL : l’élevage à taille humaine alimentation saine : Pour les bovins constituée d'herbe, pâturée ou en fourrage complétée avec des céréales. Pour les porcs, l'alimentation EST composée de céréales, oléoprotéagineux, vitamines et minéraux.des logements adapté.",
    },
    {
      image: PictoFraicheur,
      text: "La mise en place d’information de traçabilité et information nutritionnelle claire, lisible et facile à comprendre pour tous.",
    },
    {
      image: PictoSavoirFaire,
      text: "Fort d’un apprentissage rigoureux et de plusieurs années d’expérience, notre équipe est composée de passionnés maîtrisant le savoir-faire artisanal qui allie précision, respect du produit et amour du métier. Chaque pièce est travaillée avec soin, dans la pure tradition bouchère, pour garantir à nos clients une qualité irréprochable et un goût authentique.",
    },
  ];

  return (
    <section className="SecondSection">
      <div className="title">
        <h1>Charte Qualité</h1>
        <p>nos engagements :</p>
      </div>

      <div className="cardsContainer">
        {cards.map(({ image, text }, i) => {
          return (
            <div key={i} className="card">
              <div className="image">
                <img src={image} alt={`Picto ${i + 1}`} />
              </div>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
