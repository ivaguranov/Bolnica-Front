import * as actionType from "../actionTypes";

const appointmentReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.GET_APPOINTMENTS:
      return action.data;
    default:
      return state;
  }
};

export default appointmentReducer;
