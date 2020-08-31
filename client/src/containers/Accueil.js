import { connect } from 'react-redux';
import Accueil from '../components/Accueil';


const mapStateToProps = (state) => (console.log(state.user),{
    isLogged: state.user.isLogged,
   
  });

  const mapDispatchToProps = (dispatch) => ({
      
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Accueil);