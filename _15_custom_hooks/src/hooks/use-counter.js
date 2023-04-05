import { useState, useEffect } from 'react';

const useCounter = (direction = 1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1 * direction);
    }, 1000);

    return () => clearInterval(interval);
  }, [direction]);

  return counter;
};

export default useCounter;
