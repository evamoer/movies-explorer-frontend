import React from "react";
import { Route, Redirect } from "react-router-dom";

/**
 * ProtectedRoute - НОС-компонент с защищённым маршрутом.
 */

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {() =>
        props.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute;
