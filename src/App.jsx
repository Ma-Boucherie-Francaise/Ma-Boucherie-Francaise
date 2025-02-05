import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import Histoire from "./pages/Histoire";
import Produits from "./pages/Produits";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/histoire" element={<Histoire />} />
        <Route path="/produits" element={<Produits />} />
      </Routes>
    </>
  );
}
