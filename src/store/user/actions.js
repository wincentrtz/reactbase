import api from "api/controllers/user";
import { FETCH_ACTIVE_USER } from "./constants";

export const fetchActiveUser = () => async (dispatch) => {
  const { data } = await api.getActiveUser();
  dispatch({
    type: FETCH_ACTIVE_USER,
    payload: data,
  });
};
