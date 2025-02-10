import ProductSection from "@/containers/product-page/ProductSection";
import ProduitsData from "../../../data/ProduitsData.json";
export async function generateMetadata({ params, searchParams }, parent) {
  const category = (await params).category;

  const filterCategories = ProduitsData.find(
    (cat) => cat.href === `nos-produits/${category}`
  );

  return {
    title: `${filterCategories.name} - Ma Boucherie Française — Sublimez vos tables avec ma Boucherie Française.`,
  };
}

export default function Page() {
  return (
    <main id="Produit">
      <ProductSection />
    </main>
  );
}
