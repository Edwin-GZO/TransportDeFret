{/*import {CHANGE_FIELD, SIGN_UP_ERROR, SIGN_UP_SUCCESS} from '../action/user-actions';

const stateInitial = {
    siret: '',
    mail: '',
    bill_address: '',
    phone: '',
    password: '',
    isSignedUp: false,
    error: '',
    signUpMessage: '',
    user: {}
}




export default (state= stateInitial , action={})=> {
    switch(action.type)
    {
 case CHANGE_FIELD:
      return {
        ...state,
        ...action.payload
      };
   
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        ...action.payload,
        mail: '',
        siret: '',
        bill_adress: '',
        phone: '',
        error:'',
        isSignedUp: true,
        signUpMessage: `Votre compte à été crée avec succès !`

      } ;  

      case SIGN_UP_ERROR:
        return {
          ...state,
          ...action.payload,
          mail: '',
        siret: '',
        bill_adress: '',
        phone: '',
        error :'',
        isSignedUp: false,
        signUpMessage: `Votre compte n'a pu etre créé ! `,
        user: {}
        };
    
      default:
      return state;   
      
  }

    }
   
