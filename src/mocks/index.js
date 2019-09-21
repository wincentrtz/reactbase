import MockAdapter from "axios-mock-adapter";

import instance from "api";
import CODES from "constants/http/codes";
import data from "./modules";

const mock = new MockAdapter(instance);

const methodMap = {
  GET: "onGet",
  POST: "onPost",
  PUT: "onPut",
  PATCH: "onPatch",
  DELETE: "onDelete"
};

data.forEach(d => {
  const params = [d.url];
  switch (d.method) {
    case "GET":
      params.push({ params: d.params });
      break;
    case "PUT" || "POST":
      params.push(d.body);
      break;
    default:
      break;
  }
  mock[methodMap[d.method]](...params).reply(CODES.SUCCESS, d);
});
