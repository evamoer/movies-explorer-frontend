import React, {useEffect, useState} from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ movies }) => {
  /*
  захардкоженные данные для отображения вёрстки согласно макету;
  изменение количества отображаем фильмов при разных разрешениях;
  при loadFilmsButtonStatus === true появляется кнопка "Ещё",
  при loadFilmsButtonStatus === false исчезает кнопка "Ещё";
  код будет изменён на этапе 4;
  */
  let uploadButtonStatus = true;
  const [showMovies, setShowMovies] = useState([]);

  const handleArrayLength = () => {
    if (window.innerWidth <= 767) {
      setShowMovies([...movies.filter((movie, index) => index < 5)]);
    }
    else if (768 < window.innerWidth < 1280) {
      setShowMovies([...movies.filter((movie, index) => index < 8)]);
    } else {
      setShowMovies([...movies]);
    }
  }

  useEffect(() => {
    handleArrayLength();
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleArrayLength);
    return () => {
      window.removeEventListener('resize', handleArrayLength);
    }
  }, [window.innerWidth, showMovies]);

  return (
    <>
      <ul className="movieslist">
        {showMovies.map((movie) => (
          <MoviesCard key={movie.poster} name={movie.name} duration={movie.duration} poster={movie.poster} isSaved={movie.isSaved}/>
        ))}
      </ul>
        <div className="movieslist__more-container">
          {uploadButtonStatus && <button className="movieslist__more-button">Ещё</button>}
        </div>
    </>
  );
};

export default MoviesCardList;
