import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
const BEATFILM_URL = 'https://api.nomoreparties.co';
const MoviesCardList = ({ movies, updateButtonStatus }) => {

  /*
  захардкоженные данные для отображения вёрстки согласно макету;
  при uploadButtonStatus === true появляется кнопка "Ещё",
  при uploadButtonStatus === false кнопка "Ещё" исчезает;
  код будет изменён на этапе 4;
  */

  const convertDuration = (duration) => {
    const hoursWords = ['час', 'часа', 'часов'];
    const minutesWords = ['минута', 'минуты', 'минут'];
    let hours = Math.floor(duration / 60);
    let minutes = (hours === 0) ? duration : duration % (hours * 60);

    if (minutes === 0) {
      return `${hours} ${changeWord(hours, hoursWords)}`
    } else if (hours === 0) {
      return `${minutes} ${changeWord(minutes, minutesWords)}`
    }
    return `${hours} ${changeWord(hours, hoursWords)} ${minutes} ${changeWord(minutes, minutesWords)}`

    function changeWord(value, words) {
      let num = value % 10;
      if (((value < 10) || (value > 20)) && (num === 1)) return words[0];
      if ((value > 9) && (value < 21)) return words[2];
      if ((num > 1) && (num < 5)) return words[1];
      return words[2];
    }
  }

  return (
    <>
      <ul className="movieslist">
        { movies.map((movie) => (
            <MoviesCard
              key={movie.id}
              name={movie.nameRU}
              duration={convertDuration(movie.duration)}
              poster={`${BEATFILM_URL}/${movie.image.url}`}
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
