const redux = require('redux');

/**
 * Reducer function always receive 2 arguments: old state and dispatched action.
 * Reducer function always must return a new state object.
 * Same input leads to same output.
 */
const counterReducer = (state = { counter: 0 }, action) => {
  // action.type should be handled here.

  return {
    counter: state.counter + 1,
  };
};

/**
 * Create a store with a unique reducer function.
 * Reducer function will be call a first time here, that's why we set a default state in the reducer function.
 */
const store = redux.createStore(counterReducer);

console.log('state after init', store.getState());

/**
 * Subscriber get called after each state change
 */
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log('state update from subscriber', latestState);
};

/**
 * Register the subscriber
 */
store.subscribe(counterSubscriber);

/**
 * Create and dispatch an action.
 */
store.dispatch({ type: 'increment' });
