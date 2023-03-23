import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import './AddUser.css';

export default function AddUser(props) {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  let errorMessage;

  const updateUserName = (e) => {
    setUserName(e.target.value);
  };

  const updateUserAge = (e) => {
    setUserAge(e.target.value);
  };

  const validate = () => {
    errorMessage = undefined;

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      errorMessage = 'Empty fields';
    } else if (parseInt(userAge) < 0) {
      errorMessage = 'Negative age';
    }

    return errorMessage === undefined ? true : false;
  };

  const submitUser = (e) => {
    if (validate()) {
      const userData = {
        name: userName,
        age: userAge,
        id: 'user' + Math.random(),
      };

      props.onUserAdd(userData);

      setUserName('');
      setUserAge('');
    } else {
      props.onError(errorMessage);
    }

    e.preventDefault();
  };

  return (
    <Card className='add-user'>
      <form onSubmit={submitUser}>
        <div>
          <label htmlFor='username'>User name</label>
          <input type='text' id='username' value={userName} onChange={updateUserName} />
          <label htmlFor='age'>Age</label>
          <input type='number' id='age' value={userAge} onChange={updateUserAge} />
        </div>
        <Button type='submit'>Add user</Button>
      </form>
    </Card>
  );
}
