import * as newPostActionsTypes from '../../NewPost/store/actionTypes';
import * as postActionsTypes from '../../Post/store/actionTypes';

const initialState = {
  posts: []
};

const reducer = ( state = initialState, { type, payload } ) => {
  switch ( type ) {
    case newPostActionsTypes.ADD_POST:
      let newPost = {
        id: Math.floor( ( Math.random() * 10000 ) + 0 ),
        new: true,
        comments: [],
        ...payload
      };

      return {
        ...state,
        posts: state.posts.concat( newPost )
      }
    case postActionsTypes.SET_OLD_POST:
      let posts = [ ...state.posts ],
        setOldPost = posts.find( post => post.id === payload.id );

      setOldPost.new = false;

      return {
        ...state,
        posts
      }
    case postActionsTypes.ADD_COMMENT:
      let postsForComment = [ ...state.posts ],
        postById = postsForComment.find( post => post.id === payload.id );

      let newComment = {
        id: Math.floor( ( Math.random() * 10000 ) + 0 ),
        author: 'Bruno',
        date: new Date().toLocaleDateString(),
        text: payload.comment
      }

      postById.comments = [ newComment, ...postById.comments ];

      return {
        ...state,
        posts: postsForComment
      }
    default:
      return state;
  }
};

export default reducer;