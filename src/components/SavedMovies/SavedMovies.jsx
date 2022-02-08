import React, {useState, useEffect} from 'react';
import Preloader from "../Preloader/Preloader";
import Section from "../Section/Section";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Message from "../Message/Message";

/**
 * SavedMovies - компонент с сохранёнными пользователем фильмами по роуту "/savedmovies".
 *
 * @param savedMovies - массив с сохранёнными фильмами пользователя
 * @param filteredSavedMovies - массив с отфильтрованными фильмами
 * @param isLoading - флаг для процесса обрбаотки запроса (статус: выполняется/выполнен)
 * @param handleSearch - обработчик поиска по всем фильмам
 * @param handleRemoveMovie - обработчик удаления фильма из сохранённых
 */
const SavedMovies = ({ savedMovies, filteredSavedMovies, isLoading, handleSearch, handleRemoveMovie }) => {

  /**
   * Переменная с отображаемыми фильмами.
   */
  const [showedMovies, setShowedMovies] = useState([]);

  /**
   * Флаг, отображающий был ли поиск или нет.
   */
  const [isSearched, setIsSearched] = useState(false);

  /**
   * Хук для отображения фильмов:
   * если не было поиска, показываем все сохранённые фильмы,
   * если был, то отфильтрованные.
   */
  useEffect(() => {
    if (!isSearched) {
      setShowedMovies(savedMovies);
    } else {
      setShowedMovies(filteredSavedMovies);
    }
  }, [isSearched, filteredSavedMovies]);

  /**
   * Обработчик поискового запроса.
   *
   * @param searchValue - поисковое слово
   * @param isChecked - состояние чекбокса, определяющий длительность фильма
   */
  const handleSearchSubmit = (searchValue, isChecked) => {
   handleSearch(searchValue, isChecked);
   setIsSearched(true);
  };

  /**
   * Обработчик удаления фильма.
   *
   * @param movieData - объект с данными удаляемого фильма
   * @param setIsSaved - функция установки/снятия флага "фильм сохранён" (здесь: снятие).
   */
  const handleRemoveButtonClick = (movieData, setIsSaved) => {
    handleRemoveMovie(movieData, setIsSaved);
  }

  return (
    <Section sectionName="savedmovies" sectionTitleText={null}>
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        showedMovies={savedMovies}
      />
      { isLoading
        ? <Preloader />
        : showedMovies.length
          ? <MoviesCardList
              movies={showedMovies}
              handleRemoveButtonClick={handleRemoveButtonClick}
            />
          : <Message text={"Ничего не найдено"}/>
      }
    </Section>
  );
};

export default SavedMovies;
