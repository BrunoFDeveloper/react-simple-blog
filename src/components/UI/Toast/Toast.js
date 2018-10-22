import React from 'react';
import { connect } from 'react-redux';
import classes from './Toast.module.scss';

const Toast = props => {
  return (
    <>
      <div className={ [ classes.ToastContent, classes[ props.toast.type ] ].join( ' ' ) }>
        <p>{ props.toast.text }</p>
      </div>
    </>

  );
};

export default connect()( Toast );
