import { useState, useRef } from 'react';

import Input from '../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemControl = ({ id, onAddToCart }) => {
  const [isAmountValid, setIsAmountValid] = useState(true);

  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 0 || enteredAmountNumber > 10) {
      setIsAmountValid(false);
      return;
    } else {
      setIsAmountValid(true);
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label='Amount'
        input={{ id: `amount-${id}`, type: 'number', min: '1', max: '10', defaultValue: '1' }}
      />
      <button type='submit'>Add to Cart</button>
      {!isAmountValid && <p>Invalid amount. Min 0, Max 10</p>}
    </form>
  );
};

export default MealItemControl;
