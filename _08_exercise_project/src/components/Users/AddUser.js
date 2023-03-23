import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import './AddUser.css';

export default function AddUser(props) {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const updateUserName = (e) => {
    setUserName(e.target.value);
  };

  const updateUserAge = (e) => {
    setUserAge(e.target.value);
  };

  const submitUser = (e) => {
    const userData = {
      name: userName,
      age: userAge,
      id: 'user' + Math.random(),
    };

    props.onUserAdd(userData);

    setUserName('');
    setUserAge('');

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
