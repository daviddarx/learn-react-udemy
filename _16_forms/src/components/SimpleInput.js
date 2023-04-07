import { useState } from 'react';

const SimpleInput = (props) => {
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [isNameValid, setNameIsValid] = useState(false);
  const [name, setName] = useState('');

  const validateName = (value) => {
    return value.trim().length !== 0;
  };

  const onChange = (e) => {
    setNameIsValid(validateName(e.target.value));

    setIsNameTouched(true);
    setName(e.target.value);
  };

  const onBlur = (e) => {
    setIsNameTouched(true);
    setNameIsValid(validateName(e.target.value));
  };

  const submitForm = (e) => {
    e.preventDefault();

    setIsNameTouched(true);

    if (validateName(name) === false) {
      setNameIsValid(false);

      return;
    }

    console.log(name);
    setName('');
  };

  const isNameInvalid = !isNameValid && isNameTouched;

  return (
    <form onSubmit={submitForm}>
      <div className={`form-control${isNameInvalid ? ' invalid' : ''}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={name} onChange={onChange} onBlur={onBlur} />
        {isNameInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
