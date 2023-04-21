import { useState, useEffect } from 'react';

/**
 * Data is outside of the useStore hook so that
 * it is the same for all components.
 */
let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);

    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    /**
     * Each component using this hooks will create a new
     * setState function, and we save all these functions
     * in our global directory.
     */
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((listener) => listener !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initalState) => {
  if (initalState) {
    globalState = { ...globalState, ...initalState };
    actions = { ...actions, ...userActions };
  }
};
