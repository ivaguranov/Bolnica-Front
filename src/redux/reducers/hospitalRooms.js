import * as actionType from "../actionTypes";

const hospitalRoomsReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.GET_REFERRALS:
      return action.data;
    default:
      return state;
  }
};

export default hospitalRoomsReducer;
