import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '../../data';
import paginationReducer, { paginationState } from './paginationReducer';
import filterSortReducer, { filterSortState } from './filterSortReducer';
import initialReducer from './initialReducer';

const initialState = {
  data: [],   // full items.json data
  ...filterSortState,
  ...paginationState,
  gridView: {
    data: [],  // at gridView.data we only store id array of sorted data for performance
    counts: {
      tags: {},
      brands: {}
    }
  },
  status: 'idle'
};
export const fetchProducts = createAsyncThunk(
  'products/fetch',
  API.getProducts
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filter: filterSortReducer,
    pageChanged: paginationReducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, initialReducer);
  },
});

export default productsSlice.reducer;



