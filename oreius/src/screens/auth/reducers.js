import { LOGIN, LOGOUT } from "./actions";

export const initialState = {
  loginData : {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginData: action.data,
      };
    case LOGOUT:
      return {
        ...state,
        loginData: {},
      };
    default:
      return state;
  }
};

export default loginReducer;