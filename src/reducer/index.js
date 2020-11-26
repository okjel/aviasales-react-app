import Checkbox from '../shared/checkbox';

export default (
  state = {
    filterTabs: {
      tabContent: [
        { id: 1, text: 'Самый дешевый' },
        { id: 2, text: 'Самый быстрый' },
      ],
      active: 1,
    },

    transfers: [
      {
        id: 1,
        name: 'Все',
        checked: false,
      },
      {
        id: 2,
        name: 'Без пересадок',
        checked: false,
      },
      {
        id: 3,
        name: '1 пересадка',
        checked: false,
      },
      {
        id: 4,
        name: '2 пересадки',
        checked: false,
      },
      {
        id: 5,
        name: '3 пересадки',
        checked: false,
      },
    ],
  },
  action
) => {
  if (action.type === 'SET_ACTIVE_TAB') {
    return { ...state, filterTabs: { ...state.filterTabs, active: action.payload } };
  }

  if (action.type === 'ACTIVATE_TRANSFER') {
    return {
      ...state,
      transfers: [
        ...state.transfers.map((transfer) =>
          transfer.id === action.payload ? { ...transfer, checked: !transfer.checked } : transfer
        ),
      ],
    };
  }

  return state;
};
