import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
};

const getCartQuantity = (products) => {
  let quantity = 0;
  products.map((item) => {
    console.log(item);
    console.log(item.title, item.quantity);
    quantity += item.quantity;
  });
  console.log(quantity);
  return quantity;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      //Add the imgURL prefix for fetching
      action.payload.img =
        import.meta.env.VITE_REACT_APP_UPLOAD_URL + action.payload.img;
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      state.totalQuantity = getCartQuantity(state.products);
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      state.totalQuantity = getCartQuantity(state.products);
    },
    resetCart: (state) => {
      state.products = [];
      state.totalQuantity = getCartQuantity(state.products);
    },
  },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
