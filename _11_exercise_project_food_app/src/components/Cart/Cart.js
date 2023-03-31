import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../Layout/Modal';

import classes from './Cart.module.css';

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal onClose={onClose}>
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        <button className={classes['button']} onClick={onClose}>
          Order
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
