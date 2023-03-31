import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Input from '../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemControl = ({ id }) => {
  const cartCtx = useContext(CartContext);

  const submitHandler = (e) => {
    cartCtx.addItem({});
    e.preventDefault();
    return;
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label='Amount'
        input={{ id: `amount-${id}`, type: 'number', min: '1', max: '10', defaultValue: '1' }}
      />
      <button type='submit'>Add to Cart</button>
    </form>
  );
};

export default MealItemControl;
