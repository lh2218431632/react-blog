import React from "react";
import Car from "../Car";

class ParentCar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      open: "close",
    };
  }

  componentDidMount() {}

  handleClick = () => {
    const { open } = this.state;
    this.setState({
      open: open === "close" ? "open" : "close",
    });
  };

  render() {
    const { count, open } = this.state;
    return (
      <>
        <h1>{open}</h1>
        <Car count={count} />
        <button onClick={this.handleClick}>开关</button>
      </>
    );
  }
}

export default ParentCar;
