import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import CartIcon from '../UI/icons/CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const cartAmount = cartCtx.items.reduce((currrentNumber, item) => {
    return currrentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
