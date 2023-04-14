import { useSelector, useDispatch } from 'react-redux';

import { uiActions } from '../../store/ui';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCart = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  );
};

export default CartButton;
