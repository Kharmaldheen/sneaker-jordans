import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // Adding a new item to the cart--payload = new item
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      //payload is id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseItemQuantity(state, action) {
      //payload is the Id of the item we want to increased
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity += 1;
      item.totalPrice = item.price * item.quantity;
    },

    decreaseItemQuantity(state, action) {
      //payload is the Id of the item we want to decreased
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity -= 1;
      item.totalPrice = item.price * item.quantity;

      //if item quantity is equal to zero while decreasing its quantity, delete the item;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },

    updateItemSize(state, action) {
      //action.payload.size is the updated size
      //action.payload.id is the id of the item that needs to be updated

      const item = state.cart.find((item) => item.id == action.payload.id);

      item.size = action.payload.size;
    },

    clearCart(state) {
      state.cart = [];
    },

    addToCartFromWishlist(state, action) {
      //action.payload is the wishlists

      action.payload.forEach((wishlistItem) => {
        const WishlistItemInCart = state.cart.find(
          (item) => item.id === wishlistItem.id
        );

        if (!WishlistItemInCart) {
          state.cart.push(wishlistItem);
        }

        if (WishlistItemInCart) {
          if (WishlistItemInCart.size === wishlistItem.size) {
            WishlistItemInCart.quantity += wishlistItem.quantity;

            WishlistItemInCart.totalPrice =
              WishlistItemInCart.price * WishlistItemInCart.quantity;
          } else {
            state.cart.push(wishlistItem);
          }
        }
      });
    },

    addIndividualItemToCartFromWishlist(state, action) {
      const WishlistItemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (!WishlistItemInCart) {
        state.cart.push(action.payload);
      }

      if (WishlistItemInCart) {
        if (WishlistItemInCart.size === action.payload.size) {
          WishlistItemInCart.quantity += action.payload.quantity;

          WishlistItemInCart.totalPrice =
            WishlistItemInCart.price * WishlistItemInCart.quantity;
        } else {
          state.cart.push(action.payload);
        }
      }
    },
  },
});

export const {
  addItem,
  deleteItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  clearCart,
  addToCartFromWishlist,
  addIndividualItemToCartFromWishlist,
  updateItemSize,
} = cartSlice.actions;

const selectCart = (store) => store.cart?.cart;

export const getTotalCartQuantity = createSelector(selectCart, (cart) =>
  cart?.reduce((acc, cur) => cur.quantity + acc, 0)
);

export const getTotalProductPrice = createSelector(selectCart, (cart) =>
  cart?.reduce((acc, cur) => cur.totalPrice + acc, 0)
);

export function getCurrentQuantityById(id) {
  return function (store) {
    return store.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
  };
}

export const cartReducer = cartSlice.reducer;
