import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authActions from '../../store/auth/action';

import { Link } from 'react-router-dom';
import classes from './Toolbar.module.scss';

const Toolbar = props => (
  <header className={ classes.Header }>
    <div>
      Blog do
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        { props.isLoggedIn && (
          <li>
            <Link to="/new-post">New Post</Link>
          </li>
        ) }

        <li>
          { props.isLoggedIn ? <button onClick={ props.userSignOut }>Sign out</button> : <button onClick={ props.userSignIn }>Sign in</button> }
        </li>
      </ul>
    </nav>
  </header>
);

const mapStateToProps = ( { auth } ) => ( {
  isLoggedIn: auth.login
} );

const mapDispatchToProps = dispatch => bindActionCreators( { ...authActions }, dispatch );

export default connect( mapStateToProps, mapDispatchToProps )( Toolbar );
