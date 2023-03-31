import CartIcon from '../UI/icons/CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Your card</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
