import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist(state, action) {
      //Adding a new item to the wishlist--payload = new item
      state.wishlist.push(action.payload);
    },

    deleteItemFromWishlist(state, action) {
      //payload is id
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },

    increaseWishlistItemQuantity(state, action) {
      //payload is the Id of the item we want to increased
      const item = state.wishlist.find((item) => item.id === action.payload);
      item.quantity += 1;

      item.totalPrice = item.price * item.quantity;
    },

    decreaseWishlistItemQuantity(state, action) {
      //payload is the Id of the item we want to decreased
      const item = state.wishlist.find((item) => item.id === action.payload);

      item.quantity -= 1;
      item.totalPrice = item.price * item.quantity;

      //if item quantity is equal to zero while decreasing its quantity, delete the item;
      if (item.quantity === 0)
        wishlistSlice.caseReducers.deleteItem(state, action);
    },

    updateWishlistItemSize(state, action) {
      //action.payload.size is the updated size
      //action.payload.id is the id of the item that needs to be updated

      const item = state.wishlist.find((item) => item.id == action.payload.id);

      item.size = action.payload.size;
    },

    clearWishlist(state) {
      state.wishlist = [];
    },
  },
});

export const {
  addItemToWishlist,
  deleteItemFromWishlist,
  decreaseWishlistItemQuantity,
  increaseWishlistItemQuantity,
  clearWishlist,
  updateWishlistItemSize,
} = wishlistSlice.actions;

const selectWishlist = (store) => store.wishlist.wishlist;

export const getTotalWishlistQuantity = createSelector(selectWishlist, (cart) =>
  cart.reduce((acc, cur) => cur.quantity + acc, 0)
);

export const getTotalWishlistPrice = createSelector(selectWishlist, (cart) =>
  cart.reduce((acc, cur) => cur.totalPrice + acc, 0)
);

export function getCurrentQuantityByIdInWishlist(id) {
  return function (store) {
    return (
      store.wishlist.wishlist.find((item) => item.id === id)?.quantity ?? 0
    );
  };
}

export const wishlistReducer = wishlistSlice.reducer;
