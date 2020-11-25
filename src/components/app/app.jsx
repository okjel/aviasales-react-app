import React from 'react';
import classes from './app.module.scss';
import Header from '../header';
import Main from '../main';
import Filters from '../filters';

const App = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Filters styles={{ marginRight: '20px' }} />
      <Main />
    </div>
  );
};

export default App;
