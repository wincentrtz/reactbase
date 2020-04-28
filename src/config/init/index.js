import env from "constants/env";
import requestInterceptor from "utils/request-interceptor";
import responseInterceptor from "utils/response-interceptor";
export default () => {
  console.log(process.env.REACT_APP_STATE);
  if (process.env.REACT_APP_STATE === env.DEVNOMOCK) require("mocks");
  requestInterceptor();
  responseInterceptor();
};
