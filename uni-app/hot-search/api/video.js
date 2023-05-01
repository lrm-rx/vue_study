import request from '../utils/request';

/**
 * 热播视频列表
 */
export function getHotVideoList(data) {
  return request({
    url: '/video/list',
    data
  });
}

/**
 * 获取视频弹幕列表
 */
export function getVideoDanmuList(data) {
  return request({
    url: '/video/danmu',
    data
  });
}
