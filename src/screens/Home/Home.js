import React, { Component } from 'react';
import classes from './Home.module.scss';
import Layout from '../../components/Layout/Layout';

class Home extends Component {
  render() {
    return (
      <>
        <Layout>
          <article className={ classes.Article }>
            <header>
              <h1>New world</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur voluptas ratione earum voluptatum, animi officiis mollitia, nihil voluptates praesentium quidem distinctio. Quidem nihil vitae, expedita maxime minima et ex.</p>
            </header>
          </article>
        </Layout>
      </>
    );
  }
};

export default Home;
