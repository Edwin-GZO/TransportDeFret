import {CHANGE_FIELD, SIGN_UP_ERROR, SIGN_UP_SUCCESS} from '../action/user-actions';

const stateInitial = {
    siret: '',
    mailSignUpPro: '',
    billNumberSignUpPro: '',
    billTrackSignUpPro: '',
    billStreetSignUpPro: '',
    billComplementSignUpPro: '',
    phoneSignUpPro: '',
    passwordSignUpPro: '',
    passwordconfirmSignUpPro: '',
    societe: '',
    citySignUpPro:'',
    postalCodeSignUpPro: '',
    isSamePassword: true,
    hasError: false,
    isSignedUp: false,
    error: '',
    signUpMessage: '',
    isFormValid: false,
    isLogged: ''
}

export default (state= stateInitial , action={})=> {
    switch(action.type) {
    case CHANGE_FIELD:
        if (action.payload.reducerName === 'register') {
          let isValid = true;

          const newState = {
          ...state,
          [action.payload.name]: action.payload.value,
          }
          
        const isSamePassword = newState.passwordSignUpPro === newState.passwordconfirmSignUpPro

          for (const key in state) {
            if (
                key ===  'isSignedUp' 
              || key ==='error' 
              || key === 'signUpMessage'
              || key === 'isFormValid'
              || key === 'billComplementSignUpPro'
              || key === 'isSamePassword'
              || key === 'hasError'
            ){
              continue;
            }
            if (!state[key]) {
              isValid = false;
              break;
            } 
          }
            
        return {
          ...state,
          [action.payload.name]: action.payload.value,
          isFormValid: isValid,
          isSamePassword,
          hasError: !isSamePassword
        };
      } 
      return state;
      case SIGN_UP_SUCCESS:
        const properties = {};

        for (const key in state) {
          properties[key] = ''
          }

        properties.isSignedUp = true
        properties.signUpMessage = `Votre compte à été crée avec succès !`
        properties.isFormValid = false
        properties.isSamePassword = true
        properties.hasError = false;

      return {
        ...state,
        ...action.payload,
        ...properties,
        isLogged:true
        // siret: '',
        // mail: '',
        // bill_address: '',
        // complement: '',
        // city:'',
        // postal_code:'',
        // phone: '',
        // password: '',
        // passwordconfirm: '',
        // error: '',
        // signUpMessage: '',
        // societe: '',
        // isSignedUp: true,
        // signUpMessage: `Votre compte à été crée avec succès !`

      } ;  

      case SIGN_UP_ERROR:
        return {
          ...state,
          ...action.payload,
          
          isSignedUp: false,
          signUpMessage: `Votre compte n'a pu etre créé ! `,
      
        };

        // case SIGN_UP:
        //   return {
        //     ...state,
        //     ...action.payload,
        //   };
    
      default:
      return state;   
      
  }

    }
   
