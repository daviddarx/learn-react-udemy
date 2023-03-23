import React from 'react';

import AddUser from './components/Users/AddUser';

function App() {
  console.clear();

  const addUser = (userData) => {
    console.log('add user data: ', userData);
  };

  return (
    <div>
      <AddUser onUserAdd={addUser}></AddUser>
    </div>
  );
}

export default App;
