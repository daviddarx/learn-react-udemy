import { useState } from 'react';

const SimpleInput = (props) => {
  const [name, setName] = useState('');

  const onChange = (e) => {
    setName(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    console.log(name);
    setName('');
  };

  return (
    <form onSubmit={submitForm}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={name} onChange={onChange} />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
