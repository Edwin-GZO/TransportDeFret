import {CHANGE_FIELD} from '../action/user-actions';

const stateInitial = {
    siret: '',
    email: '',
    bill_address: '',
    phone: '',
    password: '',

}




export default (state= stateInitial , action={})=> {
    switch(action.type)
    {
 case CHANGE_FIELD:
      return {
        ...state,
        ...action.payload
      };
   
    case SIGNU_UP_SUCCES:
      return {
        ...state,
        ...action.payload
      } ;  
    
      default:
      return state;   
      
  }

    }
   
