import { createStore } from 'redux';

const initialState = {
  counter: 0,
  shown: true,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      shown: state.shown,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      shown: state.shown,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      shown: state.shown,
    };
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      shown: !state.shown,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
