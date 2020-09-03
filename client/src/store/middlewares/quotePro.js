import React, { Component }  from 'react';
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
                url: 'http://localhost:8080/api/quote/pro',
                data: quotePro,
                withCredentials: true,
            }).then((res) => {                
                // store.dispatch(submitsuccess(res.data));
                store.dispatch(submitquotesuccess(
                <div className="ui success message">
                <i className="close icon"></i>
                <div className="header">
                <div>Votre demande a été transmise</div>
                <p>Nous reviendrons vers vous dans les plus brefs délais.</p>
              </div>
             </div>));
            })
            .catch((err) => {
            store.dispatch(submitquoteerror(
            <div className="ui negative message">
            <i className="close icon"></i>
            <div className="header">
              <div>Votre demande n'a pu être envoyée</div>
            </div>
            
            </div>));
            })
            break;
            
        }
        default:
            return;

            }
        }