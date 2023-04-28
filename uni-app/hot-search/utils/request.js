// 封装请求对象
const BASE_URL =
  "https://www.fastmock.site/mock/ca5fba50b19c08e92d9343a13de2b1be/api";
function request({ url, data, method }) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + url,
      data,
      method,
      // header: {
      //   Authorization: store.state.user.token,
      // },
      success: ({ data }) => {
        if (data.success) {
          resolve(data);
        } else {
          uni.showToast({
            title: data.message,
            icon: "none",
            mask: true,
            duration: 3000,
          });
          reject(data.message);
        }
      },
      fail: (error) => {
        reject(error);
      },
      complete: () => {
        // 关闭加载
        uni.hideLoading();
      },
    });
  });
}

export default request;
