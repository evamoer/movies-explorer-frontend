import React from 'react';
import { useLocation } from "react-router-dom";
import { convertMovieDuration } from "../../utils/helpers";

const MoviesCard = ({ nameRU, duration, image, trailerLink, isSaved }) => {

  const location = useLocation();
  const saveButtonClassName = `moviecard__save-button
          ${isSaved ? 'moviecard__save-button_type_saved' : 'moviecard__save-button_type_not-saved'}
          ${(location.pathname === '/savedmovies') && 'moviecard__save-button_type_remove'}`;

  return (
    <li className="moviecard movieslist__item">
      <div className="moviecard__info">
        <h3 className="moviecard__name">{nameRU}</h3>
        <p className="moviecard__duration">{convertMovieDuration(duration)}</p>
      </div>

        <a className="moviecard__poster-container" href={trailerLink} target="_blank" rel="noreferrer">
          <img className="moviecard__poster-image" src={image} alt={`постер к фильму ${nameRU}`}/>
        </a>

      <button
        className={saveButtonClassName}>
      </button>
    </li>
  );
};

export default MoviesCard;
