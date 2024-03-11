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

const data2 = {
  name: "2218431632@qq.com",
  password: "lh990210",
};

const data3 = [
  {
    id: "item-1",
    content: "item1",
  },
  {
    id: "item-2",
    content: "item2",
  },
  {
    id: "item-3",
    content: "item3",
  },
  {
    id: "item-4",
    content: "item4",
  },
  {
    id: "item-5",
    content: "item5",
  },
  {
    id: "item-6",
    content: "item6",
  },
  {
    id: "item-7",
    content: "item7",
  },
  {
    id: "item-8",
    content: "item8",
  },
  {
    id: "item-9",
    content: "item9",
  },
  {
    id: "item-10",
    content: "item10",
  },
  {
    id: "item-11",
    content: "item11",
  },
  {
    id: "item-12",
    content: "item12",
  },
  {
    id: "item-13",
    content: "item13",
  },
  {
    id: "item-14",
    content: "item14",
  },
  {
    id: "item-15",
    content: "item15",
  },
  {
    id: "item-16",
    content: "item16",
  },
  {
    id: "item-17",
    content: "item17",
  },
  {
    id: "item-18",
    content: "item18",
  },
  {
    id: "item-19",
    content: "item19",
  },
  {
    id: "item-20",
    content: "item20",
  },
  {
    id: "item-21",
    content: "item21",
  },
  {
    id: "item-22",
    content: "item22",
  },
  {
    id: "item-23",
    content: "item23",
  },
];

const data4 = [
  {
    id: "需求评审",
    droppable: "droppable-1-1",
    task: [
      {
        id: "task-1",
        content: "task1",
      },
      {
        id: "task-2",
        content: "task2",
      },
      {
        id: "task-3",
        content: "task3",
      },
      {
        id: "task-4",
        content: "task4",
      },
      {
        id: "task-5",
        content: "task5",
      },
      {
        id: "task-6",
        content: "task6",
      },
      {
        id: "task-7",
        content: "task7",
      },
      {
        id: "task-8",
        content: "task8",
      },
      {
        id: "task-9",
        content: "task9",
      },
    ],
  },
  {
    id: "已评审",
    droppable: "droppable-1-2",
    task: [
      {
        id: "task-10",
        content: "task10",
      },
      {
        id: "task-11",
        content: "task11",
      },
      {
        id: "task-12",
        content: "task12",
      },
      {
        id: "task-13",
        content: "task13",
      },
      {
        id: "task-14",
        content: "task14",
      },
      {
        id: "task-15",
        content: "task15",
      },
      {
        id: "task-16",
        content: "task16",
      },
      {
        id: "task-17",
        content: "task17",
      },
      {
        id: "task-18",
        content: "task18",
      },
    ],
  },
  {
    id: "已完成",
    droppable: "droppable-1-3",
    task: [
      {
        id: "task-19",
        content: "task19",
      },
      {
        id: "task-20",
        content: "task20",
      },
      {
        id: "task-21",
        content: "task21",
      },
      {
        id: "task-22",
        content: "task22",
      },
      {
        id: "task-23",
        content: "task23",
      },
      {
        id: "task-24",
        content: "task24",
      },
      {
        id: "task-25",
        content: "task25",
      },
      {
        id: "task-26",
        content: "task26",
      },
      {
        id: "task-27",
        content: "task27",
      },
    ],
  },
];

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
}

function getPassword() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data2);
    }, 3000);
  });
}

function getItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data4);
    }, 3000);
  });
}

export default getData;

export { getPassword, getItem };
