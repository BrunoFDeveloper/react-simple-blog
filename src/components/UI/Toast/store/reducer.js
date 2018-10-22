import * as actionTypes from './actionTypes';

const initialState = {
  showToast: false,
  text: '',
  type: ''
};

const reducer = ( state = initialState, { type, payload } ) => {
  switch ( type ) {
    case actionTypes.SHOW_TOAST:
      return {
        showToast: true,
        text: payload.text,
        type: payload.type
      }
    case actionTypes.HIDE_TOAST:
      return {
        ...state,
        showToast: false,
        text: '',
        type: ''
      }
    default:
      return state;
  }
};

export default reducer;