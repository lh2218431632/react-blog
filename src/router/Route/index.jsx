import React from "react";
import { useContext } from "react";
import RouterContext from "../../context/RouterContext";
function Route({ path, component: Component }) {
  const url = useContext(RouterContext);
  return <>{url === path ? <Component /> : null}</>;
}

export default Route;
