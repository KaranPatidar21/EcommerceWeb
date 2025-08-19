import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    singleProduct: null,
    categories: [],
    categoryProducts: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload || [];
    },
    setSingleProduct(state, action) {
      state.singleProduct = action.payload || null;
    },
    setCategories(state, action) {
      state.categories = action.payload || [];
    },
    setCategoryProducts(state, action) {
      state.categoryProducts = action.payload || [];
    },
  },
});

export const { setProducts, setSingleProduct, setCategories, setCategoryProducts } = productsSlice.actions;
export default productsSlice.reducer;
