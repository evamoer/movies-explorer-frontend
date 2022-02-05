/**
 * Ссылка на BeatfilmMoviesApi.
 */
export const BEATFILM_URL = 'https://api.nomoreparties.co';

/**
 * Ссылка на mainApi.
 */
export const SERVER_URL = 'https://movies-explorer-evamoer.nomoredomains.rocks/api';

/**
 * Настройки формы для неавторизованного пользователя.
 */
export const LOGGED_OUT_FORM_SETTINGS = {
  login: {
    INPUTS: {
      name: {
        isLocated: false,
      },
      email: {
        isLocated: true,
      },
      password: {
        isLocated: true,
      },
    },
    SUBMIT_TEXT: 'Войти',
    QUESTION_TEXT: 'Ещё не зарегистрированы?',
    LINK_PATH: '/signup',
    LINK_TEXT: 'Регистрация'
  },
  register: {
    INPUTS: {
      name: {
        isLocated: true,
      },
      email: {
        isLocated: true,
      },
      password: {
        isLocated: true,
      },
    },
    SUBMIT_TEXT: 'Зарегистрироваться',
    QUESTION_TEXT: 'Уже зарегистрированы?',
    LINK_PATH: '/signin',
    LINK_TEXT: 'Войти'
  },
}
