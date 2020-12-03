import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';
import styles from './tickets-types.module.scss';
import Title from '../shared/title';
import * as actions from '../../actions/tabs-filter';

const TicketsTypes = ({ styles: parentStyles, filterTabs, setActiveTab }) => {
  const tabsRender = filterTabs.map((tab) => {
    const btnCx = cx(styles.tab, {
      [styles.active]: tab.active,
    });

    const titleStyles = cx(styles.title, { [styles['active-title']]: tab.active });

    const onClick = () => {
      if (!tab.active) setActiveTab(tab.id);
    };

    return (
      <button className={btnCx} type="button" key={tab.id} onClick={onClick}>
        <Title text={tab.text} classes={titleStyles} />
      </button>
    );
  });

  const containerClasses = cx(styles.container, parentStyles);

  return <div className={containerClasses}>{tabsRender}</div>;
};

TicketsTypes.propTypes = {
  styles: PropTypes.string,
  filterTabs: PropTypes.arrayOf(Object).isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

TicketsTypes.defaultProps = {
  styles: '',
};

const mapStateToProps = (state) => {
  return {
    filterTabs: state.sort,
  };
};

export default connect(mapStateToProps, actions)(TicketsTypes);
