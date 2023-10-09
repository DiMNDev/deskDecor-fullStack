import React from "react";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import Categories from "../../components/Categories/Categories";
const Home = () => {
  return (
    <div className="Home">
      <Slider />
      <FeaturedProduct type="featured" />
      <FeaturedProduct type="trending " />
      <Categories />
    </div>
  );
};

export default Home;
