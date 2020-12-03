import actionTypes from '../actions/action-types';

const initialState = [
  {
    id: 1,
    name: 'Все',
    checked: true,
  },
  {
    id: 2,
    name: 'Без пересадок',
    checked: true,
  },
  {
    id: 3,
    name: '1 пересадка',
    checked: true,
  },
  {
    id: 4,
    name: '2 пересадки',
    checked: true,
  },
  {
    id: 5,
    name: '3 пересадки',
    checked: true,
  },
];

export default function filter(state = initialState, action) {
  let mapCallback;
  let stateTotal;
  const transferTypeAll = state.find((el) => el.id === 1);
  switch (action.type) {
    case actionTypes.activateTransfer:
      if (action.payload === transferTypeAll.id) {
        mapCallback = (transfer) => ({ ...transfer, checked: !transferTypeAll.checked });
      }

      if (action.payload !== transferTypeAll.id) {
        mapCallback = (transfer) =>
          transfer.id === action.payload ? { ...transfer, checked: !transfer.checked } : transfer;
      }

      stateTotal = [...state.map(mapCallback)];

      if (stateTotal.filter((tra) => tra.checked && tra.id !== transferTypeAll.id).length === stateTotal.length - 1) {
        return stateTotal.map((transfer) =>
          transfer.id === transferTypeAll.id ? { ...transfer, checked: true } : transfer
        );
      }

      if (stateTotal.filter((tra) => tra.checked && tra.id !== transferTypeAll.id).length < stateTotal.length - 1) {
        return stateTotal.map((transfer) =>
          transfer.id === transferTypeAll.id ? { ...transfer, checked: false } : transfer
        );
      }

      return stateTotal;

    default:
      return state;
  }
}
