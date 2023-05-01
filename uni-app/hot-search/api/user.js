import request from "../utils/request";

/**
 * 用户登录
 */
export function login(data) {
  return request({
    url: "/sys/login",
    method: "POST",
    data,
  });
}

/**
 * 关注用户
 */
export function userFollow(data) {
  return request({
    url: "/user/follow",
    data,
  });
}

/**
 * 发表评论
 */
export function userArticleComment(data) {
  return request({
    url: "/user/article/comment",
    method: "POST",
    data,
  });
}

/**
 * 用户点赞
 */
export function userPraise(data) {
  return request({
    url: "/user/praise",
    data,
  });
}

/**
 * 用户收藏
 */
export function userCollect(data) {
  return request({
    url: "/user/collect",
    data,
  });
}
