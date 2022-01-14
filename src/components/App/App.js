import React from 'react';
import {Route, Switch, useLocation} from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header/>
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
          {/*  <Route exact path="/signin">*/}
          {/*    <Login/>*/}
          {/*  </Route>*/}
          {/*  <Route exact path="/signup">*/}
          {/*    <Register/>*/}
          {/*  </Route>*/}
        </Switch>
      </main>
      {(location.pathname !== '/profile') || (location.pathname !== '/signin') || (location.pathname !== '/signup') && <Footer/>}
    </>
  );
}

export default App;
