import actionTypes from '../actions/action-types';

const initialState = [
  { id: 1, text: 'Самый дешевый', active: true },
  { id: 2, text: 'Самый быстрый', active: false },
];

export default function sort(state = initialState, action) {
  switch (action.type) {
    case actionTypes.setActiveTab:
      return state.map((el) => (action.payload === el.id ? { ...el, active: true } : { ...el, active: false }));
    default:
      return state;
  }
}
