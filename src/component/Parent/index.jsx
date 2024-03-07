import React from "react";
import Children from "../Children";
import themeContext from "../../context";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
    };
  }
  handleClick = () => {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark",
    });
  };
  render() {
    return (
      <themeContext.Provider value={this.state.theme}>
        <h1>我是parent</h1>
        <button onClick={this.handleClick}>切换主题</button>
        <Children />
      </themeContext.Provider>
    );
  }
}

export default Parent;
