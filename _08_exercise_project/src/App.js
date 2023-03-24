import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([
    { name: 'David', age: '31', id: '1' },
    { name: 'David', age: '31', id: '2' },
  ]);

  const addUser = (userData) => {
    setUsersList((previous) => {
      return [...previous, userData];
    });
  };

  const manageError = (errorMessage) => {
    alert(errorMessage);
  };

  console.clear();

  return (
    <div>
      <AddUser onUserAdd={addUser} onError={manageError}></AddUser>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
