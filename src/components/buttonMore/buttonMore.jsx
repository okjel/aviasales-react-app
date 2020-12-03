import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/pages';
import styles from './buttonMore.module.scss';
import Title from '../shared/title';

const ButtonMore = ({ showMore }) => {
  return (
    <button className={styles.btn} type="button" onClick={showMore}>
      <Title text="Показать еще 10 билетов" classes={styles.title} />
    </button>
  );
};

ButtonMore.propTypes = {
  showMore: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, actions)(ButtonMore);
