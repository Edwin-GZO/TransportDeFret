import { connect } from 'react-redux';
import App from '../components/App';
import { checkAuth, logUser } from '../store/action/user-actions';

const mapStateToProps = (state) => ({
   
  });

  const mapDispatchToProps = (dispatch) => ({
    checkAuth: () => {
       
        dispatch(checkAuth());

  },

  logUser: () => {

    dispatch(logUser());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
