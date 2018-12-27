import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie,idx) => {
        return(
          <div key={idx}>
            <h3>Name: {movie.title}</h3>
            <p>Time: {movie.time}</p>
            <ul>{
                movie.genres.map((genre,idx) => <li key={idx}> {genre} </li>)
              }
            </ul>
          </div>
        )
      })
    }
    </div>
  );
};

export default Movies;
