import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TicketsTypes from '../tickets-types';
import Tickets from '../tickets';
import styles from './main.module.scss';
import ButtonMore from '../buttonMore';
import LoadingInfo from '../loading-info';
import Error from '../../shared/error';

const Main = ({ transfers, loading, error, isLoadAll, showMoreBtn }) => {
  return (
    <main className={styles.container}>
      <TicketsTypes styles={{ marginBottom: isLoadAll ? '20px' : '10px' }} />
      {error ? (
        <Error />
      ) : (
        <>
          {!isLoadAll && !loading && transfers.some((el) => el.checked) ? <LoadingInfo /> : null}
          <Tickets />
          {showMoreBtn && !loading ? <ButtonMore /> : null}
        </>
      )}
    </main>
  );
};

Main.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  isLoadAll: PropTypes.bool.isRequired,
  showMoreBtn: PropTypes.bool.isRequired,
  transfers: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = ({ transfers, loading, error, isLoadAll, showMoreBtn }) => {
  return {
    transfers,
    loading,
    error,
    isLoadAll,
    showMoreBtn,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
