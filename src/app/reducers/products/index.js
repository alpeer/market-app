import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '../../data';
import paginationReducer, { paginationState } from './paginationReducer';
import filterSortReducer, { filterSortState } from './filterSortReducer';
import initialReducer from './initialReducer';

const initialState = {
  data: [],
  ...filterSortState,
  ...paginationState,
  gridView: {
    data: [],
    counts: {
      tags: {},
      brands: {}
    }
  },
  status: 'idle'
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
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



