import * as actionTypes from './actionTypes';

export const showToast = ( text, type, time ) => {
  return dispatch => {
    dispatch( ( { type: actionTypes.SHOW_TOAST, payload: { text, type } } ) );
    setTimeout( () => dispatch( ( { type: actionTypes.HIDE_TOAST } ) ), time );
  }
};
export const hideToast = () => ( { type: actionTypes.HIDE_TOAST } )