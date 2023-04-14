import { createSlice } from '@reduxjs/toolkit';

import { uiActions } from './ui';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }

      state.totalQuantity++;
    },
    removeItem(state, action) {
      const itemId = action.payload;

      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }

      state.totalQuantity--;
    },
  },
});

/**
 * Custom action-creators with thunk.
 * A thunk is a function that delays an action until later.
 * An action creator function that does not return the action itself, but
 * another function which eventually return the action.
 */
export const sendCartData = (cart) => {
  /**
   * Return the function.
   * Redux-Toolkit provide us the dispatch function in the args.
   */
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: '',
        title: 'Updating database',
        message: 'Updating database...',
      }),
    );

    try {
      const response = await fetch(
        'https://react-http-d10a2-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT' /* override existing data */,
          body: JSON.stringify(cart),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sending cart data succeed.',
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Sending cart data failed.',
        }),
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
