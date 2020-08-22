import { connect } from 'react-redux';
import ContactForm from '../components/FormInscriptionPro';
import { changeField, submit } from '../store/action/user-actions';

const mapStateToProps = (state) => ({
    mail: state.contact.email,
    password: state.contact.password,
    message: state.contact.message,
    
  });
  
  const mapDispatchToProps = (dispatch) => ({
      
    changeField: (value, name) => {
    
      const changeObject = {
        [name]: value
      };
      console.log(changeObject)
      dispatch(changeField(changeObject));
  
    },
    handleSubmit: () => {
      console.log('envoi du message');
      dispatch(submit());
    },
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);