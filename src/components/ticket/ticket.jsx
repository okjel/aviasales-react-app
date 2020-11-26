import React from 'react';
import PropTypes from 'prop-types';
import styles from './ticket.module.scss';
import logo from '../../images/S7-logo.png';

const Ticket = ({ styles: parentStyles }) => {
  return (
    <div className={styles.container} style={parentStyles}>
      <div className={styles.row}>
        <div className={styles.price}>13 400 Р</div>

        <img src={logo} alt="S7 logo" />
      </div>

      <div className={styles.option}>
        <div className={styles['timestamp-info']}>
          <div className={styles.title}>MOW – HKT</div>
          <div className={styles.content}>10:45 – 08:00</div>
        </div>
        <div className={styles['travel-time']}>
          <div className={styles.title}>В пути</div>
          <div className={styles.content}>21ч 15м</div>
        </div>
        <div className={styles['transfer-info']}>
          <div className={styles.title}>2 пересадки</div>
          <div className={styles.content}>HKG, JNB</div>
        </div>
      </div>
      <div className={styles.option}>
        <div className={styles['timestamp-info']}>
          <div className={styles.title}>MOW – HKT</div>
          <div className={styles.content}>10:45 – 08:00</div>
        </div>
        <div className={styles['travel-time']}>
          <div className={styles.title}>В пути</div>
          <div className={styles.content}>21ч 15м</div>
        </div>
        <div className={styles['transfer-info']}>
          <div className={styles.title}>2 пересадки</div>
          <div className={styles.content}>HKG, JNB</div>
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  styles: PropTypes.objectOf(Object),
};

Ticket.defaultProps = {
  styles: {},
};

export default Ticket;
