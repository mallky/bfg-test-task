import * as types from "./../types/consts";

const initialState = {
  data: {},
  expanded: {
    id: null
  },
  date: new Date()
};

const dataRed = (state = initialState, action) => {
  switch (action.type) {
    // For Week
    case types.ADD_DATA:
      const data = action.data || state.data;

      return {
        ...state,
        data
      };

    default:
      return state;
  }
};

export default dataRed;