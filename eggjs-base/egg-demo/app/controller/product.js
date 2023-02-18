const { Controller } = require("egg");

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.product.index();
    ctx.body = res;
  }

  async detail() {
    const { ctx } = this;
    console.log("ctx:", ctx.query);
    ctx.body = ctx.query;
  }

  async detail2() {
    const { ctx } = this;
    ctx.body = ctx.params;
  }

  async create() {
    const { ctx } = this;
    ctx.body = ctx.request.body;
  }

  async update() {
    const { ctx } = this;
    ctx.body = `update: id--${ctx.params.id}`;
  }

  async delete() {
    const { ctx } = this;
    ctx.body = `delete: id--${ctx.params.id}`;
  }
}

module.exports = ProductController;
