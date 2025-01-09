import React from "react";
import Hero from "../components/hero/Hero";
import Popular from "../components/popular/popular";
import Offers from "../components/Offers/Offers";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Reviews from "../components/reviews/Reviews";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
      <Reviews />
    </div>
  );
};

export default Shop;
