import * as types from "./../types/consts";

const initialState = {
  data: [],
  expanded: {
    id: null
  },
  currentDate: Math.round(+(new Date) / 1000),
  fromDate: (new Date(2018, 0, 1)).valueOf()
};

const dataRed = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_DATA:
      const data = action.data || state.data;

      return {
        ...state,
        data
      };
      case types.ADD_FROM_DATE:
        const fromDate = action.fromDate;

      return {
        ...state,
        fromDate
      };

    default:
      return state;
  }
};

export default dataRed;