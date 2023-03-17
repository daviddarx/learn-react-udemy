import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');

  /* // Alternative to group all the useStates: 
    const [expenseData, setExpenseData ] = useState({
      title: '', 
      amount: '', 
      date: '', 
      price: ''
    }) 

    // And then set with: 
    setExpenseData((previousData) => {      // arrow function needed in case we need the previous state
      return {
        ...previousData, 
        title: 'My Title'
      }
    })
  */
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const submitHandler = (e) => {
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
      price: price,
    };

    console.log(expenseData);

    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2009-01-01' max='2022-12-31' onChange={dateChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input type='number' onChange={priceChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
