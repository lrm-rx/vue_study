import request from "../utils/request";

// 获取默认搜索内容
export function getDefaultText() {
  return request({
    url: "/search/default-text",
  });
}
