import * as actionTypes from './actionType';

const initialState = {};

const reducer = ( state = initialState, { type, payload } ) => {
  switch ( type ) {
    case actionTypes.START_APP:
      return state;
    default:
      return state;
  }
};

export default reducer;