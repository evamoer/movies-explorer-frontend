import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({movies, moreFilms}) => {
  return (
    <>
      <ul className="movieslist">
        {movies.map((movie) => (
          <MoviesCard key={movie.poster} name={movie.name} duration={movie.duration} poster={movie.poster} isSaved={movie.isSaved}/>
        ))}
      </ul>
        <div className="movieslist__more-container">
          {moreFilms && (
          <button className="movieslist__more-button">Ещё</button>
          )}
        </div>
    </>
  );
};

export default MoviesCardList;
