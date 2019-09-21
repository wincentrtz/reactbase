import { FETCH_ACTIVE_USER } from "./constants";
import userState from "./state";

const userReducers = (state = userState, action) => {
  switch (action.type) {
    case FETCH_ACTIVE_USER:
      return {
        ...state,
        user: action.payload.data
      };
    default:
      return state;
  }
};

export default userReducers;
