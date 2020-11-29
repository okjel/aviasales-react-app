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
    tickets: [],
    searchId: null,
    pages: 1,
    loading: true,
    error: false,
    isLoadAll: false,
    showMoreBtn: false,
  },
  action
) => {
  if (action.type === 'SET_ACTIVE_TAB') {
    return { ...state, filterTabs: { ...state.filterTabs, active: action.payload } };
  }

  if (action.type === 'ACTIVATE_TRANSFER') {
    let mapCallback;

    const transferTypeAll = state.transfers.find((el) => el.id === 1);

    if (action.payload === transferTypeAll.id) {
      mapCallback = (transfer) => ({ ...transfer, checked: !transferTypeAll.checked });
    }

    if (action.payload !== transferTypeAll.id) {
      mapCallback = (transfer) =>
        transfer.id === action.payload ? { ...transfer, checked: !transfer.checked } : transfer;
    }

    const stateTotal = {
      ...state,
      transfers: [...state.transfers.map(mapCallback)],
    };

    if (
      stateTotal.transfers.filter((tra) => tra.checked && tra.id !== transferTypeAll.id).length ===
      stateTotal.transfers.length - 1
    ) {
      return {
        ...stateTotal,
        transfers: [
          ...stateTotal.transfers.map((transfer) =>
            transfer.id === transferTypeAll.id ? { ...transfer, checked: true } : transfer
          ),
        ],
      };
    }

    if (
      stateTotal.transfers.filter((tra) => tra.checked && tra.id !== transferTypeAll.id).length <
      stateTotal.transfers.length - 1
    ) {
      return {
        ...stateTotal,
        transfers: [
          ...stateTotal.transfers.map((transfer) =>
            transfer.id === transferTypeAll.id ? { ...transfer, checked: false } : transfer
          ),
        ],
      };
    }

    return stateTotal;
  }

  if (action.type === 'SET_SEARCH_ID') {
    return {
      ...state,
      searchId: action.payload,
    };
  }

  if (action.type === 'SET_SEARCH_ID') {
    return {
      ...state,
      searchId: action.payload,
    };
  }

  if (action.type === 'ADD_TICKETS') {
    return {
      ...state,
      tickets: [...state.tickets, ...action.payload.tickets],
      isLoadAll: action.payload.stop,
    };
  }

  if (action.type === 'SHOW_MORE') {
    return {
      ...state,
      pages: state.pages + 1,
    };
  }

  if (action.type === 'SET_SHOW_MORE_BTN') {
    return {
      ...state,
      showMoreBtn: action.payload,
    };
  }

  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.payload,
    };
  }

  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      error: !state.error,
    };
  }

  return state;
};
