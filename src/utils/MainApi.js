import { SERVER_URL } from "./constants";

/**
 * Обработчик ответа запроса с сервера.
 * @param response - ответ запроса
 */
const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.statusText}`);
};

/**
 * POST запрос на регистрацию нового пользователя.
 *
 * @param name - имя регистрируемого пользователя
 * @param password - пароль регистрируемого пользователя
 * @param email - email регистрируемого пользователя
 */
export const register = (name, password, email) => {
  return fetch(`${SERVER_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password, email }),
  }).then(checkResponse);
};

/**
 * POST запрос на авторизацию пользователя.
 * @param password - пароль авторизируемого пользователя
 * @param email - email авторизируемого пользователя
 */
export const authorize = (email, password) => {
  return fetch(`${SERVER_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then(checkResponse);
};

/**
 * GET запрос на проверку токена пользователя.
 * @param token - токен, хранимый в localStorage пользователя
 */
export const isTokenValid = (token) => {
  return fetch(`${SERVER_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

/**
 * PATCH запрос на обновление данных профиля текущего пользователя.
 * @param name - новое имя пользователя
 * @param email - новый email пользователя
 * @param token - токен, хранимый в localStorage пользователя
 */
export const updateUserData = (name, email, token) => {
  return fetch(`${SERVER_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, email }),
  }).then(checkResponse);
};

/**
 * GET запрос на сохранённые фильмы пользователя.
 */
export const getSavedMovies = (token) => {
  return fetch(`${SERVER_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    }
  }).then(checkResponse);
};

/**
 * POST запрос на добавление фильма в сохранённые.
 * @param movieData - данные о фильме
 * @param token - токен, хранимый в localStorage пользователя
 */
export const addMovie = (movieData, token) => {
  return fetch(`${SERVER_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      country: movieData.country,
      director: movieData.director,
      duration: movieData.duration,
      year: movieData.year,
      description: movieData.description,
      image: movieData.image,
      trailer: movieData.trailerLink,
      thumbnail: movieData.thumbnail,
      movieId: movieData.movieId,
      nameRU: movieData.nameRU,
      nameEN: movieData.nameEN,
    }),
  }).then(checkResponse);
};

/**
 * DELETE запрос на удаление фильма из сохранённых.
 * @param movieData - данные о фильме
 * @param token - токен, хранимый в localStorage пользователя
 */
export const removeMovie = (movieData, token) => {
  return fetch(`${SERVER_URL}/movies/${movieData._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    }
  }).then(checkResponse);
};

