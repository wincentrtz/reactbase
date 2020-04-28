import env from "constants/env";
import requestInterceptor from "utils/request-interceptor";
import responseInterceptor from "utils/response-interceptor";
import mocks from 'mocks'

export default () => {
  if (process.env.REACT_APP_STATE === env.DEV) mocks()
  requestInterceptor();
  responseInterceptor();
};
