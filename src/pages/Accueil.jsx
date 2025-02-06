import TitlePage from "../components/TitlePage";
import ImageAccueil from "/ImageAccueil.jpg";
import Pattern4Rouge from "/PatternRouge4.png";
import DecoupeData from "../assets/DecoupeData.json";
import BlockData from "../assets/BlockData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Accueil() {
  return (
    <>
      <TitlePage title="" />
      <main id="Accueil">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
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

  const calculTransform = 100 / DecoupeData.length;

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
                curretImage == DecoupeData.length - 1 ? "none" : "all",
              opacity: curretImage == DecoupeData.length - 1 ? 0.3 : 1,
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
          style={{
            transform: `translateX(-${calculTransform * curretImage}%)`,
          }}
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

function ThirdSection() {
  return (
    <section className="ThirdSection">
      <div className="blocksContainer">
        {BlockData.map(({ name, paragraph, href, button }, i) => {
          return (
            <div key={i} className="block">
              <h2>{name}</h2>
              <p>{paragraph}</p>
              <Link className="btn" to={href}>
                {button}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
