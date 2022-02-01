import React, {useEffect, useState} from 'react';
import Preloader from "../Preloader/Preloader";
import Section from "../Section/Section";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Message from "../Message/Message";
import { checkIsLoadMoreActive, defineNumberMoviesToShow, defineNumberMoviesToUpload, sliceMovies } from '../../utils/helpers';

const Movies = ({ isLoading, movies, handleFindMovies }) => {

  const [userMovies, setUserMovies] = useState([]);
  const [numberMoviesToShow, setNumberMoviesToShow] = useState(0);
  const [numberMoviesToUpload, setNumberMoviesToUpload] = useState(0);
  const [isLoadMore, setIsLoadMore] = useState(true);

  useEffect(() => {
    setNumberMoviesToShow(defineNumberMoviesToShow());
    setNumberMoviesToUpload(defineNumberMoviesToUpload());
    setUserMovies(sliceMovies(movies, numberMoviesToShow));
    setIsLoadMore(checkIsLoadMoreActive(numberMoviesToShow, numberMoviesToUpload, movies));

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [movies]);

  const handleWindowResize = () => {
    setTimeout(() => {
      setNumberMoviesToUpload(defineNumberMoviesToUpload())
    }, 1000);
  };

  const handleSearchSubmit = (searchValue) => {
    handleFindMovies(searchValue);
  };

  const handleLoadMore = () => {
    setIsLoadMore(checkIsLoadMoreActive(numberMoviesToShow, numberMoviesToUpload, movies));
    setUserMovies(sliceMovies(movies, numberMoviesToShow + numberMoviesToUpload));
    setNumberMoviesToShow(numberMoviesToShow + numberMoviesToUpload);
  };

  return (
    <Section sectionName="movies" sectionTitleText={null}>
      <SearchForm handleSearchSubmit={handleSearchSubmit}/>
      { isLoading
        ? ( <Preloader />)
        : ( (userMovies.length) ? (<MoviesCardList movies={userMovies} handleLoadMore={handleLoadMore} updateButtonStatus={isLoadMore}/>) : (<Message text={"Ничего не найдено"}/>))
      }
    </Section>
  );
};

export default Movies;
