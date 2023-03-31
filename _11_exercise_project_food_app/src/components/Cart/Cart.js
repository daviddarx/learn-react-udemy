import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Modal from '../Layout/Modal';

import classes from './Cart.module.css';

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const removeItem = (id) => {
    cartCtx.removeItem(id);
  };

  const addItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 }); // with this interface, we can only add one at a time
  };

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClose={onClose}>
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onRemove={removeItem.bind(null, item.id)} /* BIND DATA! */
              onAdd={addItem.bind(null, item)}
            />
          );
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes['button']} onClick={onClose}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
