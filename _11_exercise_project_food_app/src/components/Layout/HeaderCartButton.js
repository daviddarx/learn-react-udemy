import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import CartIcon from '../UI/icons/CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  return (
    <button className={classes.button} onClick={onClick}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{cartCtx.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
