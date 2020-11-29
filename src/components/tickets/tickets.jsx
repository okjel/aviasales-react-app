import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import hash from 'object-hash';
import { connect } from 'react-redux';
import Ticket from '../ticket';
import * as actions from '../../actions/pages';
import { setLoading } from '../../actions/loading';
import Loader from '../../shared/loader';
import NoData from '../../shared/no-data';

const Tickets = React.memo(
  ({ tickets, pages, filterTabs, transfers, setShowMoreBtn, setLoading: setLoad, loading }) => {
    const [elementsOnPage] = useState(10);
    const [renderTickets, setRenderTickets] = useState(null);

    const sortData = useCallback(
      (data) => {
        return data.sort((prevTicket, nextTicket) => {
          if (filterTabs.active === filterTabs.tabContent[0].id) {
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
      [filterTabs.active, filterTabs.tabContent]
    );

    const filterData = useCallback(
      (data) => {
        return data.filter((ticket) => {
          let result = false;
          transfers.forEach((transfer) => {
            if (
              transfer.checked &&
              ((transfer.id === 2 && ticket.segments.filter((segment) => segment.stops.length === 0).length > 0) ||
                (transfer.id === 3 && ticket.segments.filter((segment) => segment.stops.length === 1).length > 0) ||
                (transfer.id === 4 && ticket.segments.filter((segment) => segment.stops.length === 2).length > 0) ||
                (transfer.id === 5 && ticket.segments.filter((segment) => segment.stops.length === 3).length > 0))
            ) {
              result = true;
            }
          });
          return result;
        });
      },
      [transfers]
    );

    const convertToNotes = useCallback(
      (data) => {
        return data
          .filter((el, idx) => idx < elementsOnPage * pages)
          .map((ticket) => <Ticket key={hash(ticket)} data={ticket} styles={{ marginBottom: '20px' }} />);
      },
      [elementsOnPage, pages]
    );

    useEffect(() => {
      setLoad(true);
      const sortedData = sortData(tickets);
      const filteredData = filterData(sortedData);
      const renderElements = convertToNotes(filteredData);
      setRenderTickets(renderElements);

      if (filteredData.length > elementsOnPage) setShowMoreBtn(true);
      if (filteredData.length <= elementsOnPage) setShowMoreBtn(false);

      setLoad(false);
    }, [setLoad, sortData, filterData, convertToNotes, elementsOnPage, setShowMoreBtn, tickets]);

    if (loading) {
      return <Loader />;
    }

    if (!renderTickets.length) {
      return <NoData />;
    }

    return renderTickets;
  }
);

Tickets.propTypes = {
  tickets: PropTypes.arrayOf(Object).isRequired,
  pages: PropTypes.number.isRequired,
  transfers: PropTypes.instanceOf(Array).isRequired,
  filterTabs: PropTypes.instanceOf(Object).isRequired,
  setShowMoreBtn: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ tickets, pages, transfers, filterTabs, loading }) => {
  return {
    tickets,
    pages,
    transfers,
    filterTabs,
    loading,
  };
};

export default connect(mapStateToProps, { ...actions, setLoading })(Tickets);
