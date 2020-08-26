import { CHANGE_FIELD, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS  } from '../action/user-actions';


const stateInitial = {
  mail: '',
  password: '',
  isLogged: false,
  loggedMessage: '',
  error: '',
  user: {}
};

export default (state = stateInitial, action = {}) => {
  switch (action.type)
  {     
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        user: {},
        loggedMessage: ''
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
       loggedMessage: `Bienvenue ${action.payload.name}`
      };
    case LOGIN_ERROR:
      return {
        ...state,
        password: '',
        error: action.payload,
        loggedMessage: '',
        user: {},
        isLogged: false
      };
    case CHANGE_FIELD:
      if(action.payloadreducerName === "user"){
        return {
          ...state,
          [action.payload.name]: action.payload.value
        }
      }

      return state
    default:
      return state;
  }
};