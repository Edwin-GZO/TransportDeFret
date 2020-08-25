import { CHANGE_FIELD, SUBMIT_CONTACT, SUBMIT_CONTACT_SUCCESS, SUBMIT_CONTACT_ERROR } from '../action/user-actions';

const stateInitial = {
name: '',
mail: '',
message: '',
object: '',
contactMessage:'',
contact: {},

};

export default (state = stateInitial, action = {}) => {
    switch (action.type)

    {        
        case CHANGE_FIELD:
            if (action.payload.reducerName === "contact"){
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

            case SUBMIT_CONTACT_SUCCESS:
                return {
                    ...state,
                    contactMessage: action.payload,
                
                };

            case SUBMIT_CONTACT_ERROR:
                return {
                    ...state,              
                    contactMessage: action.payload,
                };

            

            default:
                return state;
        }


    };