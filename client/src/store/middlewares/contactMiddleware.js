import React, { Component }  from 'react';
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
                url: 'http://localhost:8080/api/contact',
                data,
                withCredentials: false,
            }).then((res) => {                
                // store.dispatch(submitsuccess(res.data));
                store.dispatch(submitsuccess(
                <div className="ui success message">
                <i className="close icon"></i>
                <div className="header">
                  Votre message a été transmis avec succès.
                </div>
                <p>Nous reviendrons vers vous le plus rapidement possible.</p>
              </div>));
            })
            .catch((err) => {
            store.dispatch(submiterror(
            <div className="ui negative message">
            <i className="close icon"></i>
            <div className="header">
              Nous sommes désolés mais votre message n'a pu être envoyé.
            </div>
            <p>Veuillez essayer ultérieurement</p></div>));
            })
            break;
            
        }
        default:
            return;

            }
        }