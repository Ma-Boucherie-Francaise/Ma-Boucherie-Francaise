"use client";
import ProduitsData from "../../data/ProduitsData.json";
import { motion as m } from "motion/react";
import Link from "next/link";
import { useState } from "react";
const ProductsSection = () => {
  const [projectHovered, setProjectHovered] = useState();
  return (
    <>
      <Pictograms setProjectHovered={setProjectHovered} />
      <Texts projectHovered={parseInt(projectHovered)} />
    </>
  );
};

export default ProductsSection;

function Pictograms({ setProjectHovered }) {
  const MouseEnter = (e) => {
    setProjectHovered(e.target.dataset.id);
  };

  const MouseLeave = () => {
    setProjectHovered();
  };

  return (
    <div className="pictoContainer">
      {ProduitsData.map(({ picto, name, href }, i) => {
        return (
          <Link
            href={href}
            key={i}
            data-id={i}
            onMouseEnter={(e) => MouseEnter(e)}
            onMouseLeave={() => MouseLeave()}
            className="picto"
          >
            <div className="image">
              <img src={picto} alt={`image ${name}`} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function Texts({ projectHovered }) {
  const animeText = {
    hide: {
      y: "102%",
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
    show: {
      y: 0,
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
  };

  return (
    <div className="textsContainer">
      {ProduitsData.map(({ name, underName, sentence }, i) => {
        return (
          <m.div
            initial="hide"
            animate={projectHovered === i ? "show" : "hide"}
            key={i}
            className="text"
          >
            <div className="hidden">
              <m.h1 variants={animeText}>{name}</m.h1>
            </div>
            <div className="hidden">
              <m.p variants={animeText}>{underName}</m.p>
            </div>
            <div className="hidden">
              <m.span variants={animeText}>{sentence}</m.span>
            </div>
          </m.div>
        );
      })}
    </div>
  );
}
