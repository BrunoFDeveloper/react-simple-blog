import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './App.scss';

import Routes from './Routes';
import Toast from './components/UI/Toast/Toast';

const App = props => (
  <>
    <Routes isLoggedIn={ props.isLoggedIn } />
    <Toast toast={ props.toast } />
  </>
);

const mapStateToProps = ( { auth, toast } ) => ( {
  isLoggedIn: auth.login,
  toast: toast
} );

export default withRouter( connect( mapStateToProps )( App ) );
