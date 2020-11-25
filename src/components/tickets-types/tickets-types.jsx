import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './tickets-types.module.scss';
import Title from '../../shared/title';

const TicketsTypes = ({ styles: parentStyles }) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, text: 'Самый дешевый' },
    { id: 2, text: 'Самый быстрый' },
  ];

  const tabsRender = tabs.map((tab) => {
    const btnCx = cx(styles.tab, {
      [styles.active]: activeTab === tab.id,
    });

    const titleStyles = { color: activeTab === tab.id ? '#ffffff' : null, cursor: 'inherit' };

    return (
      <button className={btnCx} type="button" key={tab.id} onClick={() => setActiveTab(tab.id)}>
        <Title text={tab.text} styles={titleStyles} />
      </button>
    );
  });

  return (
    <div className={styles.container} style={parentStyles}>
      {tabsRender}
    </div>
  );
};

TicketsTypes.propTypes = {
  styles: PropTypes.objectOf(Object),
};

TicketsTypes.defaultProps = {
  styles: {},
};

export default TicketsTypes;
