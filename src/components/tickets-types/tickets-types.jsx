import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';
import styles from './tickets-types.module.scss';
import Title from '../../shared/title';
import * as actions from '../../actions/tabs-filter';

const TicketsTypes = ({ styles: parentStyles, filterTabs: { tabContent, active }, setActiveTab }) => {
  const tabsRender = tabContent.map((tab) => {
    const btnCx = cx(styles.tab, {
      [styles.active]: active === tab.id,
    });

    const titleStyles = { color: active === tab.id ? '#ffffff' : null, cursor: 'inherit' };

    const onClick = () => {
      if (tab.id !== active) setActiveTab(tab.id);
    };

    return (
      <button className={btnCx} type="button" key={tab.id} onClick={onClick}>
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
  filterTabs: PropTypes.objectOf(Object).isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

TicketsTypes.defaultProps = {
  styles: {},
};

const mapStateToProps = (state) => {
  return {
    filterTabs: state.filterTabs,
  };
};

export default connect(mapStateToProps, actions)(TicketsTypes);
