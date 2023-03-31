import React, { useReducer } from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  if (action.type === 'ADD') {
    let updatedItems, updatedTotalAmount;

    const currentItems = [...prevState.items];

    const existingItem = currentItems.find((item) => {
      return item.id === action.item.id;
    });

    if (existingItem) {
      existingItem.amount += action.item.amount;

      updatedItems = currentItems;
      updatedTotalAmount = updatedItems.reduce((prevAmount, item) => {
        return prevAmount + item.price * item.amount;
      }, 0);
    } else {
      updatedItems = currentItems.concat(action.item);
      updatedTotalAmount = prevState.totalAmount + action.item.price * action.item.amount;
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === 'REMOVE') {
    return prevState;
  }

  return defaultCartState;
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItem = (item) => {
    dispatchCart({
      type: 'ADD',
      item: item,
    });
  };

  const removeItem = (id) => {
    dispatchCart({
      type: 'REMOVE',
      id: id,
    });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItem,
        removeItem: removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
