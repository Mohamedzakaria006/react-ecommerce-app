import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../src/components/Cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
