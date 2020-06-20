import React from "react";
import { GlobalStyleComponent } from "./style";

const GlobalStyleWrapper = (Component) => (props) => (
  <div>
    <Component {...props} />
    <GlobalStyleComponent />
  </div>
);

export default GlobalStyleWrapper;
