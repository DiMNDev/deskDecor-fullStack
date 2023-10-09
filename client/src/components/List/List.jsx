import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../Hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const fetchURL = `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
    (item) => `&[filters][sub_categories][id][$eq]=${item}`
  )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`;
  console.log("fetchURL:", fetchURL);
  const parsedURL = fetchURL.replace(",", "");
  console.log("parsedURL:", parsedURL);
  const { data, loading, error } = useFetch(parsedURL);
  // console.log("CATID:", catId);
  // console.log("SUBCATS:", subCats);
  console.log("DATA:", data);

  return (
    <div className="list">
      {loading
        ? "Loading.."
        : data?.map((product) => <Card product={product} key={product.id} />)}
    </div>
  );
};

export default List;
