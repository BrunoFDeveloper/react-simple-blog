import React, { Component } from 'react';
import { connect } from 'react-redux';
// import classes from './Posts.module.scss';

import Layout from '../../components/Layout/Layout';
import PostView from '../../components/PostView/PostView';

class Posts extends Component {
  render() {
    return (
      <Layout>
        { this.props.posts.length >= 1 ?
          this.props.posts.map( post => <PostView
            key={ post.id }
            title={ post.title }
            msg={ post.msg }
            new={ post.new }
            id={ post.id }
          /> )
          : 'No posts at moment!' }
      </Layout>
    );
  }
};

const mapStateToProps = ( { posts } ) => ( {
  posts: posts.posts
} );

export default connect( mapStateToProps )( Posts );
