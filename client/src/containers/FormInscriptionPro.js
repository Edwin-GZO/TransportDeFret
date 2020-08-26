import { connect } from 'react-redux';
import FormInscriptionPro from '../components/FormInscriptionPro';
import { changeField, signup } from '../store/action/user-actions';

//! Register à la place de USER

const mapStateToProps = (state) => ({
    mailSignUpPro: state.register.mailSignUpPro,
    passwordSignUpPro: state.register.passwordSignUpPro,
    passwordconfirmSignUpPro: state.register.passwordconfirmSignUpPro,
    phoneSignUpPro: state.register.phoneSignUpPro,
    billNumberSignUpPro: state.register.billNumberSignUpPro,
    billTrackSignUpPro: state.register.billTrackSignUpPro,
    billStreetSignUpPro: state.register.billStreetSignUpPro,
    billComplementSignUpPro: state.register.billComplementSignUpPro,    
    siret: state.register.siret,
    citySignUpPro: state.register.citySignUpPro,
    postalCodeSignUpPro: state.register.postalCodeSignUpPro,
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