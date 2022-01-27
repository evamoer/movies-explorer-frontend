import React from 'react';
import Preloader from "../Preloader/Preloader";
import Section from "../Section/Section";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { defaultMovies } from "../../utils/moviesSettings";

const SavedMovies = () => {

  /*
  захардкоженные данные для отображения вёрстки согласно макету;
  код будет изменён на этапе 4;
  */

  let uploadMoviesStatus = false;
  let updateButtonStatus = false;
  const savedMovies = defaultMovies.filter((movie, index) => index < 3)

  return (
    <Section sectionName="savedmovies" sectionTitleText={null}>
        <SearchForm/>
        { (uploadMoviesStatus)
        ? <Preloader/>
        : <MoviesCardList movies={savedMovies} updateButtonStatus={updateButtonStatus}/>
        }
    </Section>
  );
};

export default SavedMovies;
