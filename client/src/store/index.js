import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer";
//import ajaxMiddleware from './middlewares/ajaxMiddleware';
import authMiddleware from './middlewares/authMiddleware';
import logMiddleware from "./middlewares/logMiddleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    //ajaxMiddleware,
    authMiddleware,
    logMiddleware
    // secondMiddleware,
  )
);

const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers
);

export default store;