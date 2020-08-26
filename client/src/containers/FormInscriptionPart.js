import { connect } from 'react-redux';
import FormInscriptionPart from '../components/FormInscriptionPart';
import { changeField, signuppart } from '../store/action/user-actions';



const mapStateToProps = (state) => ({
    mailSignUpPart: state.registerPart.mailSignUpPart,
    passwordSignUpPart: state.registerPart.passwordSignUpPart,
    passwordconfirmSignUpPart: state.registerPart.passwordconfirmSignUpPart,
    phoneSignUpPart: state.registerPart.phoneSignUpPart,
    billNumberSignUpPart: state.registerPart.billNumberSignUpPart,
    billTrackSignUpPart: state.registerPart.billTrackSignUpPart,
    billStreetSignUpPart: state.registerPart.billStreetSignUpPart,
    billComplementSignUpPart: state.registerPart.billComplementSignUpPart,    
    nameSignUpPart: state.registerPart.nameSignUpPart,
    firstNameSignUpPart: state.registerPart.firstNameSignUpPart,    
    citySignUpPart: state.registerPart.citySignUpPart,
    postalCodeSignUpPart: state.registerPart.postalCodeSignUpPart,
    societe: state.registerPart.societe,
    isFormValid: state.registerPart.isFormValid,
    isSamePassword: state.registerPart.isSamePassword,
    hasError: state.registerPart.hasError,
  });
  
  const mapDispatchToProps = (dispatch) => ({
      
    changeField: (value, name) => {
    
      const changeObject = {
        [name]: value
      };
      console.log(changeObject)
      dispatch(changeField(changeObject));
  
    },
    

    handlesignuppart: ()=> {
        console.log('signup');
        dispatch(signuppart());
    }  
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(FormInscriptionPart);