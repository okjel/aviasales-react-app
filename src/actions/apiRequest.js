import AviasalesApiService from '../services/aviasales-api-service';

export const setError = () => ({ type: 'SET_ERROR' });

export const setSearchId = () => async (dispatch) => {
  try {
    const { searchId } = await AviasalesApiService.setSearchId();
    dispatch({ type: 'SET_SEARCH_ID', payload: searchId });
  } catch {
    dispatch(setError());
  }
};

export const getTickets = (searchId) => async (dispatch, getState) => {
  try {
    while (!getState().isLoadAll) {
      const response = await AviasalesApiService.getTickets(searchId);
      dispatch({ type: 'ADD_TICKETS', payload: response });
    }
  } catch {
    dispatch(setError());
  }
};
