import * as actionTypes from './actionTypes';

export const setOldPost = id => ( { type: actionTypes.SET_OLD_POST, payload: { id } } );
export const addNewComment = ( id, comment ) => ( { type: actionTypes.ADD_COMMENT, payload: { id, comment } } )