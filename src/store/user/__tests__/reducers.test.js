import reducer from "../reducers";
import mocks from "mocks/modules/users";
import config from "config";
import { FETCH_ACTIVE_USER } from "../constants";

const getExpectedResult = (urls) => mocks.find((mock) => mock.url === urls);

const fetchActiveUserAction = {
  type: FETCH_ACTIVE_USER,
  payload: getExpectedResult(config.urls.user.getActiveUser),
};

describe("User Reducers Test", () => {
  test("Reducers should return initial state when given empty object", () => {
    expect(reducer(undefined, {})).toEqual({ user: {} });
  });

  test("Reducers should handle FETCH_ACTIVE_USER", () => {
    expect(reducer(undefined, fetchActiveUserAction)).toEqual({
      user: { name: "Wincent" },
    });
  });
});
