import React from 'react';
import classes from './Layout.module.scss';
import Toolbar from '../Toolbar/Toolbar';

const Layout = props => (
  <>
    <Toolbar />
    <section className={ classes.Main }>
      <div className={ classes.Container }>
        { props.children }
      </div>
    </section>
  </>
);

export default Layout;