import React from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";

const App = () => {
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
          {/*  <Route exact path="/savedmovies">*/}
          {/*    <SavedMovies/>*/}
          {/*  </Route>*/}
          {/*  <Route exact path="/profile">*/}
          {/*    <Profile/>*/}
          {/*  </Route>*/}
          {/*  <Route exact path="/signin">*/}
          {/*    <Login/>*/}
          {/*  </Route>*/}
          {/*  <Route exact path="/signup">*/}
          {/*    <Register/>*/}
          {/*  </Route>*/}
        </Switch>
      </main>
      <Footer/>
    </>
  );
}

export default App;
