import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isCartShown: false,
  },
  reducers: {
    showCart(state) {
      state.isCartShown = true;
    },
    hideCart(state) {
      state.isCartShown = false;
    },
    toggleCart(state) {
      state.isCartShown = !state.isCartShown;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
