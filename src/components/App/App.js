import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import { getBeatfilmMovies } from "../../utils/MoviesApi";
import { searchMovies } from "../../utils/helpers";

const App = () => {
  const location = useLocation();
  let loggedIn = true;

  const [currentUser, setCurrentUser] = useState({name: '', email: '', _id: ''});
  const [beatfilmMovies, setBeatfilmMovies] = useState([])
  const [userMovies, setUserMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getBeatfilmMovies()
      .then(beatfilmMovies => setBeatfilmMovies(beatfilmMovies))
      .catch(err => console.log(err))
  }, [])

  const handleFindMovies = (searchValue) => {
    setIsLoading(true);
    const filteredMovies = searchMovies(beatfilmMovies, searchValue);
    setUserMovies(filteredMovies);
    setIsLoading(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {((location.pathname === '/') || (location.pathname === '/movies') || (location.pathname === '/savedmovies') || (location.pathname === '/profile')) && <Header loggedIn={loggedIn}/>}
      <main className="content">
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
            <Route exact path="/movies">
              <Movies movies={userMovies} isLoading={isLoading} handleFindMovies={handleFindMovies}/>
            </Route>
            <Route exact path="/savedmovies">
              <SavedMovies/>
            </Route>
            <Route exact path="/profile">
              <Profile/>
            </Route>
            <Route exact path="/signin">
              <Login/>
            </Route>
            <Route exact path="/signup">
              <Register/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
        </Switch>
      </main>
      {((location.pathname === '/') || (location.pathname === '/movies') || (location.pathname === '/savedmovies')) && <Footer/>}
    </CurrentUserContext.Provider>
  );
}

export default App;
