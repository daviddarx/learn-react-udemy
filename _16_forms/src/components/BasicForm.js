import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: firstName,
    isValueValid: isFirstNameValid,
    isInputInvalid: isFirstNameInputInvalid,
    onInputChange: onFirstNameChange,
    onInputBlur: onFirstNameBlur,
    resetInput: resetFirstName,
  } = useInput((value) => value.trim().length !== 0);

  const {
    value: lastName,
    isValueValid: isLastNameValid,
    isInputInvalid: isLastNameInputInvalid,
    onInputChange: onLastNameChange,
    onInputBlur: onLastNameBlur,
    resetInput: resetLastName,
  } = useInput((value) => value.trim().length !== 0);

  const {
    value: email,
    isValueValid: isEmailValid,
    isInputInvalid: isEmailInputInvalid,
    onInputChange: onEmailChange,
    onInputBlur: onEmailBlur,
    resetInput: resetEmail,
  } = useInput((value) => value.trim().length !== 0 && value.includes('@'));

  const isFormValid = isFirstNameValid;

  const submitForm = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={submitForm}>
      <div className='control-group'>
        <div className={`form-control${isFirstNameInputInvalid ? ' invalid' : ''}`}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstName}
            onChange={onFirstNameChange}
            onBlur={onFirstNameBlur}
          />
          {isFirstNameInputInvalid && <p className='error-text'>Please enter a first name</p>}
        </div>
        <div className={`form-control${isLastNameInputInvalid ? ' invalid' : ''}`}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastName}
            onChange={onLastNameChange}
            onBlur={onLastNameBlur}
          />
          {isLastNameInputInvalid && <p className='error-text'>Please enter a last name</p>}
        </div>
      </div>
      <div className={`form-control${isEmailInputInvalid ? ' invalid' : ''}`}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onChange={onEmailChange} onBlur={onEmailBlur} />
        {isEmailInputInvalid && <p className='error-text'>Please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
