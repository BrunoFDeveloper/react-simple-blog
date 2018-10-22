import React from 'react';
import classes from './CommentBox.module.scss';

const CommentBox = props => (
  <div className={ classes.CommentBox }>
    <span className={ classes.date }>{ props.comment.date }</span>
    <p>{ props.comment.text }</p>
    <span className={ classes.author }>{ props.comment.author }</span>
  </div>
);

export default CommentBox;
