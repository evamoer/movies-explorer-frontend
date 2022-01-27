import React, { useEffect, useState } from 'react';
import Preloader from "../Preloader/Preloader";
import Section from "../Section/Section";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { defaultMovies } from "../../utils/moviesSettings";

const Movies = () => {

  /*
  захардкоженные данные для отображения вёрстки согласно макету;
  при uploadMoviesStatus === true появляется компонент Preloader,
  при uploadMoviesStatus === false появляются загруженные фильмы;
  а также изменение количества отображаем фильмов при разных разрешениях;
  код будет изменён на этапе 4;
  */

  let uploadMoviesStatus = false;
  let updateButtonStatus = true;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  function handleResize() {
    if (window.innerWidth <= 767) {
      setMovies(defaultMovies.filter((movie, index) => index < 5));
    } else if ((window.innerWidth >= 768)  && (window.innerWidth < 1280)) {
      setMovies(defaultMovies.filter((movie, index) => index < 8));
    } else {
      setMovies(defaultMovies);
    }
  }

  return (
    <Section sectionName="movies" sectionTitleText={null}>
      <SearchForm/>
      { (uploadMoviesStatus)
        ? <Preloader/>
        : <MoviesCardList movies={movies} updateButtonStatus={updateButtonStatus}/>
      }
    </Section>
  );
};

export default Movies;
