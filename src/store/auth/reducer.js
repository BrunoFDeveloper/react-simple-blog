import * as actionTypes from './actionTypes';

const initialState = {
  login: false
};

const reducer = ( state = initialState, { type, payload } ) => {
  switch ( type ) {
    case actionTypes.SIGN_IN:
      return {
        login: payload
      }
    case actionTypes.SIGN_OUT:
      return {
        login: payload
      }
    default:
      return state;
  }
};

export default reducer;