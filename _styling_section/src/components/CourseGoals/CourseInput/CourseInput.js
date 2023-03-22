import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    setIsValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label style={{ color: isValid ? 'inherit' : 'red' }}>Course Goal</label>
        <input
          type='text'
          value={enteredValue}
          onChange={goalInputChangeHandler}
          style={{ borderColor: isValid ? null : 'red' }}
        />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
