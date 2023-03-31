import { useState } from 'react';

import { CartContextProvider } from './store/cart-context';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCart = () => {
    setIsCartShown(true);
  };

  const hideCart = () => {
    setIsCartShown(false);
  };

  console.clear();

  return (
    <CartContextProvider>
      {isCartShown && <Cart onClose={hideCart} />}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
