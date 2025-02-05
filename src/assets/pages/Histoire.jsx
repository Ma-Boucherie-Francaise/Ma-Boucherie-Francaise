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
  return <section className="SecondSection">Section 2</section>;
}
