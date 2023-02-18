/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1676713006670_8186";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 关闭csrf
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // 模板引擎
  config.view = {
    mapping: {
      ".html": "ejs",
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
