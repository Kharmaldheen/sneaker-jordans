import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/Cart/cartSlice";
import { wishlistReducer } from "./features/Wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
