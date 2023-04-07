import { useState, useEffect } from 'react';

const SimpleInput = (props) => {
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [name, setName] = useState('');

  const isNameValid = name.trim().length !== 0;
  const isNameInputValid = !isNameValid && isNameTouched;
  const isFormValid = isNameValid;

  const onChange = (e) => {
    setIsNameTouched(true);
    setName(e.target.value);
  };

  const onBlur = (e) => {
    setIsNameTouched(true);
  };

  const submitForm = (e) => {
    e.preventDefault();

    setIsNameTouched(true);

    if (!isFormValid) {
      return;
    }

    setIsNameTouched(false);
    setName('');
  };

  return (
    <form onSubmit={submitForm}>
      <div className={`form-control${isNameInputValid ? ' invalid' : ''}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={name} onChange={onChange} onBlur={onBlur} />
        {isNameInputValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
