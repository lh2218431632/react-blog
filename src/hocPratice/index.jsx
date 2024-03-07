import React from "react";

function withHoc(WarppedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      console.log("props", props.myprops);
    }

    render() {
      return (
        <WarppedComponent
          {...this.props}
          ref={this.props.myprops}
        ></WarppedComponent>
      );
    }
  };
}

class Color extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>我是Color</h1>
        <h1>我的名字是{this.props.name}</h1>
      </div>
    );
  }
}

const WithColor = withHoc(Color);

class MyHoc extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    console.log("this.myRef", this.myRef);
  }
  render() {
    return (
      <>
        <WithColor myprops={this.myRef} name="林浩"></WithColor>
      </>
    );
  }
}

export default MyHoc;
