import React from "react";

class Route {
  constructor() {}
  goPath(url) {
    history.go(url);
  }
}

const route = new Route();

const RouterContext = React.createContext(route);

export default RouterContext;
