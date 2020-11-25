import React from 'react';
import PropTypes from 'prop-types';
import TicketsTypes from '../tickets-types';
import Tickets from '../tickets';
import styles from './main.module.scss';

const Main = () => {
  return (
    <main className={styles.container}>
      <TicketsTypes styles={{ marginBottom: '20px' }} />
      <Tickets />
    </main>
  );
};

Main.propTypes = {
  //
};

export default Main;
