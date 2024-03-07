import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
// import Parent from "./component/Parent";
import ParentCar from './component/ParentCar'
import Apple from './component/Apple'
import ErrorBoundary from './component/ErrorBoundary'
// import Parent from './contextPractice/Parent'
// import Parent from './refPractice/Parent'
// import themeContext, { colorContext } from './context/index'
import NewParent, { Parent, AuthLogin, Person5 } from './refPractice/newParent'
import MyHoc from './hocPratice/index.jsx'
import FriendStatus from './useEffectPratice/index.jsx'
// import App from './router/index.jsx'
// import './config/history.js'
import App from './reactRouter/index.jsx'
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Apple count={2} /> */}
    {/* <ErrorBoundary>
      <Apple count={2} />
    </ErrorBoundary> */}
    {/* <themeContext.Provider value="dark">
      <colorContext.Provider value="white">
        <Parent />
      </colorContext.Provider>
    </themeContext.Provider> */}
    {/* <FriendStatus id={1} /> */}
    <App />
  </React.StrictMode>
);
