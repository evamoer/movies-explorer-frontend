import React, {useEffect, useState} from 'react';
import Preloader from "../Preloader/Preloader";
import Section from "../Section/Section";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Message from "../Message/Message";
import {
  defineNumberMoviesToShow,
  defineNumberMoviesToUpload,
  sliceMovies,
  checkIsLoadMoreActive
} from "../../utils/helpers";
import {messages} from "../../utils/constants";

/**
 * Movies - компонент с фильмами из BeatfilmMoviesApi по роуту "/movies".
 *
 * @param movies - массив с отфильтрованными по запросу фильмами из BeatfilmMoviesApi
 * @param handleSearch - обработчик поиска по всем фильмам
 * @param handleSaveMovie - обработчик добавления фильма в сохранённые
 * @param handleRemoveMovie - обработчик удаления фильма из сохранённых
 * @param isLoading - флаг для процесса обрбаотки запроса (статус: выполняется/выполнен)
 */
const Movies = ({ movies, handleSearch, handleSaveMovie, handleRemoveMovie, isLoading }) => {

  /**
   * Переменные для логики отображения фильмов в зависимости от разрешения экрана.
   */
  const [storagedMovies, setStoragedMovies] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]);
  const [numberMoviesToShow, setNumberMoviesToShow] = useState(0);
  const [numberMoviesToUpload, setNumberMoviesToUpload] = useState(0);
  const [isLoadMore, setIsLoadMore] = useState(true);

  /**
   * Хук для отображения фильмов:
   * из localStorage (при наличии) или отфильтрованных (при наличии),
   * если фильмы отсутствуют, то показывается сообщение "Ничего не найдено".
   *
   * Количество отображаемых фильмов и подгружаемых по кнопке "Ещё"
   * регулируется в зависимости от ширины экрана с помощью вспомогательных функций.
   */
  useEffect(() => {
    setNumberMoviesToShow(defineNumberMoviesToShow());
    setNumberMoviesToUpload(defineNumberMoviesToUpload());
    if (localStorage.getItem('movies')) {
      setStoragedMovies(JSON.parse(localStorage.getItem('movies')));
      setShowedMovies(sliceMovies(JSON.parse(localStorage.getItem('movies')), numberMoviesToShow));
      setIsLoadMore(checkIsLoadMoreActive(JSON.parse(localStorage.getItem('movies')), defineNumberMoviesToShow()));
    } else {
      setShowedMovies(sliceMovies(movies, numberMoviesToShow));
      setIsLoadMore(checkIsLoadMoreActive(movies, defineNumberMoviesToShow()));
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [movies, numberMoviesToUpload]);

  /**
   * Обработчик изменения ширины экрана:
   * изменяет количество подгружаемых видео.
   */
  const handleWindowResize = () => {
    setTimeout(() => {
      if (!!localStorage.getItem('movies')) {
        setNumberMoviesToUpload(defineNumberMoviesToUpload());
      }
    }, 500);
  };

  /**
   * Обработчик подгрузки фильмов по кику на кнопку "Ещё":
   * изменяет количество подгружаемых видео.
   * Фильмы берутся из localStorage (при наличии) или из отфильтрованных.
   */
  const handleLoadMore = () => {
    setNumberMoviesToShow(showedMovies.length + numberMoviesToUpload);
    if (localStorage.getItem('movies')) {
      setShowedMovies(sliceMovies(storagedMovies, (showedMovies.length + numberMoviesToUpload)));
      setIsLoadMore(checkIsLoadMoreActive(storagedMovies, (showedMovies.length + numberMoviesToUpload)));
    } else {
      setShowedMovies(sliceMovies(movies, (showedMovies.length + numberMoviesToUpload)));
      setIsLoadMore(checkIsLoadMoreActive(movies, (showedMovies.length + numberMoviesToUpload)));
    }
  };

  /**
   * Обработчик поискового запроса.
   *
   * @param searchValue - поисковое слово
   * @param isChecked - состояние чекбокса, определяющий длительность фильма
   */
  const handleSearchSubmit = (searchValue, isChecked) => {
    handleSearch(searchValue, isChecked);
  };

  /**
   * Обработчик сохранения фильма.
   *
   * @param movieData - объект с данными сохраняемого фильма
   * @param setIsSaved - функция установки/снятия флага "фильм сохранён" (здесь: установка).
   */
  const handleSaveButtonClick = (movieData, setIsSaved) => {
    handleSaveMovie(movieData, setIsSaved);
  };

  /**
   * Обработчик удаления фильма.
   *
   * @param movieData - объект с данными удаляемого фильма
   * @param setIsSaved - функция установки/снятия флага "фильм сохранён" (здесь: снятие).
   */
  const handleRemoveButtonClick = (movieData, setIsSaved) => {
    handleRemoveMovie(movieData, setIsSaved);
  };

  return (
    <Section sectionName="movies" sectionTitleText={null}>
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        showedMovies={showedMovies}
      />
      {
        isLoading
        ? <Preloader />
        : (showedMovies.length)
          ? <MoviesCardList
              movies={showedMovies}
              handleSaveButtonClick={handleSaveButtonClick}
              handleRemoveButtonClick={handleRemoveButtonClick}
              handleLoadMore={handleLoadMore}
              isLoadMore={isLoadMore}
            />
          : <Message text={messages.noMoviesText}/>
      }
    </Section>
  );
};

export default Movies;
