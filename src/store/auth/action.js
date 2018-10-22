import { showToast, hideToast } from '../../components/UI/Toast/store/actions';

import * as actionTypes from './actionTypes';

export const userSignIn = () => {
  return dispatch => {
    dispatch( ( { type: actionTypes.SIGN_IN, payload: true } ) );
    dispatch( showToast( 'Sign in Success!', 'Success', 1500 ) );
  }
};
// const toast = () =>
export const userSignOut = () => {
  return dispatch => {
    dispatch( ( { type: actionTypes.SIGN_OUT, payload: false } ) );
    dispatch( hideToast() );
  }
};