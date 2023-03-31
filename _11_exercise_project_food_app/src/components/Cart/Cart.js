import Modal from '../Layout/Modal';

import classes from './Cart.module.css';

const Cart = ({ onClose }) => {
  const cartItems = [
    {
      id: 'm1',
      name: 'Sushi',
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
  ];

  return (
    <Modal onClose={onClose}>
      <ul className={classes['cart-items']}>
        {cartItems.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35.63</span>
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
