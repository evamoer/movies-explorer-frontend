import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({movies}) => {
const moreFilms = true;

  return (
    <>
      <ul className="movieslist section">
        {movies.map((movie) => (
          <MoviesCard key={movie.poster} name={movie.name} duration={movie.duration} poster={movie.poster} isSaved={movie.isSaved}/>
        ))}
      </ul>
      {moreFilms && (
        <div className="movieslist__more-container section">
          <button className="movieslist__more-button">Ещё</button>
        </div>
      )}
    </>
  );
};

export default MoviesCardList;
