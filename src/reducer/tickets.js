import actionTypes from '../actions/action-types';

const initialState = [];

export default function tickets(state = initialState, action) {
  switch (action.type) {
    case actionTypes.addTickets:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
