import reducer from "../reducers";
import { FETCH_ACTIVE_USER } from "../constants";

const fetchActiveUserAction = {
  type: FETCH_ACTIVE_USER,
  payload: { status: 200, data: { name: "Wincent" } },
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
