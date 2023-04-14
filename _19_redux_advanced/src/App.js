import { useEffect, useCallback, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { uiActions } from './store/ui';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const isCartShown = useSelector((state) => state.ui.isCartShown);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const uploadCart = useCallback(
    async (cart) => {
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
    },
    [dispatch],
  );

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    } else {
      uploadCart(cart);
    }
  }, [cart, uploadCart]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
