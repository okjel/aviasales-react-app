import React from 'react';
import PropTypes from 'prop-types';
import hash from 'object-hash';
import styles from './ticket.module.scss';
import Segment from '../segment';

const Ticket = ({ data: { price, carrier, segments }, styles: parentStyles }) => {
  const renderSegments = segments.map((segment) => {
    return <Segment key={hash(segment)} data={segment} />;
  });

  return (
    <div className={styles.container} style={parentStyles}>
      <div className={styles.row}>
        <div className={styles.price}>{`${new Intl.NumberFormat('ru-RU').format(price)} Р`}</div>
        <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt={`${carrier} logo`} />
      </div>
      {renderSegments}
    </div>
  );
};

Ticket.propTypes = {
  styles: PropTypes.instanceOf(Object),
  data: PropTypes.shape({
    price: PropTypes.number,
    carrier: PropTypes.string,
    segments: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        duration: PropTypes.number.isRequired,
        origin: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        stops: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ),
  }).isRequired,
};

Ticket.defaultProps = {
  styles: {},
};

export default Ticket;
