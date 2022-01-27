import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ movies, updateButtonStatus }) => {

  /*
  захардкоженные данные для отображения вёрстки согласно макету;
  при uploadButtonStatus === true появляется кнопка "Ещё",
  при uploadButtonStatus === false кнопка "Ещё" исчезает;
  код будет изменён на этапе 4;
  */

  return (
    <>
      <ul className="movieslist">
        { movies.map((movie) => (
            <MoviesCard key={movie.poster} name={movie.name} duration={movie.duration} poster={movie.poster} isSaved={movie.isSaved}/>
        ))}
      </ul>
        <div className="movieslist__more-container">
          {updateButtonStatus && <button className="movieslist__more-button">Ещё</button>}
        </div>
    </>
  );
};

export default MoviesCardList;
