import { useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (url, postedData = null, onComplete = {}) => {
    setIsLoading(true);
    setError(null);
    try {
      let fetchOptions;
      if (postedData !== null) {
        fetchOptions = {
          method: 'POST',
          body: JSON.stringify(postedData),
          headers: {
            'Content-Type': 'application/json',
          },
        };
      } else {
        fetchOptions = {};
      }

      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      console.log('fewtched', data);

      onComplete(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return [isLoading, error, sendRequest];
};

export default useHttp;
