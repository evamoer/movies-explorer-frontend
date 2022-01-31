import React, {useState} from 'react';
import Preloader from "../Preloader/Preloader";
import Section from "../Section/Section";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Message from "../Message/Message";

const Movies = ({ isLoading, movies, handleFindMovies }) => {

  let updateButtonStatus = true;

  const handleSearchSubmit = (searchValue) => {
    handleFindMovies(searchValue);
  }

  return (
    <Section sectionName="movies" sectionTitleText={null}>
      <SearchForm handleSearchSubmit={handleSearchSubmit}/>
      {
        (movies.length)
          ? ( isLoading ? (<Preloader />) : (<MoviesCardList movies={movies} updateButtonStatus={updateButtonStatus}/>) )
          : ( <Message text={"Ничего не найдено"}/>)
      }
    </Section>
  );
};

export default Movies;
