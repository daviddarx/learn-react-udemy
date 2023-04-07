import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: name,
    isValueValid: isNameValid,
    isInputInvalid: isNameInputValid,
    onInputChange: onNameChange,
    onInputBlur: onNameBlur,
    resetInput: resetNameInput,
  } = useInput((value) => {
    return value.trim().length !== 0;
  });

  const {
    value: email,
    isValueValid: isEmailValid,
    isInputInvalid: isEmailInputValid,
    onInputChange: onEmailChange,
    onInputBlur: onEmailBlur,
    resetInput: resetEmailInput,
  } = useInput((value) => {
    return value.trim().length !== 0 && value.includes('@');
  });

  const isFormValid = isNameValid && isEmailValid;

  const submitForm = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={submitForm}>
      <div className={`form-control${isNameInputValid ? ' invalid' : ''}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={name} onChange={onNameChange} onBlur={onNameBlur} />
        {isNameInputValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={`form-control${isEmailInputValid ? ' invalid' : ''}`}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
        />
        {isEmailInputValid && <p className='error-text'>Please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
