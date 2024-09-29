import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")):[],
  statusTap: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity }); // Push as object
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        // delete state.items[indexProductId];
        state.items = state.items.filter(
          (item) => item.productId !== productId
        );
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    toggleStatusTab(state) {
      if (state.statusTap === false) {
        state.statusTap = true;
      } else {
        state.statusTap = false;
      }
    },
  },
});

export const { addToCart, toggleStatusTab, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
