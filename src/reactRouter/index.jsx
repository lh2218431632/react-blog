import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login";
import Project from "./Project";
import ProjectItem from "./ProjectItem";
import Kanban from "./KanBan";
import Epic from "./Epic";
function Test() {
  return <Navigate replace to="/login" />;
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Test}></Route>
          <Route index path="/login" Component={Login}></Route>
          <Route path="/project" Component={Project}>
            <Route path=":projectId" Component={ProjectItem}>
              <Route path="kanban" Component={Kanban}></Route>
              <Route path="epic" Component={Epic}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
