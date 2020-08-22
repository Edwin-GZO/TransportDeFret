import axios from 'axios';
import { SUBMIT_CONTACT, submitsuccess, submiterror } from '../action/user-actions';

export default (store) => (next) => (action) => {
    next(action);
    switch (action.type) {

        case SUBMIT_CONTACT : {
            axios({
                method: 'post',
                url: 'http://localhost:8080/api/contact',
                withCredentials: false
            }).then((res) => {
                console.log(res.data);
                store.dispatch(submitsuccess());
              })
              .catch((err) => {
                store.dispatch(submiterror("Votre message n'a pu etre envoyé"));
              })
            break;
            
        }
        default:
            return;

            }
        }