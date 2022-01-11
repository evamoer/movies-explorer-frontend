import React, {useState} from 'react';
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <SearchForm/>
      {!movies.length === 0 && (
        <MoviesCardList/>
      )}
    </>
  );
};

export default Movies;
