import { useState } from 'react';

const SimpleInput = (props) => {
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [name, setName] = useState('');

  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [email, setEmail] = useState('');

  const isNameValid = name.trim().length !== 0;
  const isNameInputValid = !isNameValid && isNameTouched;

  const isEmailValid = email.trim().length !== 0 && email.includes('@');
  const isEmailInputValid = !isEmailValid && isEmailTouched;

  const isFormValid = isNameValid && isEmailValid;

  const onNameChange = (e) => {
    setIsNameTouched(true);
    setName(e.target.value);
  };

  const onNameBlur = (e) => {
    setIsNameTouched(true);
  };

  const onEmailChange = (e) => {
    setIsEmailTouched(true);
    setEmail(e.target.value);
  };

  const onEmailBlur = (e) => {
    setIsEmailTouched(true);
  };

  const submitForm = (e) => {
    e.preventDefault();

    setIsNameTouched(true);

    if (!isFormValid) {
      return;
    }

    setIsNameTouched(false);
    setName('');

    setIsEmailTouched(false);
    setEmail('');
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
