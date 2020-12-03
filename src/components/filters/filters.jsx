import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';
import styles from './filters.module.scss';
import Checkbox from '../shared/checkbox';
import Title from '../shared/title';
import * as actions from '../../actions/checkboxes-filter';

const Filters = ({ className: parentStyles, transfers, activateTransfer }) => {
  const checkboxesRender = transfers.map((transfer) => {
    return <Checkbox key={transfer.id} data={transfer} onChecked={activateTransfer} />;
  });

  const classes = cx(styles.container, parentStyles);
  return (
    <div className={classes}>
      <Title text="Количество пересадок" classes={styles.title} />
      {checkboxesRender}
    </div>
  );
};

Filters.propTypes = {
  className: PropTypes.string.isRequired,
  transfers: PropTypes.arrayOf(Object).isRequired,
  activateTransfer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    transfers: state.filter,
  };
};

export default connect(mapStateToProps, actions)(Filters);
