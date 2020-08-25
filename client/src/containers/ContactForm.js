import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm';
import { changeField, submitcontact } from '../store/action/user-actions';

const mapStateToProps = (state) => ({
    name: state.contact.name,
    mail: state.contact.mail,
    message: state.contact.message,
    object: state.contact.object,
    contactMessage: state.contact.contactMessage,
  });
  
  const mapDispatchToProps = (dispatch) => ({
      
    changeField: (value, name) => {
    
      const changeObject = {
        [name]: value
      };
      console.log(changeObject)
      dispatch(changeField(changeObject));
  
    },
    submitcontact: () => {
      console.log('submit');
      dispatch(submitcontact());
    },
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);