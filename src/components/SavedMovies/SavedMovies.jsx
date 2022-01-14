import React, {useState} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import banksypath1 from "../../images/banksy.png";
import banksypath2 from "../../images/banksy-2.png";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
const defaultMovies = [
  {
    name: 'В погоне за Бенкси',
    duration: '27 минут',
    poster: banksypath1,
    isSaved: true,
  },
  {
    name: 'В погоне за Бенкси',
    duration: '27 минут',
    poster: banksypath2,
    isSaved: false,
  }]

const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState(defaultMovies);
  const moreFilms = false;
  return (
    <section className="movies section">
      <SearchForm/>
      {!(savedMovies.length === 0) && (
        <MoviesCardList movies={savedMovies} moreFilms={moreFilms}/>
      )}
    </section>
  );
};

export default SavedMovies;
