import { FETCH_ACTIVE_USER } from "./user-constants";

export const fetchActiveUser = () => dispatch => {
  const payload = {
    id: 1,
    name: "Wincent"
  };

  dispatch({
    type: FETCH_ACTIVE_USER,
    payload
  });
};
