import instance from "api";

instance.interceptors.request.use(
  config => config,
  error => {
    return Promise.reject(error);
  }
);
