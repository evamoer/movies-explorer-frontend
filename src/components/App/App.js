import React from 'react';
import {Route, Switch, useLocation} from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";

const App = () => {
  const location = useLocation();
  return (
    <>
      {((location.pathname === '/') || (location.pathname === '/movies') || (location.pathname === '/savedmovies') || (location.pathname === '/profile')) && <Header/>}
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
            <Route exact path="/movies">
              <Movies/>
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
      {((location.pathname !== '/profile') || (location.pathname !== '/signin') || (location.pathname !== '/signup')) && <Footer/>}
    </>
  );
}

export default App;
