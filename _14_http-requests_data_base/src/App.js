import React, { useState, useEffect, useCallback } from 'react';

import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Use useCallback as we pass fetchMovies to useEffect
   * to fetch the movies on page load. We pass it just
   * as an example as in some use cases, this function could
   * be changed according to external state. We could also just
   * let an empty array [] for useEffect, in our case.
   */
  const fetchMovies = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovie} />
      </section>
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
