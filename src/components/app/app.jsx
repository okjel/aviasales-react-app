import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './app.module.scss';
import Header from '../header';
import Main from '../main';
import Filters from '../filters';
import * as actions from '../../actions/apiRequest';

const App = ({ searchId, setSearchId, getTickets }) => {
  useEffect(() => {
    if (!searchId) {
      setSearchId();
      return;
    }
    getTickets(searchId);
  });

  return (
    <div className={classes.container}>
      <Header />
      <Filters className={classes.filters} />
      <Main />
    </div>
  );
};

App.propTypes = {
  searchId: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  setSearchId: PropTypes.func.isRequired,
  getTickets: PropTypes.func.isRequired,
};

App.defaultProps = {
  searchId: null,
};

const mapStateToProps = (store) => {
  return {
    searchId: store.other.searchId,
    isLoadAll: store.other.isLoadAll,
  };
};

export default connect(mapStateToProps, actions)(App);
