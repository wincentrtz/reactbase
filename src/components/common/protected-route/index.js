import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ rest, component: Component }) => (
  <Route {...rest} render={() => renderComponent(Component)} />
);

const renderComponent = props =>
  fakeAuth.isAuthenticated === true ? (
    <Component {...props} />
  ) : (
    <Redirect to="/" />
  );

const fakeAuth = () => ({
  isAuthenticated: false
});

export default ProtectedRoute;
