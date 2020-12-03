import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './checkbox.module.scss';
import shared from '../shared.module.scss';

const Checkbox = ({ data: { id, name, checked }, onChecked }) => {
  const inputClasses = cx(styles.input, shared['visually-hidden']);
  return (
    <label className={styles.check}>
      <input className={inputClasses} type="checkbox" checked={checked} onChange={() => onChecked(id)} />
      <span className={styles.checkbox} />
      {name}
    </label>
  );
};

Checkbox.propTypes = {
  data: PropTypes.objectOf(Object).isRequired,
  onChecked: PropTypes.func.isRequired,
};

export default Checkbox;
