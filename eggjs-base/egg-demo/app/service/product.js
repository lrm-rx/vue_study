const { Service } = require("egg");
class ProductService extends Service {
  async index() {
    return {
      id: 100,
      name: "测试",
    };
  }
}

module.exports = ProductService;
