import React, {useState} from 'react';
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import banksypath1 from '../../images/banksy.png';
import banksypath2 from '../../images/banksy-2.png';
import banksypath3 from '../../images/banksy-3.png';
import banksypath4 from '../../images/banksy-4.png';
import banksypath5 from '../../images/banksy-5.png';
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
  },
  {
    name: 'В погоне за Бенкси',
    duration: '27 минут',
    poster: banksypath3,
    isSaved: false,
  },
  {
    name: 'В погоне за Бенкси',
    duration: '27 минут',
    poster: banksypath4,
    isSaved: true,
  },
  {
    name: 'В погоне за Бенкси',
    duration: '27 минут',
    poster: banksypath5,
    isSaved: false,
  },
];

const Movies = () => {
  const [movies, setMovies] = useState(defaultMovies);
  const moreFilms = true;
  return (
    <section className="movies section">
      <SearchForm/>
      {!(movies.length === 0) && (
        <MoviesCardList movies={movies} moreFilms={moreFilms}/>
      )}
    </section>
  );
};

export default Movies;
