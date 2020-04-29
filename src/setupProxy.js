const { createProxyMiddleware } = require("http-proxy-middleware");
const env = require("./constants/env/index");

const devProxy = function (app) {
  app.use(
    "/apis",
    createProxyMiddleware({
      target: "https://jsonplaceholder.typicode.com/posts",
      changeOrigin: true,
      pathRewrite: {
        "^/apis": "",
      },
    })
  );
};

module.exports =
  process.env.REACT_APP_STATE === env.DEV_NO_MOCK ? devProxy : () => {};
