import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './store/action';

import Form from '../../components/Form/Form';
import Layout from '../../components/Layout/Layout';

class NewPost extends Component {
  state = {
    title: '',
    msg: ''
  };

  fillFields = ( { target } ) => this.setState( { [ target.name ]: target.value } );

  submitHandler = e => {
    const { title, msg } = this.state;

    e.preventDefault();
    if ( title.trim() === '' || msg.trim() === '' ) {
      return;
    }

    this.props.addNewPost( title, msg );
    this.setState( { title: '', msg: '' } );
  }
  render() {
    const { title, msg } = this.state;

    return (
      <Layout>
        <Form
          title={ title }
          msg={ msg }
          submit={ this.submitHandler }
          fillFields={ this.fillFields } />
      </Layout>
    );
  }
};

const mapDispatchToProps = dispatch => bindActionCreators( { ...actions }, dispatch );

export default connect( null, mapDispatchToProps )( NewPost );