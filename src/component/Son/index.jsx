import React from "react";
import themeContext from "../../context";

class Son extends React.Component {
  static contextType = themeContext;
  constructor(props) {
    super(props);
  }

  render() {
    return <div>我是Son,使用了context，值为:{this.context}</div>;
  }
}

export default Son;
