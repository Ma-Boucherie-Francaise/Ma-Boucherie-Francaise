import ProduitsData from "../assets/ProduitsData.json";

export default function Produits() {
  return (
    <main id="Produits">
      {ProduitsData.map(({ picto, name }, i) => {
        return (
          <div key={i} className="picto">
            <img src={picto} alt={`image ${name}`} />
          </div>
        );
      })}
    </main>
  );
}
