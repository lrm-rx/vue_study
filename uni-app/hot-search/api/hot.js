import request from "../utils/request";

/* 
 搜索文章类型
*/
export function getHotTabs() {
  return request({
    url: "/hot/tabs",
  });
}
/* 
 热搜文章列表
*/
export function getHotListFromTabType(type) {
  return request({
    url: "/hot/list",
    data: {
      type,
    },
  });
}
