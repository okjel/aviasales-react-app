import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TicketsTypes from '../tickets-types';
import Tickets from '../tickets';
import styles from './main.module.scss';
import ButtonMore from '../buttonMore';
import LoadingInfo from '../loading-info';
import errorNotification from '../shared/error';

const Main = ({ transfers, error, isLoadAll, showMoreBtn }) => {
  const cachedFunc = useCallback((data) => errorNotification(data), []);
  useEffect(() => {
    cachedFunc(error);
  }, [error, cachedFunc]);

  return (
    <main className={styles.container}>
      <TicketsTypes styles={isLoadAll ? styles['tickets-type-no-load'] : styles['tickets-type-load']} />
      {!isLoadAll && transfers.some((el) => el.checked) ? <LoadingInfo /> : null}
      <Tickets />
      {showMoreBtn ? <ButtonMore /> : null}
    </main>
  );
};

Main.propTypes = {
  error: PropTypes.bool.isRequired,
  isLoadAll: PropTypes.bool.isRequired,
  showMoreBtn: PropTypes.bool.isRequired,
  transfers: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = ({ filter, other: { error, isLoadAll, showMoreBtn } }) => {
  return {
    transfers: filter,
    error,
    isLoadAll,
    showMoreBtn,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
