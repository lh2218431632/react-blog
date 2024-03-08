import React, { useRef, useEffect, useState } from "react";
import { Input, Button, ConfigProvider, message } from "antd";
import { useNavigate } from "react-router-dom";
import { getPassword } from "../../data/jiraSoftware";
import Style from "./index.module.scss";
function Login(props) {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const nameRef = useRef();
  const passRef = useRef();
  function handleClick() {
    // localStorage.setItem("name", nameRef.current.input.value);
    // localStorage.setItem("pass", passRef.current.input.value);
    // console.log("nameRef", nameRef.current.input.value);
    // console.log("passRef", passRef.current.input.value);
    getPassword().then((res) => {
      if (
        res.name !== nameRef.current.input.value ||
        res.password !== passRef.current.input.value
      ) {
        messageApi.open({
          type: "error",
          content: "This is an error message",
        });
        return;
      } else {
        messageApi.open({
          type: "success",
          content: "This is a success message",
        });
        navigate("/project");
      }
    });
  }
  useEffect(() => {}, []);
  return (
    <>
      {contextHolder}
      <div className={Style.container}>
        <div className={Style.item}>
          <h1>请登录</h1>
          <div>登录界面</div>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token，影响范围大
                activeBg: "#00b96b",
                colorBgContainer: "#597ef7",
              },
            }}
          >
            <Input ref={nameRef} className={Style.ant_input} />
          </ConfigProvider>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token，影响范围大
                activeBg: "#00b96b",
                colorBgContainer: "#597ef7",
              },
            }}
          >
            <Input.Password ref={passRef} className={Style.ant_input} />
          </ConfigProvider>
          <Button onClick={handleClick} type="primary">
            登录
          </Button>
        </div>
      </div>
    </>
  );
}

export default Login;
