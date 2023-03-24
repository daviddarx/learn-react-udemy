import { useState } from 'react';

import ErrorModal from './components/UI/ErrorModal';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([
    { name: 'David', age: '31', id: '1' },
    { name: 'David', age: '31', id: '2' },
  ]);
  const [errorMessage, setErrorMessage] = useState('');

  const addUser = (userData) => {
    setUsersList((previous) => {
      return [...previous, userData];
    });
  };

  const manageError = (errorMessage) => {
    setErrorMessage(errorMessage);
  };

  const discardError = () => {
    setErrorMessage('');
  };

  console.clear();

  return (
    <div>
      <AddUser onUserAdd={addUser} onError={manageError}></AddUser>
      <UsersList users={usersList} />
      {errorMessage.trim().length !== 0 && (
        <ErrorModal message={errorMessage} onDiscard={discardError} />
      )}
    </div>
  );
}

export default App;
