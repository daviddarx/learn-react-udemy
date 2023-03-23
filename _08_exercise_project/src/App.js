import React from 'react';

import AddUser from './components/Users/AddUser';

function App() {
  console.clear();

  const addUser = (userData) => {
    console.log('add user data: ', userData);
  };

  const manageError = (errorMessage) => {
    alert(errorMessage);
  };

  return (
    <div>
      <AddUser onUserAdd={addUser} onError={manageError}></AddUser>
    </div>
  );
}

export default App;
