import React from 'react';
import Button from '../UI/Button/Button';
import classes from './CommentForm.module.scss';

const CommentForm = props => (
  <form className={ classes.CommentForm } onSubmit={ props.submit }>
    <input type="text" name="comment" placeholder="Leave your comment!" value={ props.text } onChange={ props.fillFields } />
    <Button><i className="far fa-comment"></i> Comment</Button>
  </form>
);

export default CommentForm;