import axios from 'axios';
import { SUBMIT_CONTACT, submitsuccess, submiterror } from '../action/user-actions';

export default (store) => (next) => (action) => {
    next(action);
    switch (action.type) {

        case SUBMIT_CONTACT : {
            axios({
                method: 'post',
                url: 'http://172.31.83.109/api/contact',
                withCredentials: true
            }).then((res) => {
                
                store.dispatch(submitsuccess("votre message a été envoyé"));
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