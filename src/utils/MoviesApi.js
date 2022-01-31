import { BEATFILM_URL } from "./constants";

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.statusText}`);
}

//GET запрос на все фильмы с сервера
export const getBeatfilmMovies = () => {
  return fetch(`${BEATFILM_URL}/beatfilm-movies`, {
    headers: {
      "Content-Type": "application/json"
    },
  }).then(checkResponse);
}
