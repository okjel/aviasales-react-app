import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './title.module.scss';

const Title = ({ text, classes: parentStyles }) => {
  const classes = cx(styles.title, parentStyles);
  return <div className={classes}>{text}</div>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

Title.defaultProps = {
  classes: '',
};

export default Title;
