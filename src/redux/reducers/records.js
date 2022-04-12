import * as actionType from "../actionTypes";

const recordReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.GET_RECORDS:
      return action.data;
    case actionType.GET_RECORD:
      return [...state, action.data];
    default:
      return state;
  }
};

export default recordReducer;
