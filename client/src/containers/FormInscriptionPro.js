import { connect } from 'react-redux';
import FormInscriptionPro from '../components/FormInscriptionPro';
import { changeField, signup } from '../store/action/user-actions';

//! Register à la place de USER

const mapStateToProps = (state) => ({
    mail: state.register.mail,
    password: state.register.password,
    passwordconfirm: state.register.passwordconfirm,
    phone: state.register.phone,
    bill_address: state.register.bill_address,
    complement: state.register.complement,
    siret: state.register.siret,
    city: state.register.city,
    postal_code: state.register.postal_code,
    societe: state.register.societe,
    isFormValid: state.register.isFormValid,
    isSamePassword: state.register.isSamePassword,
    hasError: state.register.hasError,
  });
  
  const mapDispatchToProps = (dispatch) => ({
      
    changeField: (value, name) => {
    
      const changeObject = {
        [name]: value
      };
      console.log(changeObject)
      dispatch(changeField(changeObject));
  
    },
    

    signup: ()=> {
        console.log('signup');
        dispatch(signup());
    }  
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(FormInscriptionPro);