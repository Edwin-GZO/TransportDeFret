import { CHANGE_FIELD, SUBMIT_CONTACT } from '../action/user-actions';

const stateInitial = {
name: '',
mail: '',
message: ''

};

export default (state = stateInitial, action = {}) => {
    switch (action.type)

    {
        case CHANGE_FIELD:
            return {
              ...state,
              ...action.payload
            };

        case SUBMIT_CONTACT:
            return {
                ...state,
                name:'',
                mail: '',
                message: ''
            };
            default:
                return state;
        }


    };