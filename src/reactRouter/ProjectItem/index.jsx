import React from "react";
import { Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
import Style from "./index.module.scss";
function ProjectItem() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  function handleKanBan() {
    navigate(`/project/${projectId}/kanban`);
  }
  function handleTask() {
    navigate(`/project/${projectId}/epic`);
  }
  return (
    <>
      <div className={Style.project_header}>
        <div>Logo</div>
        <div>项目</div>
        <div>组员</div>
        <div>hi, linhao{projectId}</div>
      </div>
      <div className={Style.project_container}>
        <div className={Style.project_container_left}>
          <button onClick={handleKanBan}>看板</button>
          <button onClick={handleTask}>任务组</button>
        </div>
        <div className={Style.project_container_right}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
