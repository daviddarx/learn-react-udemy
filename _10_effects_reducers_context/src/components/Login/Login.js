import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import classes from './Login.module.css';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';

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

  const emailRef = useRef();
  const passwordRef = useRef();

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
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailState.isValid) {
      emailRef.current.focusIn();
    } else if (!passwordState.isValid) {
      passwordRef.current.focusIn();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          id='email'
          type='email'
          label='E-mail'
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailState.isValid}
        />
        <Input
          ref={passwordRef}
          id='password'
          type='password'
          label='Password'
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordState.isValid}
        />

        <div className={classes.actions}>
          <Button type='submit' className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
