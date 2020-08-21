import {CHANGE_FIELD, SIGN_UP_ERROR, SIGN_UP_SUCCESS, SIGN_UP} from '../action/user-actions';

const stateInitial = {
    siret: '',
    mail: '',
    bill_address: '',
    complement: '',
    phone: '',
    password: '',
    passwordconfirm: '',
    isSignedUp: false,
    error: '',
    signUpMessage: '',
    societe: '',
    city:'',
    postal_code:'',

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
        siret: '',
        mail: '',
        bill_address: '',
        complement: '',
        city:'',
        postal_code:'',
        phone: '',
        password: '',
        passwordconfirm: '',
        error: '',
        signUpMessage: '',
        societe: '',
        isSignedUp: true,
        signUpMessage: `Votre compte à été crée avec succès !`

      } ;  

      case SIGN_UP_ERROR:
        return {
          ...state,
          ...action.payload,
          siret: '',
          mail: '',
          bill_address: '',
          complement: '',
          city:'',
          postal_code:'',
          phone: '',
          password: '',
          passwordconfirm: '',
          error: '',
          signUpMessage: '',
          societe: '',
        isSignedUp: false,
        signUpMessage: `Votre compte n'a pu etre créé ! `,
      
        };

        case SIGN_UP:
        return {
          ...state,
          ...action.payload,
          siret: '',
          mail: '',
          bill_address: '',
          city:'',
          postal_code:'',
          phone: '',
          password: '',
          passwordconfirm: '',
          error: '',
          signUpMessage: '',
          societe: '',
        
        };
    
      default:
      return state;   
      
  }

    }
   
