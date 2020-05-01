import instance from "api";

export default () =>
  instance.interceptors.request.use(
    (config) => config,
    (error) => {
      return Promise.reject(error);
    }
  );
