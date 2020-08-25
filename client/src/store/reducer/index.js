import { combineReducers } from 'redux';


import user from './user';
import register from './register';
import contact from './contact';
import registerPart from './registerPart';

export default combineReducers({
  
  user: user,
  register: register,
  contact: contact,
  registerPart: registerPart,

});