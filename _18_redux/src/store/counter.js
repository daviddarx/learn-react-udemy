import { createSlice } from '@reduxjs/toolkit';

/**
 * Prepare a slice of our global object state.
 * Group logical states together (login, counter, theme, etc).
 * Could be created in separate files.
 */
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
    shown: true,
  },
  reducers: {
    increment(state) {
      /**
       * Here it's allowed to updated the state.
       * The new full state is created in background by redux-toolkit
       */
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toogle(state) {
      state.shown = !state.shown;
    },
  },
});

/**
 * Redux toolkit create the actions for us (ready-to-use methods)
 */
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
