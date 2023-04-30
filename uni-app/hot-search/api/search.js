import request from "../utils/request";

// 获取默认搜索内容
export function getDefaultText() {
  return request({
    url: "/search/default-text",
  });
}

// 获取热搜搜索列表
export function getSearchHotList() {
  return request({
    url: "/search/hot-list",
  });
}

// 搜索结果
export function getSearchResultList(data) {
  return request({
    url: "/search",
    data,
  });
}
