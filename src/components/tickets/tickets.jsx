import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ticket from '../ticket';
import * as actions from '../../actions/pages';
import NoData from '../shared/no-data';

const Tickets = ({ tickets, pages, filterTabs, transfers, setShowMoreBtn }) => {
  const elementsOnPage = 10;
  const [renderTickets, setRenderTickets] = useState([]);

  const sortData = useCallback(
    (data) => {
      return data.sort((prevTicket, nextTicket) => {
        if (filterTabs[0].active) {
          return prevTicket.price - nextTicket.price;
        }
        return (
          prevTicket.segments.sort((prevSegment, nextSegment) => prevSegment.duration - nextSegment.duration)[0]
            .duration -
          nextTicket.segments.sort((prevSegment, nextSegment) => prevSegment.duration - nextSegment.duration)[0]
            .duration
        );
      });
    },
    [filterTabs]
  );

  const filterData = useCallback(
    (data) =>
      data.filter((ticket) => {
        return (
          transfers[ticket.segments[0].stops.length + 1].checked ||
          transfers[ticket.segments[1].stops.length + 1].checked
        );
      }),
    [transfers]
  );

  const convertToNotes = (data) => {
    return data.map((ticket) => <Ticket key={ticket.id} data={ticket} />);
  };

  useEffect(() => {
    const sortedData = sortData(tickets);
    const filteredData = filterData(sortedData);
    const shownTickets = filteredData.slice(0, elementsOnPage * pages);
    setRenderTickets(shownTickets);
    setShowMoreBtn(filteredData.length > elementsOnPage);
  }, [sortData, filterData, elementsOnPage, setShowMoreBtn, tickets, pages]);

  if (!renderTickets.length) {
    return <NoData />;
  }

  return convertToNotes(renderTickets);
};
Tickets.propTypes = {
  tickets: PropTypes.arrayOf(Object).isRequired,
  pages: PropTypes.number.isRequired,
  transfers: PropTypes.instanceOf(Array).isRequired,
  filterTabs: PropTypes.instanceOf(Object).isRequired,
  setShowMoreBtn: PropTypes.func.isRequired,
};

const mapStateToProps = ({ tickets, filter: transfers, sort: filterTabs, other: { pages } }) => {
  return {
    tickets,
    pages,
    transfers,
    filterTabs,
  };
};

export default connect(mapStateToProps, actions)(Tickets);
