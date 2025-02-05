import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import Histoire from "./pages/Histoire";
import Produits from "./pages/Produits";
import { useEffect } from "react";

export default function App() {
  const { pathname } = useLocation();

  const resetScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    resetScroll();
  }, [pathname]);

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
