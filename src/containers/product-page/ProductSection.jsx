"use client";
import React from "react";
import ProduitsData from "../../data/ProduitsData.json";
import { useParams } from "next/navigation";

const ProductSection = () => {
  const { category } = useParams();

  const filterCategories = ProduitsData.find(
    (cat) => cat.href === `nos-produits/${category}`
  );
  return (
    <>
      <h1>{filterCategories.name}</h1>
    </>
  );
};

export default ProductSection;
