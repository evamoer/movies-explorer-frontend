import React, { useEffect, useState, useCallback } from 'react';
import {Redirect, Route, Switch, useHistory, useLocation} from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {getBeatfilmMovies} from "../../utils/MoviesApi";
import {
  addMovie,
  authorize,
  getSavedMovies,
  isTokenValid,
  register,
  removeMovie,
  updateUserData
} from "../../utils/MainApi";
import { searchMovies } from "../../utils/helpers";

/**
 * App - главный компонент приложения.
 * Включает в себя все компоненты и логику работу приложения.
 */
const App = () => {

  /**
   * Хук для подключения location.
   */
  const location = useLocation();

  /**
   * Хук для подключения history.
   */
  const history = useHistory();

  /**
   * Переменная для отображения хэдера.
   */
  const headerPresence = ((location.pathname === '/')
    || (location.pathname === '/movies')
    || (location.pathname === '/savedmovies')
    || (location.pathname === '/profile'));

  /**
   * Переменная для отображения футера.
   */
  const footerPresence = ((location.pathname === '/')
    || (location.pathname === '/movies')
    || (location.pathname === '/savedmovies'));

  /**
   * Переменные, определяющие логику компонентов Movies и SavedMovies.
   */
  const [beatfilmMovies, setBeatfilmMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Переменные, определяющие логику авторизации пользователя.
   */
  const [currentUser, setCurrentUser] = useState({name: '', email: '', _id: ''});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const token = localStorage.getItem("token");

  /**
   * Хук для получения всех фильмов с BeatFilmMoviesApi при открытии сайта.
   */
  useEffect(() => {
    getBeatfilmMovies()
      .then(allMovies => setBeatfilmMovies(allMovies))
      .catch(err => console.log(err))
  }, []);

  /**
   * Хук для получения всех сохранённых пользователем фильмов с нашего api при открытии сайта.
   */
  useEffect(() => {
    getSavedMovies(token)
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err));
  }, []);

  /**
   * Обработчик поискового запроса:
   * в зависимости от местонахождения проводит поиск по всем фильмам или по сохранённым.
   *
   * @param searchValue - поисковое слово
   * @param isChecked - состояние чекбокса, определяющий длительность фильма
   */
  const handleSearch = (searchValue, isChecked) => {
    setIsLoading(true);
    const delay = setTimeout(() => {
      if (location.pathname === '/movies') {
        const filteredMovies = searchMovies(beatfilmMovies, searchValue, isChecked);
        setFilteredMovies(filteredMovies);
        localStorage.setItem('movies', JSON.stringify(filteredMovies));
      } else if (location.pathname === '/savedmovies') {
        setFilteredSavedMovies(searchMovies(savedMovies, searchValue, isChecked));
      }
      setIsLoading(false);
      clearTimeout(delay);
    }, (1500));
  }

  /**
   * Обработчик сохранения фильма:
   * при нажатии на кнопку сохранить, отправляет запрос на наше api и обновляет массивы.
   *
   * @param movieData - объект с данными сохраняемого фильма
   * @param setIsSaved - функция установки/снятия флага "фильм сохранён" (здесь: установка).
   */
  const handleSaveMovie = (movieData, setIsSaved) => {
    addMovie(movieData, token)
      .then((movie) => {
        if (movie) {
          setIsSaved(true);
          localStorage.setItem(`${movie.nameRU}`, JSON.stringify(true));
          setSavedMovies([movie, ...savedMovies]);
          setFilteredSavedMovies([movie, ...savedMovies]);
        } else {
          throw new Error('Фильм не сохранён.');
        }
      })
      .catch((err) => console.log(err));
  }

  /**
   * Обработчик удаления фильма:
   * при нажатии на кнопку удалить, отправляет запрос на наше api и обновляет массивы.
   *
   * @param movieData - объект с данными удаляемого фильма
   * @param setIsSaved - функция установки/снятия флага "фильм сохранён" (здесь: снятие).
   */
  const handleRemoveMovie = (movieData, setIsSaved) => {
    const clickedSavedMovie = savedMovies.find(movie => movie.movieId === movieData.movieId);
    removeMovie(clickedSavedMovie, token)
      .then(() => {
        setIsSaved(false);
        localStorage.removeItem(`${movieData.nameRU}`);
        setSavedMovies((state) => state.filter((movie) => movie._id !== clickedSavedMovie._id));
        setFilteredSavedMovies((state) => state.filter((movie) => movie._id !== clickedSavedMovie._id));
      })
      .catch((err) => console.log(err));
  }

  /**
   * Функция для проверка наличия токена в localStorage.
   * При его наличии устанавливаем флаг isLoggedIn === true,
   * а также получаем данные текущего пользователя.
   */
  const checkUserToken = useCallback(() => {
    const token = localStorage.getItem("token");
    if (token) {
      isTokenValid(token)
        .then((userData) => {
          setCurrentUser(userData);
          setIsLoggedIn(true);
          history.push("/movies");
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  /**
   * Хук для для проверки наличия токена пользователя в LocalStorage при открытии сайта.
   */
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn, token, history]);

  /**
   * Обработчик авторизации пользователя.
   *
   * @param email - email, вводимый пользователем
   * @param password - пароль, вводимый пользователем
   */
  const handleLogin = (email, password) => {
    authorize(email, password)
      .then((userData) => {
        if (userData) {
          const { token } = userData;
          localStorage.setItem("token", token);
          setIsError(false);
          setIsLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
  }

  /**
   * Обработчик регистрации пользователя.
   *
   * @param name - имя, вводимое пользователем
   * @param email - email, вводимый пользователем
   * @param password - пароль, вводимый пользователем
   */
  const handleRegister = (name, password, email) => {
    register(name, password, email)
      .then(() => {
          setIsError(false);
          handleLogin(email, password);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
  }

  /**
   * Обработчик обновления данных пользователя.
   *
   * @param name - новое имя, вводимое пользователем
   * @param email - новый email, вводимый пользователем
   */
  const handleUpdateProfile = (name, email) => {
    updateUserData(name, email, token)
      .then((userData) => {
        setIsUpdated(true);
        setIsError(false);
        setCurrentUser(userData);
      })
      .catch((err) => {
        setIsError(true);
        setIsUpdated(true);
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setIsUpdated(false);
        }, 2000);
      });
  }

  /**
   * Обработчик выхода пользователя из аккаунта.
   */
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    history.push("/");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {headerPresence && <Header isLoggedIn={isLoggedIn}/>}
      <main className="content">
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
            path="/movies"
            movies={filteredMovies}
            handleSearch={handleSearch}
            handleSaveMovie={handleSaveMovie}
            handleRemoveMovie={handleRemoveMovie}
            isLoading={isLoading}
            component={Movies}
          />
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
            path="/savedmovies"
            savedMovies={savedMovies}
            filteredSavedMovies={filteredSavedMovies}
            handleSearch={handleSearch}
            handleRemoveMovie={handleRemoveMovie}
            isLoading={isLoading}
            component={SavedMovies}
          />
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
            path="/profile"
            component={Profile}
            isUpdated={isUpdated}
            isError={isError}
            handleUpdateProfile={handleUpdateProfile}
            handleLogout={handleLogout}
          />
            <Route exact path="/signin">
              <Login isError={isError} handleLogin={handleLogin}/>
            </Route>
            <Route exact path="/signup">
              <Register isError={isError} handleRegister={handleRegister}/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          <Route>
            {isLoggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Switch>
      </main>
      {footerPresence && <Footer/>}
    </CurrentUserContext.Provider>
  );
}

export default App;
