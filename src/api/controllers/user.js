import httpHandler from "utils/http-handler";
import config from "config";

const urls = config.urls.user;

export default {
  getActiveUser() {
    const { data } = {
      data: {
        name: "Wincent"
      }
    };
    return data;
  }
};
