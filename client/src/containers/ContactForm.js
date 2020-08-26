import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm';
import { changeField, submitcontact } from '../store/action/user-actions';

const mapStateToProps = (state) => ({
    nameContact: state.contact.nameContact,
    mailContact: state.contact.mailContact,
    commentContact: state.contact.commentContact,
    subjectContact: state.contact.subjectContact,
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