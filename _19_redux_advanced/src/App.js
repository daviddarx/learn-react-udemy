import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isCartShown = useSelector((state) => state.ui.isCartShown);
  const cart = useSelector((state) => state.cart);

  const uploadCart = useCallback(async (cart) => {
    await fetch('https://react-http-d10a2-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT' /* override existing data */,
      body: JSON.stringify(cart),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }, []);

  useEffect(() => {
    if (cart.totalQuantity !== 0) {
      uploadCart(cart);
    }
  }, [cart, uploadCart]);

  return (
    <Layout>
      {isCartShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
