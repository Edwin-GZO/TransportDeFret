import axios from 'axios';
import { SUBMIT_QUOTE, submitquotesuccess, submitquoteerror } from '../action/user-actions';

export default (store) => (next) => (action) => {
    next(action);
    switch (action.type) {

        case SUBMIT_QUOTE :  {
            const { quotePro } = store.getState();
            console.log(quotePro);
            

            axios({
                method: 'post',
                url: 'http://54.175.105.52:8080/api/quote/Pro',
                data: quotePro,
                withCredentials: true,
            }).then((res) => {                
                // store.dispatch(submitsuccess(res.data));
                store.dispatch(submitquotesuccess('Votre demande de devis a bien été envoyée'));
            })
            .catch((err) => {
            store.dispatch(submitquoteerror("Votre demande de devis n'a pu être envoyée"));
            })
            break;
            
        }
        default:
            return;

            }
        }