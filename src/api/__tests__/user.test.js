import api from "../controllers/user";
import httpHandler from "utils/http-handler";
import mocks from "mocks/modules/users";
import config from "config";

jest.mock("utils/http-handler");
const getExpectedResult = (urls) => mocks.find((mock) => mock.url === urls);

describe("User Api Testing", () => {
  test("getActiveUser should return current active user", async () => {
    const expectedResult = getExpectedResult(config.urls.user.getActiveUser);
    httpHandler.getRequest = jest.fn();
    httpHandler.getRequest.mockResolvedValue(expectedResult);

    const result = await api.getActiveUser();

    expect(httpHandler.getRequest).toHaveBeenCalledWith(
      config.urls.user.getActiveUser
    );

    expect(result).toBe(expectedResult);
  });
});
