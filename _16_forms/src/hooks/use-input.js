import { useState, useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (previous, action) => {
  if (action.type === 'INPUT') {
    return {
      value: action.value,
      isTouched: previous.isTouched,
    };
  }

  if (action.type === 'BLUR') {
    return {
      value: previous.value,
      isTouched: true,
    };
  }

  if (action.type === 'RESET') {
    return {
      value: '',
      isTouched: false,
    };
  }

  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const isValueValid = validateValue(inputState.value);
  const isInputInvalid = !isValueValid && inputState.isTouched;

  const onInputChange = (e) => {
    dispatch({ type: 'INPUT', value: e.target.value });
  };

  const onInputBlur = (e) => {
    dispatch({ type: 'BLUR' });
  };

  const resetInput = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValueValid,
    isInputInvalid,
    onInputChange,
    onInputBlur,
    resetInput,
  };
};

export default useInput;
