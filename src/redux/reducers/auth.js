import * as actionType from "../actionTypes";

const authReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.LOGIN:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
