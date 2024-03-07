import React, { useRef, useEffect } from "react";
import { Input, Button, ConfigProvider } from "antd";
import Style from "./index.module.scss";
function Login(props) {
  const nameRef = useRef();
  const passRef = useRef();
  function handleClick() {
    console.log("nameRef", nameRef.current.input.value);
    console.log("passRef", passRef.current.input.value);
  }
  useEffect(() => {
    console.log("nameRef", nameRef.current);
    console.log("passRef", passRef.current);
  }, []);
  return (
    <>
      <div className={Style.container}>
        <div className={Style.item}>
          <h1>请登录</h1>
          <div>登录界面</div>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token，影响范围大
                activeBg: "#00b96b",
                colorBgContainer: "#00b96b",
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
                colorBgContainer: "#00b96b",
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
