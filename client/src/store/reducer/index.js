import { combineReducers } from 'redux';


import user from './user';
import register from './register';
import contact from './contact';
import registerPart from './registerPart';
import quotePro from './quotePro';

export default combineReducers({
  
  user: user,
  register: register,
  contact: contact,
  registerPart: registerPart,
  quotePro: quotePro,

});