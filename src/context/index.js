import { createContext } from "react";

let themeContext = createContext("light");

let colorContext = createContext("red");

export default themeContext;

export { colorContext };
