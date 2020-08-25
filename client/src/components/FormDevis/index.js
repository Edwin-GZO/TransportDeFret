import React from 'react';

import Field from '../../containers/Field'

import './style.scss';


const FormDevis = () => {
return (
    <div classname="formDevis">
        <h1>form devis</h1>
        <Field name="mail" reducerName="devis" />
    </div>

)

}


export default FormDevis;