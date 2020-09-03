import { connect } from 'react-redux';
import App from '../components/App';
import { checkAuth } from '../store/action/user-actions';

const mapStateToProps = (state) => ({
   
  });

  const mapDispatchToProps = (dispatch) => ({
    checkAuth: () => {
       
        dispatch(checkAuth());

  },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
