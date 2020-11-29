import React from 'react';
import PropTypes from 'prop-types';
import { addMinutes, format } from 'date-fns';
import styles from './segment.module.scss';

function formatDate(date) {
  return `${format(date, 'HH:mm')}`;
}

const Segment = ({ data: { date, duration, origin, destination, stops } }) => {
  const dateUp = new Date(date);
  const up = formatDate(dateUp);
  const down = formatDate(addMinutes(dateUp, duration));
  const travelTime = `${Math.floor(duration / 60)}ч ${duration % 60}м`;
  return (
    <div className={styles.option}>
      <div className={styles['timestamp-info']}>
        <div className={styles.title}>{`${origin} - ${destination}`}</div>
        <div className={styles.content}>{`${up} - ${down}`}</div>
      </div>
      <div className={styles['travel-time']}>
        <div className={styles.title}>В пути</div>
        <div className={styles.content}>{travelTime}</div>
      </div>
      <div className={styles['transfer-info']}>
        <div className={styles.title}>
          {stops.length ? `${stops.length} пересадк${stops.length > 1 ? 'и' : 'а'}` : `Без пересадок`}
        </div>
        <div className={styles.content}>{stops.join(', ')}</div>
      </div>
    </div>
  );
};

Segment.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    stops: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Segment;
