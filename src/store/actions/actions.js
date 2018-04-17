import * as types from "../types/consts";

export const addData = (data) => ({
  type: types.ADD_DATA,
  data
});

export const addFromData = (fromDate) => ({
  type: types.ADD_FROM_DATE,
  fromDate
});
