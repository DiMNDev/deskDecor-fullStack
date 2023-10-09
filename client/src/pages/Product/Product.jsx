import React, { useEffect, useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { getImageURL } from "../../Hooks/getImageURL";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log("DATA:", data);
  let images;
  data
    ? (images = [getImageURL(data, "img"), getImageURL(data, "img2")])
    : (images = []);
  console.log(images);
  return (
    <div className="product">
      {error ? (
        "Something done did messed up"
      ) : loading ? (
        "Loading..."
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img src={images[0]} alt="" onClick={(e) => setSelected(0)} />

              <img src={images[1]} alt="" onClick={(e) => setSelected(1)} />
            </div>
            <div className="mainImage">
              <img src={images[selected]} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes.title}</h1>
            <span className="price">${data?.attributes.price}</span>
            <p>{data?.attributes.description}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    description: data.attributes.description,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="link">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Desk Outlet</span>
              <span>Product Type: Puzzle</span>
              <span>Tag: Puzzle, Desk, Toy</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
