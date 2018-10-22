import React from 'react';
import { Link } from 'react-router-dom';
import classes from './PostView.module.scss';
import Button from '../UI/Button/Button';

const PostView = props => (
  <article className={ classes.PostContent }>
    { props.new && <div className={ classes.Flag }>New post</div> }
    <h1>{ props.title }</h1>
    <p>{ props.msg }</p>

    <Link to={ '/post/' + props.id }>
      <Button>See post <i className="far fa-eye"></i></Button>
    </Link>
  </article>
);

export default PostView;