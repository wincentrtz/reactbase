const { createProxyMiddleware } = require("http-proxy-middleware");
const env = require("./constants/env/index");

const devProxy = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3000",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};

module.exports =
  process.env.REACT_APP_STATE === env.DEV_NO_MOCK ? devProxy : () => {};
