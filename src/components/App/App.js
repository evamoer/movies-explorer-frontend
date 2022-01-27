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

    /*
  захардкоженные данные с помощью useLocation для отображения вёрстки согласно макету;
  можно изменить состояние loggedIn с false на true и обратно;
  код будет изменён на этапе 4;
  */

  const location = useLocation();
  let loggedIn = true;

  return (
    <>
      {((location.pathname === '/') || (location.pathname === '/movies') || (location.pathname === '/savedmovies') || (location.pathname === '/profile')) && <Header loggedIn={loggedIn}/>}
      <main className="content">
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
      {((location.pathname === '/') || (location.pathname === '/movies') || (location.pathname === '/savedmovies')) && <Footer/>}
    </>
  );
}

export default App;
