"use client";
import { useState } from "react";
import DecoupeData from "../../data/DecoupeData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion as m } from "motion/react";
import Image from "next/image";

const CuttingSection = () => {
  const [curretImage, setCurrentImage] = useState(0);

  const calculTransform = 100 / DecoupeData.length;

  const IncrementImage = () => {
    setCurrentImage(curretImage + 1);
  };

  const DerementImage = () => {
    setCurrentImage(curretImage - 1);
  };

  const [hovered, setHovered] = useState();

  const ResetHovered = () => {
    setHovered();
  };

  const easeInOutCubic = [0.65, 0, 0.35, 1];

  const animeThumbnailsSection = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.3, ease: "linear" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3, ease: easeInOutCubic },
    },
  };

  const animeThumbnailsImage = {
    initial: {
      opacity: 0,
      y: 15,
    },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.05 * i, ease: easeInOutCubic },
    }),
    exit: {
      opacity: 0,
      y: 0,
      transition: { duration: 0.3, ease: easeInOutCubic },
    },
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
          {DecoupeData.map(({ image, name, thumbnails }, i) => {
            return (
              <div
                key={i}
                className="decoupe"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => ResetHovered()}
              >
                <div className="image">
                  <Image fill src={image} alt={name} />
                  <AnimatePresence>
                    {hovered === i && (
                      <m.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={animeThumbnailsSection}
                        className="thumbnailsContainer"
                      >
                        <div className="imagesContainer">
                          {thumbnails.map((thumbnail, i) => {
                            return (
                              <m.img
                                custom={i}
                                variants={animeThumbnailsImage}
                                key={i}
                                src={thumbnail}
                                alt={`image ${i + 1}`}
                              />
                            );
                          })}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CuttingSection;
