import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './filters.module.scss';
import Checkbox from '../../shared/checkbox';
import Title from '../../shared/title';
import * as actions from '../../actions/checkboxes-filter';

const Filters = ({ styles: parentStyles, transfers, activateTransfer }) => {
  const checkboxesRender = transfers.map((transfer) => {
    return <Checkbox key={transfer.id} data={transfer} onChecked={activateTransfer} />;
  });

  const titleStyles = { marginLeft: '20px', marginBottom: '10px' };
  return (
    <div className={styles.container} style={parentStyles}>
      <Title text="Количество пересадок" styles={titleStyles} />
      {checkboxesRender}
    </div>
  );
};

Filters.propTypes = {
  styles: PropTypes.objectOf(Object).isRequired,
  transfers: PropTypes.arrayOf(Object).isRequired,
  activateTransfer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    transfers: state.transfers,
  };
};

export default connect(mapStateToProps, actions)(Filters);
