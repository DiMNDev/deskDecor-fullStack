import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./Products.scss";
import List from "../../components/List/List";
import useFetch from "../../Hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const priceSlider = document.getElementById("priceSlider");

  let inputDelay;
  const inputTimer = () => {
    if (inputDelay) {
      clearTimeout(inputDelay);
    }
    inputDelay = setTimeout(() => {
      setMaxPrice(priceSlider.value);
    }, 500);
  };

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  data ? console.log(data) : console.log("loading", loading);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log("SELECTED_SUBS", selectedSubCats);
  const scrollPosition = window.scrollY;
  console.log("scrollY:", scrollPosition);
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <label htmlFor={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={(e) => handleChange(e)}
                />
                {item.attributes.title}
              </label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem"></div>
          <span>10</span>
          <input
            id="priceSlider"
            type="range"
            min={10}
            max={1000}
            onChange={(e) => inputTimer()}
          />
          <span>{maxPrice}</span>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="../../img/category-headerSM.jpg" className="catImg"></img>
        <div className="overlay"></div>
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
