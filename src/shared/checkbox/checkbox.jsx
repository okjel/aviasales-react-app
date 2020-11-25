import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './checkbox.module.scss';
import shared from '../shared.module.scss';

const Checkbox = ({ title }) => {
  const inputClasses = cx(styles.input, shared['visually-hidden']);
  return (
    <label className={styles.check}>
      <input className={inputClasses} type="checkbox" />
      <span className={styles.checkbox} />
      {title}
    </label>
  );
};

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Checkbox;
