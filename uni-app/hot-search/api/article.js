import request from '../utils/request';

/**
 * 获取文章详情
 */
export function getArticleDetail(data) {
  return request({
    url: '/article/details',
    data
  });
}

/**
 * 获取文章评论列表
 */
export function getArticleCommentList(data) {
  return request({
    url: '/article/comment/list',
    data
  });
}
