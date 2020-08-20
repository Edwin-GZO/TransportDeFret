import { connect } from 'react-redux';
import FormInscriptionPro from '../components/FormInscriptionPro';
import { signupsuccess, changeField, signup } from '../store/action/user-actions';

const mapStateToProps = (state) => ({
    email: state.user.email,
    password: state.user.password,
    phone: state.user.phone,
    bill_address: state.user.bill_address,
    siret: state.user.siret,
    city: state.user.city,
    postal_code: state.user.postal_code,
  });
  
  const mapDispatchToProps = (dispatch) => ({
      
    changeField: (value, name) => {
    
      const changeObject = {
        [name]: value
      };
      console.log(changeObject)
      dispatch(changeField(changeObject));
  
    },
    signupsuccess: () => {
        console.log('signupsucces');
        dispatch(signupsuccess());
      },

    signup: ()=> {
        console.log('signup');
        dispatch(signup());
    }  
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(FormInscriptionPro);