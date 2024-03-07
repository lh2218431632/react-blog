import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Style from "./index.module.scss";
function ProjectItem() {
  const { projectId } = useParams();
  console.log("id", projectId);
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
          <button>看板</button>
          <button>任务组</button>
        </div>
        <div className={Style.project_container_right}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
