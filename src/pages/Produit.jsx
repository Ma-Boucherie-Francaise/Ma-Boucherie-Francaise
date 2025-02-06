import { useParams } from "react-router-dom";
import TitlePage from "../components/TitlePage";
import ProduitsData from "../assets/ProduitsData.json";

export default function Produit() {
  const { categorie } = useParams();

  const filterCategorys = ProduitsData.find(
    (category) => category.href === categorie
  );

  return (
    <>
      <TitlePage />
      <main>
        <h1>{filterCategorys.name}</h1>
      </main>
    </>
  );
}
