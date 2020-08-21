import { connect } from 'react-redux';
import FormInscriptionPro from '../components/FormInscriptionPro';
import { changeField, signup } from '../store/action/user-actions';

//! Register à la place de USER

const mapStateToProps = (state) => ({
    email: state.register.email,
    password: state.register.password,
    phone: state.register.phone,
    bill_address: state.register.bill_address,
    siret: state.register.siret,
    city: state.register.city,
    postal_code: state.register.postal_code,
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