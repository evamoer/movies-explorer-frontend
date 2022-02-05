import { BEATFILM_URL } from "./constants";

/**
 * Обработчик ответа запроса с сервера.
 * @param response - ответ запроса
 */
const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.statusText}`);
}

/**
 * GET запрос на фильмы с BeatfilmMoviesApi.
 */
export const getBeatfilmMovies = () => {
  return fetch(`${BEATFILM_URL}/beatfilm-movies`, {
    headers: {
      "Content-Type": "application/json"
    },
  }).then(checkResponse);
}
