import React from "react";
import Son from "../Son";
import themeContext from "../../context";

class Children extends React.Component {
  static contextType = themeContext;
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>我是Children {this.context}</h1>
        <Son />
      </div>
    );
  }
}

export default Children;
