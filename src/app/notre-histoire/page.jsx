import CharteQualité from "../../assets/CharteQualité.json";
import StoryData from "../../assets/StoryData.json";
import Image from "next/image";

export default function Page() {
  return (
    <>
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
        <Image
          src={"/ImageHistoire1.jpg"}
          alt="image histoire1"
          width={5550}
          height={4523}
        />
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
