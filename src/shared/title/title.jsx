import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.scss';

const Title = ({ text, styles: parentStyles }) => {
  return (
    <div className={styles.title} style={parentStyles}>
      {text}
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.objectOf(Object),
};

Title.defaultProps = {
  styles: {},
};

export default Title;
