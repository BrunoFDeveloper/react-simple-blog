import React from 'react';
import classes from './Form.module.scss';
import Button from '../UI/Button/Button';

const Form = props => (
  <>
    <form className={ classes.FormContent } onSubmit={ props.submit }>
      <div>
        <span>Title:</span>
        <input type="text" name="title" value={ props.title } onChange={ props.fillFields } />
      </div>
      <div>
        <span>Message:</span>
        <textarea name="msg" value={ props.msg } onChange={ props.fillFields }></textarea>
      </div>
      <Button>Submit</Button>
    </form>
  </>
);

export default Form;
