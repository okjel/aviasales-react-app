import actionTypes from '../actions/action-types';

const initialState = { searchId: null, pages: 1, error: false, isLoadAll: false, showMoreBtn: false };

export default function other(state = initialState, action) {
  switch (action.type) {
    case actionTypes.setSearchId:
      return {
        ...state,
        searchId: action.payload,
      };
    case actionTypes.showMore:
      return {
        ...state,
        pages: state.pages + 1,
      };

    case actionTypes.setShowMoreBtn:
      return {
        ...state,
        showMoreBtn: action.payload,
      };

    case actionTypes.setError:
      return {
        ...state,
        error: action.payload,
      };

    case actionTypes.setIsLoadAll:
      return {
        ...state,
        isLoadAll: action.payload,
      };

    default:
      return state;
  }
}
