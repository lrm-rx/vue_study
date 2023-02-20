const { Service } = require("egg");

class ArticleService extends Service {
  async create(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert("article", params);
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async lists() {
    const { app } = this;
    try {
      return await app.mysql.select("article");
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async detail(id) {
    const { app } = this;
    if (!id) {
      console.log("id不能为空!");
      return null;
    }
    try {
      return await app.mysql.get("article", { id });
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

module.exports = ArticleService;
