import { Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
import Accueil from "./assets/pages/Accueil";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </>
  );
}
