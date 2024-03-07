import React from "react";
import { getFruit } from "../../data";
class Apple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitList: [],
    };
  }

  componentDidMount() {
    getFruit().then((data) => {
      console.log("data", data);
      this.setState({
        fruitList: data,
      });
    });
  }

  render() {
    const { fruitList } = this.state;
    console.log("fruitList", fruitList);
    throw "error";
    if (fruitList.length === 0) {
      return (
        <>
          <div>我没有水果</div>
        </>
      );
    }
    return (
      <>
        <ul>
          {fruitList.map((item) => {
            return (
              <li
                key={item.name}
              >{`name - ${item.name} price - ${item.price}`}</li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Apple;
