import TitlePage from "../components/TitlePage";

export default function Accueil() {
  return (
    <>
      <TitlePage title="Accueil" />
      <main id="Accueil">
        <FirstSection />
      </main>
    </>
  );
}

function FirstSection() {
  return <div className="FirstSection">Home</div>;
}
