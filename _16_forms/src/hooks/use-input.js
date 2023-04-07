import { useState } from 'react';

const useInput = (validateValue) => {
  const [isTouched, setIsTouched] = useState(false);
  const [enteredValue, setEnderedValue] = useState('');

  const isValueValid = validateValue(enteredValue);
  const isInputInvalid = !isValueValid && isTouched;

  const onInputChange = (e) => {
    setIsTouched(true);
    setEnderedValue(e.target.value);
  };

  const onInputBlur = (e) => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setEnderedValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValueValid,
    isInputInvalid,
    onInputChange,
    onInputBlur,
    resetInput,
  };
};

export default useInput;
