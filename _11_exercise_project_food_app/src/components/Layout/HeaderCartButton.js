import { useContext, useEffect, useState } from 'react';

import CartContext from '../../store/cart-context';
import CartIcon from '../UI/icons/CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const cartAmount = items.reduce((currrentNumber, item) => {
    return currrentNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const buttonClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
