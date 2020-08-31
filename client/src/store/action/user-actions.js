export const CHECK_AUTH = 'CHECK_AUTH';
export const LOG_USER = 'LOG_USER';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const SIGN_UP = 'SIGN_UP';
export const SUBMIT_CONTACT = "SUBMIT_CONTACT";
export const SUBMIT_CONTACT_SUCCESS = "SUBMIT_CONTACT_SUCCESS";
export const SUBMIT_CONTACT_ERROR = "SUBMIT_CONTACT_ERROR";
export const SIGN_UP_PART = 'SIGN_UP_PART';
export const SIGN_UP_PART_SUCCESS = 'SIGN_UP_PART_SUCCESS';
export const SIGN_UP_PART_ERROR = 'SIGN_UP_PART_ERROR';
export const SUBMIT_QUOTE = "SUBMIT_QUOTE";
export const SUBMIT_QUOTE_SUCCESS = "SUBMIT_QUOTE_SUCCESS";
export const SUBMIT_QUOTE_ERROR = "SUBMIT_QUOTE_ERROR";


export const logUser = (payload) => ({
  type: LOG_USER,
  payload
});

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

export const signuppart = () => ({
  type: SIGN_UP_PART,
  
});

export const signuppartsuccess = () => ({
  type: SIGN_UP_PART_SUCCESS,
  
});

export const signupparterror = () => ({
  type: SIGN_UP_PART_ERROR,
  
});

export const submitcontact = () => ({
  type: SUBMIT_CONTACT,
  
});

export const submitsuccess = (payload) => ({
  type: SUBMIT_CONTACT_SUCCESS,
  payload
});

export const submiterror = (payload) => ({
  type: SUBMIT_CONTACT_ERROR,
  payload
});

export const submitquote = () => ({
  type: SUBMIT_QUOTE,
  
});

export const submitquotesuccess = (payload) => ({
  type: SUBMIT_QUOTE_SUCCESS,
  payload
});

export const submitquoteerror = (payload) => ({
  type: SUBMIT_QUOTE_ERROR,
  payload
});




