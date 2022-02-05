import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { convertMovieDuration } from "../../utils/helpers";
import { BEATFILM_URL } from "../../utils/constants";

/**
 * MoviesCard - компонент карточки с фильмом.
 *
 * @param handleSaveButtonClick - обработчик добавления фильма в сохранённые
 * @param handleRemoveButtonClick - обработчик удаления фильма из сохранённых
 * @param props - остальные данные о фильме
 */
const MoviesCard = ({handleSaveButtonClick, handleRemoveButtonClick, ...props}) => {

  /**
   * Переменные с данными о фильме.
   */
  const {
    country,
    description,
    director,
    duration,
    movieId,
    image,
    nameEN,
    nameRU,
    trailerLink,
    thumbnail,
    year,
    owner,
    _id,
  } = props;

  /**
   * Хук для подключения location.
   */
  const location = useLocation();

  /**
   * Переменная для определения статуса фильма "сохранён/не сохранён".
   */
  const [isSaved, setIsSaved] = useState(false);

  /**
   * Переменная для определения статуса фильма "сохранён/не сохранён".
   */
  const saveButtonClassName = `moviecard__save-button
          ${isSaved ? 'moviecard__save-button_type_saved' : 'moviecard__save-button_type_not-saved'}
          ${(location.pathname === '/savedmovies') && 'moviecard__save-button_type_remove'}`;

  /**
   * Хук для изменения статуса фильма "сохранён/не сохранён" при его нахождении в localStorage.
   */
  useEffect(() => {
    if (localStorage.getItem(`${nameRU}`)) {
      setIsSaved(true);
    }
  }, []);

  /**
   * Обработчик клика на кнопку карточки:
   * при isSaved === false происходит сохранение,
   * при isSaved === false происходит удаление фильма.
   */
  const handleButtonClick = () => {
    const movieData = { country, description, director, duration, movieId, image, nameEN, nameRU, trailerLink, thumbnail, year, owner, _id };
    if (isSaved) {
      handleRemoveButtonClick(movieData, setIsSaved);
    } else {
      handleSaveButtonClick(movieData, setIsSaved);
    }
  }

  return (
    <li className="moviecard movieslist__item">
      <div className="moviecard__info">
        <h3 className="moviecard__name">{nameRU}</h3>
        <p className="moviecard__duration">{convertMovieDuration(duration)}</p>
      </div>
      <a className="moviecard__poster-container" href={trailerLink} target="_blank" rel="noreferrer">
        <img className="moviecard__poster-image" src={`${BEATFILM_URL}/${image}`} alt={`постер к фильму ${nameRU}`}/>
      </a>
      <button
        type="button"
        onClick={handleButtonClick}
        className={saveButtonClassName}
      />
    </li>
  );
};

export default MoviesCard;
