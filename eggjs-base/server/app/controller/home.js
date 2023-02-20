"use strict";

const { Controller } = require("egg");

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const res = await app.mysql.select("article");
    console.log("数据:", res);
    ctx.body = res;
  }
}

module.exports = HomeController;
