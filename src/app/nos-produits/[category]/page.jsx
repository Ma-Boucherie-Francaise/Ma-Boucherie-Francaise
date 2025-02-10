"use client";
import ProduitsData from "../../../assets/ProduitsData.json";
import { useParams } from "next/navigation";

export default function Page() {
  const { category } = useParams();

  const filterCategories = ProduitsData.find(
    (cat) => cat.href === `produits/${category}`
  );

  return (
    <>
      <main id="Produit">
        <h1>{filterCategories.name}</h1>
      </main>
    </>
  );
}
