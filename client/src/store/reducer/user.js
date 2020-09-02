import { CHANGE_FIELD, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, LOG_USER  } from '../action/user-actions';


const stateInitial = {
  mailLogin: '',
  passwordLogin: '',
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
        
      }; 
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        loggedMessage: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,        
        loggedMessage: action.payload,
        passwordLogin: '',
        isLogged: false
      };
    case CHANGE_FIELD:
      if(action.payload.reducerName === "user"){
        return {
          ...state,
          [action.payload.name]: action.payload.value
        }
      };

      case LOG_USER:     
        return {
          ...state,
          isLogged: action.payload
        }
      

      return state
    default:
      return state;
  }
};