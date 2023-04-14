import { uiActions } from './ui';
import { cartActions } from './cart';

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
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
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

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://react-http-d10a2-default-rtdb.firebaseio.com/cart.json',
      );

      if (!response.ok) {
        throw new Error('Could not fetch data');
      }

      const responseData = await response.json();

      dispatch(
        cartActions.replaceCart({
          items: responseData.items || [],
          totalQuantity: responseData.totalQuantity,
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Fetching cart data failed.',
        }),
      );
    }
  };
};
