import React from 'react';
import { useLocation } from "react-router-dom";

const MoviesCard = ({ name, duration, poster, isSaved }) => {

    /*
  захардкоженные данные для отображения вёрстки согласно макету;
  код будет изменён на этапе 4;
  */

  const location = useLocation();

  return (
    <li className="moviecard movieslist__item">
      <div className="moviecard__info">
        <h3 className="moviecard__name">{name}</h3>
        <p className="moviecard__duration">{duration}</p>
      </div>
      <figure className="moviecard__poster-container">
        <img className="moviecard__poster-image" src={poster} alt={`постер к фильму ${name}`}/>
      </figure>
      <button
        className={`moviecard__save-button
          ${isSaved ? 'moviecard__save-button_type_saved' : 'moviecard__save-button_type_not-saved'}
          ${(location.pathname === '/savedmovies') && 'moviecard__save-button_type_remove'}`}>
      </button>
    </li>
  );
};

export default MoviesCard;
