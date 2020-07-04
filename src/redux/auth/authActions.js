export const ActionType = {
  SIGNUP_REQUEST: 'session/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'session/SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'session/SIGNUP_ERROR',
  LOGOUT: 'session/LOGOUT',
};

/*
 * Signup
 */
export const signupRequest = () => ({
  type: ActionType.SIGNUP_REQUEST,
});

export const signupSuccess = () => ({
  type: ActionType.SIGNUP_SUCCESS,
});

export const signupError = error => ({
  type: ActionType.SIGNUP_ERROR,
  payload: { error },
});

/*
 * Logout
 */
export const logOutSuccess = () => ({
  type: ActionType.LOGOUT,
});
