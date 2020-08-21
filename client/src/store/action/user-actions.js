export const CHECK_AUTH = 'CHECK_AUTH';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const SIGN_UP = 'SIGN_UP';



export const checkAuth = () => ({
  type: CHECK_AUTH
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload
});

export const changeField = (payload) => ({
  type: CHANGE_FIELD,
  payload
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

export const signupsuccess = (payload) => ({
  type: SIGN_UP_SUCCESS,
  payload
});

export const signuperror = (payload) => ({
  type: SIGN_UP_ERROR,
  payload
});

export const signup = () => ({
  type: SIGN_UP,
  
});