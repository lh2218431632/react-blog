import React, { useEffect, useState, useRef, useMemo } from "react";
import { Link, Outlet } from "react-router-dom";
import { Table, Input, Select } from "antd";
import getData from "../../data/jiraSoftware";
import Style from "./index.module.scss";

//缓存数据
let cacheData = [];

function Project(props) {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(true);

  const columns = useMemo(
    () => [
      {
        title: "名称",
        dataIndex: "name",
        key: "name",
        render: (text, record, index) => {
          const { path } = record;
          return (
            <Link
              to={path}
              onClick={(e) => {
                setFlag(false); // Update state here
              }}
            >
              {text}
            </Link>
          );
        },
      },
      // ...other columns
      {
        title: "部门",
        dataIndex: "department",
        key: "department",
      },
      {
        title: "负责人",
        dataIndex: "manager",
        key: "manager",
      },
      {
        title: "时间",
        dataIndex: "time",
        key: "time",
      },
    ],
    []
  );
  const selectRef = useRef();
  useEffect(() => {
    getData().then((res) => {
      setData(res);
      cacheData = res;
    });
    selectRef.current = "manager";
  }, []);
  useEffect(() => {
    window.addEventListener("popstate", (e) => {
      const { pathname } = window.location;
      if (pathname === "/project/") {
        setFlag(true);
      }
    });
    return () => {
      window.removeEventListener("popstate", (e) => {
        console.log("removeEventListener", e);
      });
    };
  }, []);
  function handleChange(value) {
    console.log(`selected ${value}`);
    selectRef.current = value;
  }
  function handleInputChange(e) {
    let newData = cacheData.filter((item) => {
      let regex = new RegExp(e.target.value, "i"); // "i" makes it case insensitive
      return item[selectRef.current].match(regex);
    });
    console.log(newData);
    setData(newData);
  }
  return (
    <div>
      {flag && (
        <div>
          <h1>项目列表</h1>
          <Input className={Style.antd_input} onChange={handleInputChange} />
          <Select
            defaultValue="manager"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "manager", label: "负责人" },
              { value: "name", label: "名称" },
              { value: "department", label: "部门" },
            ]}
          />
          <Table dataSource={data} columns={columns} pagination={false}></Table>
        </div>
      )}
      {!flag && <Outlet />}
    </div>
  );
}

export default Project;
