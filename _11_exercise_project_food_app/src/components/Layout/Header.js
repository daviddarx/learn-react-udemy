import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='ReactMeals' />
      </div>
    </Fragment>
  );
};

export default Header;
