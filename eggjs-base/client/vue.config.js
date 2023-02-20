const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/article": {
        target: "http://localhost:7001",
        ws: true,
        changeOrgin: true,
      },
    },
  },
});
