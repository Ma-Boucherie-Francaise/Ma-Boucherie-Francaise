import ProduitsData from "../assets/ProduitsData.json";
import TitlePage from "../components/TitlePage";

export default function Produits() {
  return (
    <>
      <TitlePage title="Produits —" />
      <main id="Produits">
        <div className="pictoContainer">
          {ProduitsData.map(({ picto, name }, i) => {
            return (
              <div key={i} className="picto">
                <img src={picto} alt={`image ${name}`} />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
