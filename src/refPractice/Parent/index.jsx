import React from "react";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <input ref={this.inputRef}></input>
        <button onClick={this.focusInput}>聚焦</button>
      </div>
    );
  }
}

export default Parent;
