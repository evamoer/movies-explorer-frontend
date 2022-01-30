export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.statusText}`);
}

//GET запрос на все фильмы с сервера

export const getAllMovies = () => {
  return fetch(BASE_URL, {
    headers: {
      "Content-Type": "application/json"
    },
  }).then(checkResponse);
}
