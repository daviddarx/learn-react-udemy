import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMovies() {
    setIsLoading(true);
    setError(null);

    // to test the error, just change the API url to fire a 404
    try {
      /**
       * Fetch return a responve, which we listen with the first then().
       * The response has a built-in .json() method, to transform the json into a javascript object.
       * The .json() method also return a responsive, which we listen with the second then();
       */
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      const transformedMovies = data.results.map((item) => {
        return {
          id: item.episode_id,
          title: item.title,
          openingText: item.opening_crawl,
          releaseDate: item.release_date,
        };
      });

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <p>Is loading...</p>}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No film loaded.</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
