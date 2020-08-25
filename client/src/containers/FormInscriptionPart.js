import { connect } from 'react-redux';
import FormInscriptionPart from '../components/FormInscriptionPart';
import { changeField, signup } from '../store/action/user-actions';



const mapStateToProps = (state) => ({
    mail: state.register.mail,
    password: state.register.password,
    passwordconfirm: state.register.passwordconfirm,
    phone: state.register.phone,
    bill_number: state.register.bill_number,
    bill_track: state.register.bill_track,
    bill_street: state.register.bill_street,
    bill_complement: state.register.bill_complement,    
    name: state.register.name,
    firstname: state.register.firstname,    
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(FormInscriptionPart);