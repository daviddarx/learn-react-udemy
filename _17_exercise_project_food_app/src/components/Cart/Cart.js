import { Fragment, useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckoutDisplayed, setIsCheckoutDisplayed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const displayCheckout = () => {
    setIsCheckoutDisplayed(true);
  };

  const hideCheckout = () => {
    setIsCheckoutDisplayed(false);
  };

  const submitOrder = async (userData) => {
    setIsSubmitting(true);

    const response = await fetch(
      'https://react-http-d10a2-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          food: cartCtx.items,
          user: userData,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const responseData = await response.json();

    setDidSubmit(true);
    setIsSubmitting(false);
    cartCtx.emptyCart();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckoutDisplayed && <Checkout onCancel={hideCheckout} onSubmitOrder={submitOrder} />}
      {!isCheckoutDisplayed && (
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={displayCheckout}>
              Order
            </button>
          )}
        </div>
      )}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = <p>Your order was sent. We'll process it soon, thank you!</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
