import React, { useEffect, useState } from 'react';
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { defaultMovies } from "./moviesSettings";
import Section from "../Section/Section";
const moviesSectionClassName = 'section_type_movies';
const moviesContentClassName = 'movies';

const Movies = () => {

  /*
  захардкоженные данные для отображения вёрстки согласно макету;
  при needMorefilms === true появляется компонент Preloader,
  при needMorefilms === false появляются загруженные фильмы;
  код будет изменён на этапе 4;
  */

  const [movies, setMovies] = useState([]);
  const [needMoreFilms, setNeedMorefilms] = useState(false);

  useEffect(() => {
    setMovies([...defaultMovies]);
  }, []);

  return (
    <Section
      sectionClassName={moviesSectionClassName}
      sectionContentClassName={moviesContentClassName}
      sectionTitle={null}
      sectionTitleClassName={null}>
      <SearchForm/>
      { (!needMoreFilms)
        ? <MoviesCardList movies={movies}/>
        : <Preloader/>
      }
    </Section>
  );
};

export default Movies;
