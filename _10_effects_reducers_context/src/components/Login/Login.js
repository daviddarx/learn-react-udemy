import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

// reduction function outside of component, as we won't need anything of the component inside it.
// all the needed data will be passed in the function when executed.
const emailReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.includes('@') };
  }
  if (action.type === 'BLUR_INPUT') {
    return { value: prevState.value, isValid: prevState.value.includes('@') };
  }
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

const Login = () => {
  const authCtx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: undefined });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: undefined,
  });

  useEffect(() => {
    const formValidationTimeout = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    // return a clean-up function, which will be executed before the next useEffect update.
    return () => {
      clearTimeout(formValidationTimeout);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_INPUT',
      value: event.target.value,
    });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: 'USER_INPUT',
      value: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'BLUR_INPUT' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'BLUR_INPUT' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
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
