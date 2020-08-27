import axios from 'axios';
import { LOGIN, SIGN_UP_PART,  CHECK_AUTH, loginSuccess, loginError, logoutSuccess, LOGOUT, SIGN_UP, signupsuccess, signuperror, signuppartsuccess, signupparterror } from '../action/user-actions';

export default (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case LOGOUT: {
      axios({
        method: 'post',
        url: 'http://localhost:8080/api/logout',
        withCredentials: true
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(logoutSuccess());
        })
        .catch((err) => {
          console.error(err);
        })
      break;
    }

    
    
    
    case CHECK_AUTH: {
      axios({
        method: 'post',
        url: 'http://localhost:8080/isLogged',
        withCredentials: true // Je veux que le serveur sache qui je suis grace à la session
      })
        .then((res) => {
          console.log(res.data);
          res.data.logged
            ? store.dispatch(loginSuccess(res.data.info))
            : store.dispatch(loginError(res.data.info));
            
        })
        .catch((err) => {
          console.error(err);
        })
      break;
    }
    
    // réagir au login
    case LOGIN: {
      const { user } = store.getState();
      console.log(user);
      
      axios({
        method: 'post',
        url: 'http://54.175.105.52:8080/api/user',
        data: user,
        withCredentials: true 
      })
        .then((res) => {
           
          store.dispatch(loginSuccess(res.data));
        })
        .catch((err) => {
          store.dispatch(loginError("Impossible de connecter cet utilisateur"))
        })

      break;
    }

 case SIGN_UP: {
      const { register } = store.getState();
      console.log(register);

      axios({
        method: 'post',
        url: 'http://54.175.105.52:8080/api/user/signup/pro',
        data: register,
        withCredentials: true 
      })
        .then((res) => {
            console.log('signup request')
          store.dispatch(signupsuccess(res.data));
        })
        .catch((err) => {
          store.dispatch(signuperror("Impossible d'enregistrer cet utilisateur"))
        })

      break;
    }

    case SIGN_UP_PART: {
      const { registerPart } = store.getState();
      console.log(registerPart);

      axios({
        method: 'post',
        url: 'http://54.175.105.52:8080/api/user/signup/part',
        data: registerPart,
        withCredentials: true 
      })
        .then((res) => {
            console.log('signup request')
          store.dispatch(signuppartsuccess(res.data));
        })
        .catch((err) => {
          store.dispatch(signupparterror("Impossible d'enregistrer cet utilisateur"))
        })

      break;
    }

    default:
      return;
    }

}
