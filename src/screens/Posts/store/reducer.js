import * as newPostActionsTypes from '../../NewPost/store/actionTypes';
import * as postActionsTypes from '../../Post/store/actionTypes';

const initialState = {
  posts: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case newPostActionsTypes.ADD_POST:
      const newPost = {
        id: Math.floor((Math.random() * 10000) + 0),
        new: true,
        comments: [],
        ...payload
      };

      return {
        ...state,
        posts: [...state.posts, newPost]
      }
    case postActionsTypes.SET_OLD_POST:
      return {
        ...state,
        posts: state.posts.map(post => post.id === payload.id ? (
          { ...post, new: false }
        ) : post)
      }
    case postActionsTypes.ADD_COMMENT:

      const newComment = {
        id: Math.floor((Math.random() * 10000) + 0),
        author: 'Bruno',
        date: new Date().toLocaleDateString(),
        text: payload.comment
      }

      return {
        ...state,
        posts: state.posts.map(post => post.id === payload.id ? (
          { ...post, comments: [newComment, ...post.comments] }
        ) : post)
      }
    default:
      return state;
  }
};

export default reducer;