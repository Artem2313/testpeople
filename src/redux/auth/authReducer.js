import { ActionType } from './authActions';

const authReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.SIGNUP_SUCCESS:
      return true;

    case ActionType.SIGNUP_ERROR:
      return console.log(payload.error);

    case ActionType.LOGOUT:
      return false;

    default:
      return state;
  }
};

export default authReducer;
