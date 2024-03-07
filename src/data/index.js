function getFruit() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: "apple", price: 8 },
        { name: "orange", price: 10 },
        { name: "banana", price: 20 },
      ]);
    }, 3000);
  });
}

class Chat {
  constructor() {
    this.listeners = {};
    this.user_data = {
      1: {
        name: "linhao",
        status: "online",
      },
      2: {
        name: "xiaoming",
        status: "offline",
      },
      3: {
        name: "xiaohong",
        status: "online",
      },
    };
  }
  addListener(id, callback) {
    if (!this.listeners[id]) {
      this.listeners[id] = [];
    }
    this.listeners[id].push(callback);
  }
  removeListener(id, callback) {
    const index = this.listeners[id].indexOf(callback);
    this.listeners[id].splice(index, 1);
  }
  // ==是非严格模式，会进行类型转换。 ===是严格模式，不会进行类型转换。
  publish(id, status) {
    Object.keys(this.listeners).forEach((key) => {
      if (key == id) {
        this.listeners[id].forEach((callback) => {
          callback({
            name: this.user_data[id].name,
            status: status,
          });
        });
      }
    });
  }
}

export { getFruit, Chat };
