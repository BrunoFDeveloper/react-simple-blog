import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './store/action';

import classes from './Post.module.scss';
import Layout from '../../components/Layout/Layout';
import CommentBox from '../../components/CommentBox/CommentBox';
import CommentForm from '../../components/CommentForm/CommentForm';

class Post extends Component {
  state = {
    comment: ''
  };

  componentDidMount() {
    const { post } = this.props;

    if ( !post ) {
      this.props.history.push( "/posts" );
      return false;
    }
    //Action for setting post as old
    this.props.setOldPost( post.id );
  }

  fillFields = ( { target } ) => this.setState( { [ target.name ]: target.value } );

  submitHandler = e => {
    const { id } = this.props.post;
    const { comment } = this.state;

    e.preventDefault();
    this.props.addNewComment( id, comment );
    this.setState( { comment: '' } );
  }

  render() {
    const { comment } = this.state;
    const { isLoggedIn, post } = this.props;

    return (
      <Layout>
        <Link to="/posts">
          <i className="fas fa-angle-left"></i> Back
        </Link>
        { post &&
          (
            <>
              <article className={ classes.PostContent }>
                <h1>{ post.title }</h1>
                <p>{ post.msg }</p>
              </article>
              <h3><i className="far fa-comment"></i> Comments</h3>
              <div className={ classes.ContentComments }>
                { post.comments && post.comments.map( item => <CommentBox key={ item.id } comment={ item } /> ) }
              </div>
              { isLoggedIn && <CommentForm text={ comment } submit={ this.submitHandler } fillFields={ this.fillFields } /> }
            </>
          )
        }
      </Layout>
    );
  }
};

const mapStateToProps = ( { posts, auth }, { match: { params: { id } } } ) => ( {
  post: posts.posts.find( post => post.id === +id ),
  isLoggedIn: auth.login,
} );

const mapDispatchToProps = dispatch => bindActionCreators( { ...actions }, dispatch );

export default connect( mapStateToProps, mapDispatchToProps )( Post );