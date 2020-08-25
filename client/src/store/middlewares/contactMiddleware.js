import axios from 'axios';
import { SUBMIT_CONTACT, submitsuccess, submiterror } from '../action/user-actions';

export default (store) => (next) => (action) => {
    next(action);
    switch (action.type) {

        case SUBMIT_CONTACT :  {
            const { contact } = store.getState();
            
            const data = {...contact}

            delete data.contactMessage
            console.log({data})

            axios({
                method: 'post',
                url: 'http://172.31.83.109/api/contact',
                data,
                withCredentials: false,
            }).then((res) => {                
                store.dispatch(submitsuccess(res.data));
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