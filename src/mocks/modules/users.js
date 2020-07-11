import METHODS from "constants/http/methods";
import CODES from "constants/http/codes";
import config from "config";

const urls = config.urls.user;

const getActiveUser = {
  url: urls.getActiveUser,
  code: CODES.SUCCESS,
  method: METHODS.GET,
  data: {
    name: "Wincent",
  },
};

export default [getActiveUser];
