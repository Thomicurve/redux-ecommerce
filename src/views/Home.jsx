import React from "react";
import ParallaxHomeBanner from "../components/ParrallaxHomeBanner";
import ProductsContainer from "../components/ProductsContainer";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section>
      <ParallaxHomeBanner />
      <ProductsContainer />
      <Footer />
    </section>
  );
};

export default Home;
