import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    /**
     * Fetch return a responve, which we listen with the first then().
     * The response has a built-in .json() method, to transform the json into a javascript object.
     * The .json() method also return a responsive, which we listen with the second then();
     */
    fetch('https://swapi.dev/api/films/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((item) => {
          return {
            id: item.episode_id,
            title: item.title,
            openingText: item.opening_crawl,
            releaseDate: item.release_date,
          };
        });
        setMovies(transformedMovies);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
