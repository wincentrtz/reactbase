import instance from "api";

export default () =>
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.data) {
        //handler error
      }
      return Promise.reject(error.message);
    }
  );
