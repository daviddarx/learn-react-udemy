import { useState } from 'react';

const SimpleInput = (props) => {
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [name, setName] = useState('');

  const isNameInvalid = name.trim().length === 0 && isNameTouched;

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

    if (isNameInvalid) {
      return;
    }

    console.log(name);
    setIsNameTouched(false);
    setName('');
  };

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
