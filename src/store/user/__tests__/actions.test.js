import { fetchActiveUser } from "../actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import api from "api/controllers/user";
import mocks from "mocks/modules/users";
import config from "config";
import { FETCH_ACTIVE_USER } from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("api/controllers/user");
const getExpectedResult = (urls) => mocks.find((mock) => mock.url === urls);

describe("User Actions Test", () => {
  test("fetchActiveUser should create FETCH_ACTIVE_USER action", async () => {
    const expectedResult = getExpectedResult(config.urls.user.getActiveUser);
    api.getActiveUser = jest.fn();
    api.getActiveUser.mockResolvedValue(expectedResult);
    const expectedAction = {
      type: FETCH_ACTIVE_USER,
      payload: expectedResult.data,
    };
    const store = mockStore({ users: [] });
    await store.dispatch(fetchActiveUser());
    expect(store.getActions()).toEqual([expectedAction]);
    expect(api.getActiveUser).toBeCalled();
  });
});
