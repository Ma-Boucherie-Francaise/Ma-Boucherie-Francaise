import TitlePage from "../components/TitlePage";
import Image1 from "/ImageHistoire1.jpg";

export default function Histoire() {
  return (
    <>
      <TitlePage title="Histoire —" />
      <main id="Histoire">
        <FirstSection />
      </main>
    </>
  );
}

function FirstSection() {
  return (
    <section className="FirstSection">
      <h1>Un métier passion</h1>
      <div className="contentContainer">
        <img src={Image1} alt="image histoire1" />
        <div className="text"></div>
      </div>
    </section>
  );
}
