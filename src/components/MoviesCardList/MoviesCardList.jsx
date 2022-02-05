import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

/**
 * MoviesCardList - компонент списка с карточками фильма.
 *
 * @param movies - массив с отфильтрованными по запросу фильмами из BeatfilmMoviesApi
 * @param handleSaveButtonClick - обработчик добавления фильма в сохранённые
 * @param handleRemoveButtonClick - обработчик удаления фильма из сохранённых
 * @param handleLoadMore - обработчик подгрузки фильмов
 * @param isLoadMore - флаг статуса кнопки "Ещё"
 */
const MoviesCardList = ({ movies, handleSaveButtonClick, handleRemoveButtonClick, handleLoadMore, isLoadMore }) => {

  return (
    <>
      <ul className="movieslist">
        { movies.map((movie) => (
            <MoviesCard
              key={movie?._id || movie.id}
              country={(movie.country === null) ? 'N/A' : movie.country}
              description={movie.description}
              director={movie.director}
              duration={movie.duration}
              movieId={movie?.id || movie.movieId}
              image={movie.image?.url || movie.image}
              nameEN={movie.nameEN}
              nameRU={movie.nameRU}
              trailerLink={movie?.trailerLink || movie.trailer}
              thumbnail={movie?.thumbnail || movie.image.formats.thumbnail.url }
              year={movie.year}
              owner={movie?.owner || ''}
              _id={movie?._id || ''}
              handleSaveButtonClick={handleSaveButtonClick}
              handleRemoveButtonClick={handleRemoveButtonClick}/>
        ))}
      </ul>
        <div className="movieslist__more-container">
          { isLoadMore && <button className="movieslist__more-button" onClick={handleLoadMore}>Ещё</button> }
        </div>
    </>
  );
};

export default MoviesCardList;
