import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../types/Product';

type State = {
  products: Product[] | null;
  isLoading: boolean;
};

const initialState: State = {
  products: null,
  isLoading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addNewProduct: (store, action) => {
      store.products = action.payload;
    },
  },
});

export default productSlice.reducer;
export const {addNewProduct} = productSlice.actions;
