import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
//Start Reducer
import start from './reducer';
import postsReducer from '../screens/Posts/store/reducer';
import authReducer from './auth/reducer';
import toastReducer from '../components/UI/Toast/store/reducer';

//Dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Reducers
const rootReducer = combineReducers( {
  initial: start,
  posts: postsReducer,
  auth: authReducer,
  toast: toastReducer
} );

//Create store
const store = createStore( rootReducer, composeEnhancers( applyMiddleware( reduxThunk ) ) );

export default store;
