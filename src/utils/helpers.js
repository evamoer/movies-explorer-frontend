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

export const searchMovies = (movies, searchValue) => {
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
  console.log(filteredMovies);
  return filteredMovies;
}

