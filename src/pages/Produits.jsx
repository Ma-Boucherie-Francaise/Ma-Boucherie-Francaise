import ProduitsData from "../assets/ProduitsData.json";
import TitlePage from "../components/TitlePage";

export default function Produits() {
  return (
    <>
      <TitlePage title="Produits —" />
      <main id="Produits">
        <Pictograms />
        <Texts />
      </main>
    </>
  );
}

function Pictograms() {
  return (
    <div className="pictoContainer">
      {ProduitsData.map(({ picto, name }, i) => {
        return (
          <div key={i} className="picto">
            <div className="image">
              <img src={picto} alt={`image ${name}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Texts() {
  return (
    <div className="textsContainer">
      {ProduitsData.map(({ name, underName, sentence }, i) => {
        return (
          <div key={i} className="text">
            <div className="hidden">
              <h1>{name}</h1>
            </div>
            <div className="hidden">
              <p>{underName}</p>
            </div>
            <div className="hidden">
              <span>{sentence}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
