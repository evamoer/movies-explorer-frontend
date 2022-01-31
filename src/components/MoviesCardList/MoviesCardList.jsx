import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import { BEATFILM_URL } from "../../utils/constants";


const MoviesCardList = ({ movies, updateButtonStatus }) => {
  return (
    <>
      <ul className="movieslist">
        { movies.map((movie) => (
            <MoviesCard
              key={movie.id}
              country={movie.country}
              description={movie.description}
              director={movie.director}
              duration={movie.duration}
              id={movie.id}
              image={`${BEATFILM_URL}/${movie.image.url}`}
              nameEN={movie.nameEN}
              nameRU={movie.nameRU}
              trailerLink={movie.trailerLink}
              year={movie.year}
              isSaved={false}/>
        ))}
      </ul>
        <div className="movieslist__more-container">
          {updateButtonStatus && <button className="movieslist__more-button">Ещё</button>}
        </div>
    </>
  );
};

export default MoviesCardList;
