import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
  }

  //   componentWillMount() {
  //     console.log("Component WILL MOUNT!");
  //   }
  //   componentDidMount() {
  //     console.log("Component DID MOUNT!");
  //   }
  componentWillReceiveProps(newProps) {
    console.log("arguments", arguments);
    console.log("Component WILL RECEIVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("arguments", arguments);
    console.log("shouldComponentUpdate", this.props.count);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("arguments", arguments);

    console.log("Component WILL UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("arguments");

    console.log("Component DID UPDATE!");
  }
  //   componentWillUnmount() {
  //     console.log("Component WILL UNMOUNT!");
  //   }
  //   componentDidMount() {
  //     console.log("componentDidMount");
  //   }

  render() {
    console.log("render");
    return <div>{this.props.count}</div>;
  }
}

export default Car;
