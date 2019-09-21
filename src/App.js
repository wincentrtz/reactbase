import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "pages/home";
import ProtectedRoute from "./components/common/protected-route";

const App = () => {
  return (
    <Switch>
      <ProtectedRoute path="/protected" component={Home} />
      <Route path="" component={Home} />
    </Switch>
  );
};

export default App;
