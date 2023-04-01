import React, { useState, useCallback } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [isShown, setIsShwown] = useState(false);

  console.log('---');
  console.log('App evaluated');

  const toggleParagraph = useCallback(() => {
    setIsShwown((prevState) => {
      return !prevState;
    });
  }, []);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={isShown} />
      {/* won't be evaluated because false is a primitive which doesn't change */}
      <DemoOutput show={false} />
      <Button onClick={toggleParagraph}>Test</Button>
    </div>
  );
}

export default App;
