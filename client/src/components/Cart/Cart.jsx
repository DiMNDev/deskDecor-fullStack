import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../Redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../Hooks/makeRequest";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const getTotal = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  //------------Stripe---------------
  const stripePromise = loadStripe(
    import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      console.log(res);
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //---------------------------------
  return (
    <div className="cart">
      {products.length > 0 ? (
        <div>
          <h1>Products in your cart</h1>
          {products?.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <div className="details">
                <h1>{item.title}</h1>
                <p>{item.description?.substring(0, 100)}</p>
                <div className="price">
                  {item.quantity} x ${item.price}
                </div>
              </div>
              <DeleteOutlineIcon
                className="delete"
                onClick={() => dispatch(removeItem(item.id))}
              />
            </div>
          ))}
          <div className="total">
            <span>SUBTOTAL</span>
            <span>${getTotal()}</span>
          </div>
          <div className="footer">
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>
              Clear cart
            </span>
          </div>
        </div>
      ) : (
        <div className="emptyCart">There is nothing in your cart</div>
      )}
    </div>
  );
};

export default Cart;
