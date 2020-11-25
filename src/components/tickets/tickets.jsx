import React from 'react';
import PropTypes from 'prop-types';
import Ticket from '../ticket';

const Tickets = () => {
  return (
    <div>
      <Ticket styles={{ marginBottom: '20px' }} />
      <Ticket styles={{ marginBottom: '20px' }} />
      <Ticket />
    </div>
  );
};

Tickets.propTypes = {
  //
};

export default Tickets;
