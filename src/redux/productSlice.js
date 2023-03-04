import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ],
  reducers: {
    addProduct: (state, action) => {
      const { id, name, price } = action.payload;
      state.push({ id, name, price });
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      return state.filter(product => product.id !== id);
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;