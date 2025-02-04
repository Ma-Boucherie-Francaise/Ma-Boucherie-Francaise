import { Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
import Accueil from "./assets/pages/Accueil";
import Histoire from "./assets/pages/Histoire";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/histoire" element={<Histoire />} />
      </Routes>
    </>
  );
}
