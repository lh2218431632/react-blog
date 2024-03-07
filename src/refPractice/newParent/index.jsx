import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { inputRef } = this.props;
    return (
      <>
        <input ref={inputRef}></input>
      </>
    );
  }
}

class NewParent extends React.Component {
  constructor(props) {
    super(props);
    const { onClick } = this.props;
    this.state = {
      count: 5,
    };
    onClick(this.state);
  }

  componentDidMount() {
    console.log("this.inputRef", { ref: this.inputRef });
  }
  render() {
    return (
      <>
        <Child
          inputRef={(e) => {
            this.inputRef = e;
          }}
        ></Child>
      </>
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
  }

  //想要获取子组件的数据，可以在父组件定义一个回到函数，并且在在回调函数定义一个参数，这个参数就是子组件传递过来的数据
  handleClick = (data) => {
    console.log("我是子组件的数据", data);
  };

  render() {
    return (
      <>
        <NewParent onClick={this.handleClick}></NewParent>
      </>
    );
  }
}

function getAuth() {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved(true);
    }, 1000);
  });
}

function requireAuth(Component) {
  return class AuthComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLogin: false,
      };
    }
    componentDidMount() {
      getAuth().then((res) => {
        if (res) {
          this.setState({
            isLogin: true,
          });
        }
      });
    }
    render() {
      const { isLogin } = this.state;
      return isLogin ? <Component {...this.props} /> : <div>请登录</div>;
    }
  };
}

function Login({ color }) {
  return (
    <>
      <div className={color}>用户管理系统</div>
    </>
  );
}

function withColor(Component) {
  return class WithColor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: "red",
      };
    }
    render() {
      const { isRed } = this.props;
      return <Component {...this.props} color={isRed ? "black" : "red"} />;
    }
  };
}

const AuthLogin = withColor(requireAuth(Login));

class DataSource {
  constructor() {
    this.personList = [];
  }
  addPerson(person) {
    this.personList.push(person);
  }
  broadcast(data) {
    this.personList.forEach((person) => {
      person.receiveMessage(data);
    });
  }
}

class Person1 {
  constructor() {
    this.name = "person1";
  }

  receiveMessage(data) {
    console.log(`我是${this.name}`, data);
  }
}

class Person2 {
  constructor() {
    this.name = "person2";
  }
  receiveMessage(data) {
    console.log(`我是${this.name}`, data);
  }
}

class Person3 {
  constructor() {
    this.name = "person3";
  }
  receiveMessage(data) {
    console.log(`我是${this.name}`, data);
  }
}

let person_1 = new Person1();
let person_2 = new Person2();
let person_3 = new Person3();
let dataSource = new DataSource();
dataSource.addPerson(person_1);
dataSource.addPerson(person_2);
dataSource.addPerson(person_3);
dataSource.broadcast("hello");

let person5 = { name: "linhao" };
setTimeout(() => {
  person5.name = "dkajdkasjk";
}, 3000);
class Person5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: person5,
      flag: false,
    };
    console.log("执行几次？");
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        flag: true,
      });
    }, 5000);
  }
  render() {
    const { person } = this.state;

    return (
      <>
        <div>{person.name}</div>
      </>
    );
  }
}

export default NewParent;
export { Parent, AuthLogin, Person5 };
