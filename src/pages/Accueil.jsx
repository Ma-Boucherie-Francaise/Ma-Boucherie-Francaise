import TitlePage from "../components/TitlePage";
import ImageAccueil from "/ImageAccueil.jpg";
import Pattern4Rouge from "/PatternRouge4.png";
import DecoupeData from "../assets/DecoupeData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Accueil() {
  return (
    <>
      <TitlePage title="" />
      <main id="Accueil">
        <FirstSection />
        <SecondSection />
      </main>
    </>
  );
}

function FirstSection() {
  return (
    <section className="FirstSection">
      <div className="image">
        <img src={ImageAccueil} alt="image accueil" />
      </div>
      <div className="title">
        <h1>Le goût de l'excellence,</h1>
        <p>directement chez vous.</p>
      </div>
      <a href="#" className="button">
        Découvrez nos viandes
      </a>
      <div className="patternContainer">
        <img src={Pattern4Rouge} alt="patternRouge" />
        <img src={Pattern4Rouge} alt="patternRouge" />
      </div>
    </section>
  );
}

function SecondSection() {
  const [curretImage, setCurrentImage] = useState(0);

  const imageWidth = 450;

  const imageGap = 10;

  const imageOnScreen = 2;

  const calculTransform = (-imageWidth - imageGap) * curretImage;

  const IncrementImage = () => {
    setCurrentImage(curretImage + 1);
  };

  const DerementImage = () => {
    setCurrentImage(curretImage - 1);
  };

  return (
    <section className="SecondSection">
      <div className="topSection">
        <h1>Nos Découpes</h1>

        <div className="arrowContainer">
          <div
            style={{
              pointerEvents: curretImage == 0 ? "none" : "all",
              opacity: curretImage == 0 ? 0.3 : 1,
            }}
            onClick={() => DerementImage()}
            className="arrowLeft"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            style={{
              pointerEvents:
                curretImage == DecoupeData.length - imageOnScreen
                  ? "none"
                  : "all",
              opacity:
                curretImage == DecoupeData.length - imageOnScreen ? 0.3 : 1,
            }}
            onClick={() => IncrementImage()}
            className="arrowRight"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
      <div className="carrousel">
        <div
          style={{ transform: `translateX(${calculTransform}px)` }}
          className="decoupesContainer"
        >
          {DecoupeData.map(({ image, name }, i) => {
            return (
              <div key={i} className="decoupe">
                <div className="image">
                  <img src={image} alt={name} />
                </div>
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
