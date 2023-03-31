import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export const CartContextProvider = ({ children }) => {
  const addItem = (item) => {
    console.log('add item');
  };

  const removeItem = (id) => {
    console.log('remove item');
  };

  return (
    <CartContext.Provider
      value={{
        items: [
          {
            id: 'm1',
            name: 'asdasdsadasdasd',
            description: 'Finest fish and veggies',
            price: 22.99,
            amount: 2,
          },
          {
            id: 'm2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.5,
            amount: 1,
          },
        ],
        totalAmount: 0,
        addItem: addItem,
        removeItem: removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
