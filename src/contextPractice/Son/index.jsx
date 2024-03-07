import React from "react";
import themeContext, { colorContext } from "../../context";

function Son() {
  return (
    <themeContext.Consumer>
      {(theme) => {
        return (
          <colorContext.Consumer>
            {(color) => {
              return (
                <div>
                  <h1>我是son</h1>
                  <p>theme: {theme}</p>
                  <p>color: {color}</p>
                </div>
              );
            }}
          </colorContext.Consumer>
        );
      }}
    </themeContext.Consumer>
  );
}

export default Son;
