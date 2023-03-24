import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// reduction function outside of component, as we won't need anything of the component inside it.
// all the needed data will be passed in the function when executed.
const emailReducer = (prevState, action) => {
  // depending on action content
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.includes('@') };
  }
  if (action.type === 'BLUR_INPUT') {
    return { value: prevState.value, isValid: prevState.value.includes('@') };
  }
  // default value
  return { value: '', isValid: false };
};

const passwordReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }

  if (action.type === 'BLUR_INPUT') {
    return { value: prevState.value, isValid: prevState.value.trim().length > 6 };
  }

  return { value: '', isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  // useEffect(() => {
  //   const formValidationTimeout = setTimeout(() => {
  //     setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
  //   }, 500);

  //   // return a clean-up function, which will be executed before the next useEffect update.
  //   return () => {
  //     clearTimeout(formValidationTimeout);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({
      type: 'USER_INPUT',
      value: event.target.value,
    });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: 'USER_INPUT',
      value: event.target.value,
    });

    setFormIsValid(passwordState.isValid && emailState.isValid);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({
      type: 'BLUR_INPUT', // value isn't needed here, as it's called onBlur
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'BLUR_INPUT' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
