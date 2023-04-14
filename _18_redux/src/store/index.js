import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  shown: true,
};

/**
 * Prepare a slice of our global object state.
 * Group logical states together (login, counter, theme, etc).
 * Could be created in separate files.
 */
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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

const authInitialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

/**
 * Redux toolkit create the actions for us (ready-to-use methods)
 */
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
