import { connect } from 'react-redux';
import Accueil from '../components/Accueil';
import { logout } from '../store/action/user-actions';


const mapStateToProps = (state) => (console.log(state.user),{
    isLogged: state.user.isLogged,
   
  });

  const mapDispatchToProps = (dispatch) => ({
    handleLogout: () => {
      console.log('logout');
      dispatch(logout());
    },
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Accueil);