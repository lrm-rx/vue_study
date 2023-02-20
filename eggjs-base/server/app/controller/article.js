const { Controller } = require("egg");
const moment = require("moment");

class ArticleController extends Controller {
  async create() {
    const { ctx, service } = this;
    const data = {
      ...ctx.request.body,
      createTime: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    const result = await service.article.create(data);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errorMsg: "发布文章失败!",
      };
    }
  }

  async lists() {
    const { ctx, service } = this;
    const result = await service.article.lists();
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errorMsg: "查询文章失败!",
      };
    }
  }

  async detail() {
    const { ctx, service } = this;
    const result = await service.article.detail(ctx.params.id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errorMsg: "查询文章详情失败!",
      };
    }
  }
}

module.exports = ArticleController;
