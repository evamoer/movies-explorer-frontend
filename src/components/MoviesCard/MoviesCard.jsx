import React from 'react';

const MoviesCard = ({name, duration, poster, isSaved}) => {
  console.log({name, duration, poster, isSaved})
  return (
    <li className="moviecard movieslist__item">
      <div className="moviecard__info">
        <h3 className="moviecard__name">{name}</h3>
        <p className="moviecard__duration">{duration}</p>
      </div>
      <figure className="moviecard__poster-container">
        <img className="moviecard__poster-image" src={poster} alt={`постер к фильму ${name}`}/>
      </figure>
      <button className={`moviecard__save-button ${isSaved ? 'moviecard__save-button_type_saved' : 'moviecard__save-button_type_not-saved'}`}></button>
    </li>
  );
};

export default MoviesCard;
