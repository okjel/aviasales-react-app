import hash from 'object-hash';
import AviasalesApiService from '../services/aviasales-api-service';
import actionTypes from './action-types';

export const setError = (value) => ({ type: actionTypes.setError, payload: value });

export const setIsLoadAll = (value) => ({ type: actionTypes.setIsLoadAll, payload: value });

export const setSearchId = () => async (dispatch) => {
  try {
    const { searchId } = await AviasalesApiService.setSearchId();
    dispatch({ type: actionTypes.setSearchId, payload: searchId });
    dispatch(setError(false));
  } catch {
    dispatch(setError(true));
  }
};

export const getTickets = (searchId) => async (dispatch, getState) => {
  while (!getState().other.isLoadAll) {
    try {
      const response = await AviasalesApiService.getTickets(searchId);
      const hashTickets = response.tickets.map((ticket) => ({ ...ticket, id: hash(ticket) }));

      dispatch({ type: actionTypes.addTickets, payload: hashTickets });
      dispatch(setIsLoadAll(response.stop));
      dispatch(setError(false));
    } catch {
      dispatch(setError(true));
    }
  }
};
