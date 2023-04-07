import { useState } from 'react';

const SimpleInput = (props) => {
  const [isNameValid, setNameIsValid] = useState(true);
  const [name, setName] = useState('');

  const onChange = (e) => {
    setName(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (name.trim().length === 0) {
      setNameIsValid(false);

      return;
    }

    console.log(name);
    setName('');
  };

  return (
    <form onSubmit={submitForm}>
      <div className={`form-control${!isNameValid ? ' invalid' : ''}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={name} onChange={onChange} />
        {!isNameValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
