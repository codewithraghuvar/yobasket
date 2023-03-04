import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ product, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.find(item => item.product.id === product.id);
      if (existingItem) {
        if (existingItem.quantity <= quantity) {
          state.splice(state.indexOf(existingItem), 1);
        } else {
          existingItem.quantity -= quantity;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;