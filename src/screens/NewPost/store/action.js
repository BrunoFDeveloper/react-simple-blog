import { showToast } from '../../../components/UI/Toast/store/actions';
import * as actionTypes from './actionTypes';

export const addNewPost = (title, msg) => dispatch => {
  dispatch(({ type: actionTypes.ADD_POST, payload: { title, msg } }));
  dispatch(showToast('Post added with success!', 'Success', 1500));
};