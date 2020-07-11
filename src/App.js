import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "pages/home";
import ProtectedRoute from "./components/common/protected-route";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/protected" component={Home} />
        <Route path="" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
