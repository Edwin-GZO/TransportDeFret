import { CHANGE_FIELD, SUBMIT_CONTACT, SUBMIT_CONTACT_SUCCESS, SUBMIT_CONTACT_ERROR } from '../action/user-actions';

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
    


};

export default (state = stateInitial, action = {}) => {
    switch (action.type)

    {        
        case CHANGE_FIELD:
            if (action.payload.reducerName === "quotePro"){
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                };
            }

            return state;

        // case SUBMIT_CONTACT:
        //     return {
        //         ...state,
        //         name:'',
        //         mail: '',
        //         message: '',
        //         object: '',
        //         contact: {},
        //     }; 

            case SUBMIT_QUOTE_SUCCESS:
                return {
                    ...state,
                    quoteMessage: action.payload,
                
                };

            case SUBMIT_QUOTE_ERROR:
                return {
                    ...state,              
                    quoteMessage: action.payload,
                };

            

            default:
                return state;
        }


    };