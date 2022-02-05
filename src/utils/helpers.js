/**
 * Конвертер минут фильма в текст.
 *
 * @param duration - длительность фильма в минутах.
 */
export const convertMovieDuration = (duration) => {
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

/**
 * Обработчик поиска по фильмам.
 *
 * @param movies - длительность фильма в минутах
 * @param searchValue - поисковый текст
 * @param isChecked - статус чекбокса
 */
export const searchMovies = (movies, searchValue, isChecked) => {
  let filteredMovies = [];
  const SearchRegExp = new RegExp(searchValue, 'gi');

  movies.forEach((movie) => {
    const { country, description, director, nameEN, nameRU, year } = movie;
    if (SearchRegExp.test(country)
      || SearchRegExp.test(description)
      || SearchRegExp.test(director)
      || SearchRegExp.test(nameEN)
      || SearchRegExp.test(nameRU)
      || SearchRegExp.test(year)) {

      filteredMovies.push(movie);
    }
  });
  if (isChecked === true) {
    return filteredMovies.filter((movie) => movie.duration <= 40);
  }
  return filteredMovies;
}

/**
 * Функция для определения количества показывыемых фильмов в зависимости от ширины экрана.
 */
export const defineNumberMoviesToShow = () => {
  if (window.innerWidth >= 1280) {
    return 12;
  } else if (window.innerWidth < 1280 && window.innerWidth > 480) {
    return 8;
  }
  return 5;
}

/**
 * Функция для определения количества подгружаемых фильмов в зависимости от ширины экрана.
 */
export const defineNumberMoviesToUpload = () => {
  if (window.innerWidth >= 1280) {
    return 3;
  } else if (window.innerWidth < 1280 && window.innerWidth > 480) {
    return 2;
  }
  return 2;
}

/**
 * Функция для определения показываемых фильмов.
 */
export const sliceMovies = (movies, numberMoviesToShow) => {
  return movies.slice(0, numberMoviesToShow);
}

/**
 * Функция для определения статуса кнопки "Ещё".
 */
export const checkIsLoadMoreActive = (movies, numberMoviesToShow) => {
  return (numberMoviesToShow >= movies.length) ? false : true;
}

