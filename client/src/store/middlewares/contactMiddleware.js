import axios from 'axios';
import { SUBMIT_CONTACT, submitsuccess, submiterror } from '../action/user-actions';

export default (store) => (next) => (action) => {
    next(action);
    switch (action.type) {

        case SUBMIT_CONTACT :  {
            const { contact } = store.getState();
            console.log(contact);
            const data = {...contact}

            delete data.contactMessage

            axios({
                method: 'post',
                url: 'http://54.175.105.52:8080/api/contact',
                data,
                withCredentials: false,
            }).then((res) => {                
                // store.dispatch(submitsuccess(res.data));
                store.dispatch(submitsuccess('Votre message a bien été envoyé'));
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