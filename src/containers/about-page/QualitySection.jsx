import CharteQualité from "../../data/CharteQualité.json";
const QualitySection = () => {
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
};

export default QualitySection;
