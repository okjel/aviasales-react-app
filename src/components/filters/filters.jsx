import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './filters.module.scss';
import Checkbox from '../../shared/checkbox';
import Title from '../../shared/title';

const Filters = ({ styles: parentStyles }) => {
  const titleStyles = { marginLeft: '20px', marginBottom: '10px' };
  return (
    <div className={styles.container} style={parentStyles}>
      <Title text="Количество пересадок" styles={titleStyles} />
      <Checkbox title="Все" />
      <Checkbox title="Без пересадок" />
      <Checkbox title="1 пересадка" />
      <Checkbox title="2 пересадки" />
      <Checkbox title="3 пересадки" />
    </div>
  );
};

Filters.propTypes = {
  styles: PropTypes.objectOf(Object).isRequired,
};

export default Filters;
