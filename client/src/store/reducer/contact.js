import { CHANGE_FIELD, SUBMIT_CONTACT, SUBMIT_CONTACT_SUCCESS, SUBMIT_CONTACT_ERROR } from '../action/user-actions';

const stateInitial = {
name: '',
mail: '',
message: '',
object: '',
contactMessage:'',



};

export default (state = stateInitial, action = {}) => {
    switch (action.type)

    {
        

        case SUBMIT_CONTACT:
            return {
                ...state,
                name:'',
                mail: '',
                message: '',
                object: '',
               
            };

            case SUBMIT_CONTACT_SUCCESS:
            return {
                ...state,
                ...action.payload,
                name:'',
                mail: '',
                message: '',
                object: '',
                contactMessage: 'Votre message est envoyé',
               
            };

            case SUBMIT_CONTACT_ERROR:
            return {
                ...state,
                ...action.payload,
                name:'',
                mail: '',
                message: '',
                object: '',
                contactMessage: 'Echec d envoi du message',
                
            };

            case CHANGE_FIELD:
            return {
              ...state,
              ...action.payload
            };

            default:
                return state;
        }


    };