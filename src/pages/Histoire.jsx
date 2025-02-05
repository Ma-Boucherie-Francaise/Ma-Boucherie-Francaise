import TitlePage from "../components/TitlePage";
import Image1 from "/ImageHistoire1.jpg";
import CharteQualité from "../assets/CharteQualité.json";
import StoryData from "../assets/StoryData.json";

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
  return (
    <section className="FirstSection">
      <h1>Un métier passion</h1>
      <div className="contentContainer">
        <img src={Image1} alt="image histoire1" />
        <div className="textsContainer">
          {StoryData.map(({ undertitle, text }, i) => {
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
  return (
    <section className="SecondSection">
      <div className="title">
        <h1>Charte Qualité</h1>
        <p>nos engagements :</p>
      </div>

      <div className="cardsContainer">
        {CharteQualité.map(({ image, text }, i) => {
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
