const data = [
  {
    key: "骑手管理",
    name: "骑手管理",
    department: "外卖组",
    manager: "张三",
    path: "/project/1",
    time: "2020-11-10",
  },
  {
    key: "团购APP",
    name: "团购APP",
    department: "团购组",
    manager: "李四",
    path: "/project/2",
    time: "2020-11-11",
  },
  {
    key: "物料管理系统",
    name: "物料管理系统",
    department: "物料组",
    manager: "王五",
    path: "/project/3",
    time: "2020-11-12",
  },
  {
    key: "总部管理系统",
    name: "总部管理系统",
    department: "总部组",
    manager: "赵六",
    path: "/project/4",
    time: "2020-11-13",
  },
  {
    key: "送餐路线规划系统",
    name: "送餐路线规划系统",
    department: "外卖组",
    manager: "张三",
    path: "/project/5",
    time: "2020-11-14",
  },
];

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
}

export default getData;
