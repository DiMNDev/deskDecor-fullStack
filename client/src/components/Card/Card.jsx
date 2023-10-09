import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import { getImageURL } from "../../Hooks/getImageURL";
const Card = ({ product }) => {
  const imgURL = getImageURL(product, "img");
  const img2URL = getImageURL(product, "img2");
  return (
    <Link className="link" to={`/product/${product.id}`}>
      <div className="card">
        <div className="image">
          {product.attributes.isNew ? <span>New!</span> : ""}
          <img
            src={imgURL}
            className="mainImage"
            alt={product.attributes.title}
          />
          <img
            src={img2URL}
            className="altImage"
            alt={product.attributes.title}
          />
        </div>
        <h2>{product.attributes.title}</h2>
        <div className="prices">
          <h3>${product.attributes.oldPrice || "--"}</h3>
          <h3>${product.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
